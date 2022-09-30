import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";
import { cyan } from "@mui/material/colors";

function Footer()
{
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="flex-end">
                <Grid alignItems="center" direction="row" item xs={12}>
                <Box paddingTop={1} style={{ backgroundColor: cyan[800], height: "60px" }}>
                    <Box>
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Thais Oliveira</Typography>
                        </Box>
                        <Box>
                            
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright</Typography>
                        </Box>
                </Box>
                    <Box style={{ backgroundColor: cyan[800], height: "50px" }}>
                        {/* <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}></Typography>
                        </Box> */}
                        <Box display="flex" alignItems="end" justifyContent="end" margin="1rem" padding="1rem">
                            <a href="https://github.com/Tha-Oliveira" target="_blank">
                                <GitHubIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/thaa.oliveira/" target="_blank">
                                <InstagramIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/tha-oliveira//" target="_blank">
                                <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
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