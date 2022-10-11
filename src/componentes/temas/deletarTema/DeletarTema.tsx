import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../model/Tema";
import { buscaId, deleteId } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/TokensReducer";

function DeletarTema()
{
    let navigate = useNavigate()
    const {id} = useParams <{id: string}>()
    const [tema, setTema] = useState<Tema>()
    const token = useSelector<TokenState, TokenState ["tokens"] >(
        (state) => state.tokens
    )
    
    useEffect(() => {
        if(token === "")
        {
            alert ("Ops! Parece que você não está logado")
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
        buscaId (`/temas/${id}`, setTema, {
            headers: {"Authorization": token}
        })
    }

    function sim()
    {
        navigate("/temas")
        deleteId(`/temas/${id}`, {
            headers: {"Authorization": token}
        })
        alert ("Tema deletado com sucesso!")
    }

    function nao()
    {
        navigate("/temas")
    }

    return(
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o tema?
                            </Typography>
                            <Typography color="textSecondary">
                                {tema?.descricao}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size="large" color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
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

export default DeletarTema;