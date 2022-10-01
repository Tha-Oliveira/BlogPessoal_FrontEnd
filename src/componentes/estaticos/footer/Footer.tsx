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
            <Grid container direction="row" justifyContent="center" alignItems="flex-end">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" gutterBottom className="textos" align="center">Thais Oliveira</Typography>
                        </Box>
                            <Box>
                                <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2022 Copyright</Typography>
                            </Box>
                    </Box>

                    <Box className="box2">
                        <Box display="flex" alignItems="end" justifyContent="end" >
                            <a href="https://github.com/Tha-Oliveira" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.instagram.com/thaa.oliveira/" target="_blank">
                                <InstagramIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/tha-oliveira//" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                            
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