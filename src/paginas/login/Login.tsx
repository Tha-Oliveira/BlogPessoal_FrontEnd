import React, {ChangeEvent, useEffect, useState} from "react";
import "./Login.css";
import UsuarioLogin from "../../model/UsuarioLogin";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/Action";
import { toast } from "react-toastify";

function Login()
{
let navigate = useNavigate();
const dispatch = useDispatch()
const [token, setToken] = useState ("")

    const [usuarioLogin, setUsuarioLogin] = useState <UsuarioLogin> ({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>)
    {
        setUsuarioLogin ({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(usuarioLogin.usuario !== "" && usuarioLogin.senha.length >= 8)
        {
            setForm(true)
        }
    }, [usuarioLogin])

    const [form, setForm] = useState(false)

    async function onSubmit(e:ChangeEvent<HTMLFormElement>)
    {
        e.preventDefault();
        try 
        {
            await login(`usuarios/logar`, usuarioLogin, setToken)
            toast.success("Usuário logado com sucesso!", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        } 
        catch (error)
        {
            toast.error("Login ou senha inválidos!", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
            
        }
    }

    useEffect(() => {
        if (token !== "")
        {
            dispatch(addToken(token))
            navigate("/home")
        }
    }, [token])

    return(
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">
                            Entrar
                        </Typography>
                        <TextField value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        id="usuario" name="usuario" label="Usuário" variant="outlined" margin="normal" fullWidth />

                        <TextField value={usuarioLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} 
                        id="senha" name="senha" label="Senha" variant="outlined" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" color="primary" disabled={!form}>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to="/cadastro" className="text-decorator-none">
                        <Typography variant="subtitle1" gutterBottom align="center" className="textos1" color="#3B3B98">
                            Cadastre-se
                        </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className="imagem"> {/* Trocar foto */}
                
            </Grid>
        </Grid>
    );
}

export default Login;