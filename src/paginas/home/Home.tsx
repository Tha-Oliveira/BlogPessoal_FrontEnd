import { Button, Typography } from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React from "react";
import "./Home.css";
import { blueGrey, cyan } from '@mui/material/colors';

function Home()
{
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: cyan[100] }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: blueGrey[700], fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: blueGrey[700], fontWeight: "bold" }}>Compartilhe comigo suas idéias e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: cyan[500], color: "white" }}>Nova Postagem</Button>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: cyan[500], color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.pixabay.com/photo/2019/06/13/09/41/business-4271251_960_720.png" alt="Ilustração de programador" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

// para fazer comentários na linha do código usar: {/**/}
// tamanho das telas xs-> extra small / sm-> small