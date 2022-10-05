import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";
import { cyan } from "@mui/material/colors";
import "./Footer.css"

function Footer()
{
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography align="center" gutterBottom className='texto1'>Conecte-se comigo:</Typography>
                        </Box>

                        <Box className='social'>
                            <a href="https://github.com/tha-oliveira" target="_blank">
                                <GitHubIcon className='github' />
                            </a>
                            <a href="https://www.instagram.com/thaa.oliveira/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/tha-oliveira/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" gutterBottom className='texto2' align="center">Thais Oliveira</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto2'>© 2022 Copyright</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;

// paddingX = espaçamento para a direita e esquerda / espaçamento interno
// marigin = margin é o espaçamento externo 