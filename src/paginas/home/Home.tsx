import { Button, Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./Home.css";
import TabPostagem from "../../componentes/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";

function Home()
{
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState ["tokens"] >(
        (state) => state.tokens
    )
    
    useEffect(() => 
    {
        if (token === "") 
        {
            toast.error("Ops! Parece que você não está logado", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
            navigate ("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Deixe aqui a sua sugestão de viagem, 
                        passeio e dicas!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to = "/posts" className="text-decorator-none">
                            <Button variant="outlined" className="botao">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className="img">
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

// para fazer comentários na linha do código usar: {/**/}
// tamanho das telas xs-> extra small / sm-> small