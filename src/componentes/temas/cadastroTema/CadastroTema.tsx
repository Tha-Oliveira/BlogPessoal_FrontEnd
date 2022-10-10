import { backdropClasses, Button, Container, TextField, Typography } from "@mui/material";
import { findByDisplayValue } from "@testing-library/react";
import React, { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../model/Tema";
import { buscaId, post, put } from "../../../services/Service";
import "./CadastroTema.css"

function CadastroTema()
{
let navigate = useNavigate()
const {id} = useParams <{id: string}>()
const [token, setToken] = useLocalStorage("token")
const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ""
})

useEffect(() => {
    if(token === "")
    {
        alert ("Ops! Parece que você não está logado")
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
        alert ("Tema atualizado com sucesso!")
    }
    else
    {
        post(`/temas`, tema, setTema, {
            headers: {"Authorization": token}
        })
        alert ("Tema cadastrado com sucesso!")
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