import React, { useState } from "react"
import { TabContext, TabPanel } from "@material-ui/lab";
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import ListaPostagem from "../listaPostagem/ListaPostagem";
import "./TabPostagem.css"

function TabPostagem()
{
    const [value, setValue] = useState("1")

    function handleChange(event: React.ChangeEvent<{}>, newValue: string)
    {
        setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static" className="barra">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
                        Sobre nós
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto hic, ratione enim mollitia, 
                        doloremque nulla earum deleniti quas ducimus odio excepturi cum saepe dolorum veniam eos, soluta perferendis 
                        possimus laboriosam?
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    )
}

export default TabPostagem;