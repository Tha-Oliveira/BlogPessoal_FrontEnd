import React, { useEffect, useState } from "react"
import { Box, Button, Card, CardActions, Typography } from "@mui/material";
import { CardContent } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Postagem from "../../../model/Postagem";
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";

function ListaPostagem()
{
    let navigate = useNavigate()
    const [posts, setPosts] = useState<Postagem [] >([])

    const token = useSelector<TokenState, TokenState ["tokens"] >(
        (state) => state.tokens
    )

    const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
    
    useEffect(() =>{
        if (token === "")
        {
            toast.error("Ops! Parece que você não está logado", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
            navigate ("/login")
        }
    }, [token])
    
    async function getPost()
    {
        await busca ("/postagens", setPosts, {
            headers: {"Authorization" : token}
        })
    }
    
    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <>
            {posts.map(post => (
                <Box m={2}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {post.titulo}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {post.texto}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {post.tema?.descricao}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Postado por: {post.usuario?.nome}
                            </Typography>                                
                        </CardContent>
                        <CardActions>
                            {post.usuario?.id === +userId ? (
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size="small" color="primary">
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size="small" color="secondary">
                                            Deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                            ) : (
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size="small" color="primary" disabled>
                                            Atualizar
                                        </Button>
                                    </Box>
                                    <Box mx={1}>
                                        <Button variant="contained" size="small" color="secondary" disabled>
                                            Deletar
                                        </Button>
                                    </Box>
                            </Box>
                            )}
                        </CardActions>
                    </Card>
                </Box>
                ))}
        </>
    );
}

export default ListaPostagem;