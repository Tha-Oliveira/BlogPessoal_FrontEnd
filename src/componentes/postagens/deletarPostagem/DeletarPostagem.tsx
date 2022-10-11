import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../model/Postagem";
import { buscaId, deleteId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/TokensReducer";
import "./DeletarPostagem.css"

function DeletarPostagem()
{
    let navigate = useNavigate()
    const {id} = useParams <{id: string}>()
    const [post, setPosts] = useState<Postagem>()
    const token = useSelector<TokenState, TokenState ["tokens"] >(
        (state) => state.tokens
    )
    
    useEffect(() => {
        if(token === "")
        {
            toast.error("Ops! Parece que você não está logado", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
            navigate ("/login")
        }
    }, [token])
    
    useEffect(() => {
        if(id !== undefined)
        {
            findById(id)
        }
    }, [id])
    
    async function findById (id: string) 
    {
        buscaId (`/postagens/${id}`, setPosts, {
            headers: {"Authorization": token}
        })
    }

    function sim()
    {
        navigate("/posts")
        deleteId(`/postagens/${id}`, {
            headers: {"Authorization": token}
        })
        toast.success("Postagem deletada com sucesso!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    }

    function nao()
    {
        navigate("/posts")
    }

    return(
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a postagem?
                            </Typography>
                            <Typography color="textSecondary">
                                {post?.titulo}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="margiinLeft" size="large" color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant="contained" size="large" color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletarPostagem;