import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActions, Typography } from "@mui/material";
import { CardContent } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Postagem from "../../../model/Postagem";
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";

function ListaPostagem() {
    let navigate = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

    useEffect(() =>{
        if (token === "")
        {
            toast.error("Ops! Parece que você não está logado", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
            navigate ("/login")
        }
    }, [token])

    async function getPostagem() 
    {
        await busca("/postagens", setPostagens, {
        headers: { Authorization: token },
    });
    }

    useEffect(() => {
        getPostagem();
    }, [postagens.length]);

    return (
        <>
        {postagens.map((postagem) => (
            <Box m={2} key={postagem.id}>
            <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Postagens
                </Typography>
                <Typography variant="h5" component="h2">
                    {postagem.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                    {postagem.texto}
                </Typography>
                <Typography variant="body2" component="p">
                    {postagem.tema?.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                    Postado por: {postagem.usuario?.nome}
                </Typography>
            </CardContent>

            <CardActions>
                {postagem.usuario?.id === +userId ? (
                    <Box display="flex" justifyContent="center" mb={1.5}>
                    <Link to={`/formularioPostagem/${postagem.id}`}className="text-decorator-none">
                    <Box mx={1}>
                        <Button variant="contained" size="small" color="primary">
                            Atualizar
                        </Button>
                    </Box>
                    </Link>
                    <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                        <Button
                            variant="contained" size="small" color="secondary">
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
