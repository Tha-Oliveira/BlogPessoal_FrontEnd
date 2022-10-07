import { Button, FormControl, FormHelperText, InputLabel, Select, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react"
import "./CadastroPost.css"

function CadastroPost()
{
    return(
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro postagem</Typography>
                <TextField value="" id="titulo" label="Título" variant="outlined" name="titulo" margin="normal" fullWidth />
                <TextField value="" id="texto" label="Texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper">
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPost;