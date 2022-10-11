import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import Tema from "../../../model/Tema";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/TokensReducer";

function ListaTema()
{
const [temas, setTemas] = useState<Tema[]>([])
let navigate = useNavigate()
const token = useSelector<TokenState, TokenState ["tokens"] >(
    (state) => state.tokens
)

useEffect(() =>{
    if (token === "")
    {
        alert ("Ops! Parece que não está logado.")
        navigate ("/login")
    }
}, [token])

async function getTemas()
{
    await busca("/temas", setTemas, {
        headers: {"Authorization" : token}
    })
}

useEffect(() => {
    getTemas()
}, [temas.length])

    return (
        <>
            {temas.map(tema => (
                <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {tema.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size="small" color="primary">
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size="small" color="secondary">
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
    </Box>
            ))}
        </>
    );
}

export default ListaTema;