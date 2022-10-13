import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../model/Postagem";
import Tema from "../../../model/Tema";
import UsuarioLogin from "../../../model/UsuarioLogin";
import { busca, buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/TokensReducer";
import "./CadastroPost.css"

function CadastroPost() // seria o produto
{
let navigate = useNavigate()
const {id} = useParams<{id: string}>()
const [temas, setTemas] = useState<Tema[]>([])
const token = useSelector<TokenState, TokenState ["tokens"] >(
    (state) => state.tokens
)

useEffect(() => {
    if(token === "")
    {
        toast.error("Ops! Parece que você não está logado", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        navigate ("/login")
    }
}, [token])

const [tema, setTema] = useState<Tema> ({
    id: 0,
    descricao: ""
})

const [postagem, setPostagem] = useState<Postagem> ({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
    usuario: null // linha add para inserir o usuário dono na postagem
})

const userId = useSelector <TokenState, TokenState ["id"]> (
    (state) => state.id
)

const [usuario, setUsuario] = useState<UsuarioLogin> ({ // State que vai controlar o usuário que será inserido na postagem
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: ""
})

useEffect(() => {
    setPostagem ({
        ...postagem,
        tema: tema
    }) 
}, [tema])

useEffect(() => {
    getTemas()
    if(id !== undefined)
    {
        findByIdPostagem(id)
    }
}, [id])

async function getTemas() 
{
    await busca ("temas", setTemas, {
        headers: {"Authorization": token}
    })
}

async function findByIdPostagem(id: string) 
{
    await buscaId (`postagens/${id}`, setPostagem, {
        headers: {"Authorization": token}
    })
}

function updatePostagem (e: ChangeEvent<HTMLInputElement>) 
{
    setPostagem ({
        ...postagem, [e.target.name]: e.target.value,
        tema: tema
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>) 
{
    e.preventDefault ()
    if(id !== undefined)
    {
        put(`postagens`, postagem, setPostagem, {
            headers: {"Authorization": token}
        })
        toast.success("Postagem atualizada com sucesso!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    }
    else
    {
        post(`postagens`, postagem, setPostagem, {
            headers: {"Authorization": token}
        })
        toast.success("Postagem cadastrada com sucesso!", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
    }
    back()
}

function back()
{
    navigate ("/posts")
}

    return(
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatePostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" 
                margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatePostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" 
                margin="normal" fullWidth />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                        headers: {"Authorization": token}
                        })}>
                            {
                                temas.map(tema => (
                                    <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                                ))
                            }
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