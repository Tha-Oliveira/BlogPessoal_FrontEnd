import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";

function Footer()
{
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}></Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="end" margin="1rem" padding="1rem">
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
                    <Box paddingTop={1} style={{ backgroundColor: "#303F9F", height: "60px" }}>
                    <Box>
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Thais Oliveira</Typography>
                        </Box>
                        <Box>
                            
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;