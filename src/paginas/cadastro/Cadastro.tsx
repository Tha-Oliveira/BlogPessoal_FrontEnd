import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import User from "../../model/Cadastro";
import {cadUsuario} from '../../services/Service'
import "./Cadastro.css";

function Cadastro()
{
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [user, setUser] = useState <User> ({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
    })

    useEffect(() => {
        if (userResult.id !== 0)
        {
        navigate("/login")
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>)
    {
        setConfirmarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>)
    {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e:ChangeEvent<HTMLFormElement>)
    {
        e.preventDefault();
        if(confirmarSenha === user.senha && user.senha.length >= 8)
        {
            try
            {
                await cadUsuario ("usuarios/cadastrar", user, setUserResult);
                alert("Usuário cadastrado com sucesso!");
            }
            catch (error)
            {
                alert("Falha ao cadastrar o usuário. Por favor, confira os campos!")
            }
        } 
        else
        {
            alert("Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos!");
        }
    }

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className="imagem2"></Grid>

            <Grid item xs={6} alignItems="center">
                <Box paddingX={10}>
                <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos2">
                            Cadastrar
                        </Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        required id="nome" name="nome" label="Nome" variant="outlined" margin="normal" fullWidth />

                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        required id="usuario" name="usuario" label="Usuário" variant="outlined" margin="normal" fullWidth />

                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        required id="senha" name="senha" label="Senha" variant="outlined" margin="normal" type="password" fullWidth />

                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} 
                        required id="confirmarSenha" name="confirmarSenha" label="Confirmar Senha" variant="outlined" margin="normal" type="password" fullWidth />

                        <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        id="foto" name="foto" label="Foto" variant="outlined" margin="normal" fullWidth />
                        <Box marginTop={2} textAlign="center">
                        <Button type="submit" variant="contained" color="primary" className="btnCadastrar">
                                    Cadastrar
                                </Button>
                            <Link to="/login" className="text-decorator-none">
                                <Button variant="contained" color="secondary">
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Cadastro;