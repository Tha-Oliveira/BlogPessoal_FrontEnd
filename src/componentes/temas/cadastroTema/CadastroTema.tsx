import { Button, Container, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Tema from "../../../model/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/TokensReducer";
import "./CadastroTema.css"

function CadastroTema() // seria a categoria
{
let navigate = useNavigate()
const {id} = useParams <{id: string}>()
const token = useSelector<TokenState, TokenState ["tokens"] >(
    (state) => state.tokens
)
const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ""
})

useEffect(() => {
    if(token === "")
    {
        toast.error("Ops! Parece que você não está logado", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        navigate ("/login")
    }
}, [token])

useEffect(() => {
    if(id !== undefined)
    {
        findById(id)
    }
}, [id])

async function findById (id: string) 
{
    buscaId (`/temas/${id}`, setTema, {
        headers: {"Authorization": token}
    })
}

function updateTema (e: ChangeEvent<HTMLInputElement>) 
{
    setTema({
        ...tema, [e.target.name]: e.target.value,
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>) 
{
    e.preventDefault()
    if(id !== undefined)
    {
        put(`/temas`, tema, setTema, {
            headers: {"Authorization": token}
        })
        toast.success("Tema atualizado com sucesso!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    }
    else
    {
        post(`/temas`, tema, setTema, {
            headers: {"Authorization": token}
        })
        toast.success("Tema cadastrado com sucesso!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    }
    back()
}

function back()
{
    navigate("/temas")
}

    return(
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondasry" component="h1" align="center">Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updateTema(e)} id="descricao" label="Descrição" variant="outlined" 
                name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;