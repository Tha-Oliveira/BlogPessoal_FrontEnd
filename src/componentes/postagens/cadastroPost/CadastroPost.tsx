import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../model/Postagem";
import Tema from "../../../model/Tema";
import Usuario from "../../../model/Usuario";
import { busca, buscaId, post, put } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/TokensReducer";
import "./CadastroPost.css"

function CadastroPost()
{
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([]);

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

const [tema, setTema] = useState<Tema> ({
    id: 0,
    descricao: ""
})

const userId = useSelector<TokenState, TokenState["id"]>( //Buscar o ID dentro do REDUX
    (state) => state.id
)

const [postagem, setPostagem] = useState<Postagem> ({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
    usuario: null // linha add para inserir o usuário dono na postagem
})

const [usuario, setUsuario] = useState<Usuario> ({ // State que vai controlar o usuário que será inserido na postagem
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: ""
})

useEffect(() => {
    if (token === "") 
    {
        toast.error("Ops! Parece que você não está logado", {
            position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        navigate ("/login")
    }
}, [token]);


useEffect(() => {
    setPostagem ({
        ...postagem,
        tema: tema,
        usuario: usuario // add o usuario dentro da postagem que está sendo enviada para o backend
    }) 
}, [tema])

async function findByIdPostagem(id: string) 
{
    await buscaId (`postagens/${id}`, setPostagem, {
        headers: {"Authorization": token}
    })
}

useEffect(() => {
    getTemas()
    if(id !== undefined)
    {
        findByIdPostagem(id)
    }
}, [id])

async function getTemas() 
{
    await busca ("/temas", setTemas, {
        headers: {"Authorization": token}
    })
}

function updatePostagem (e: ChangeEvent<HTMLInputElement>) 
{
    setPostagem ({
        ...postagem, [e.target.name]: e.target.value,
        tema: tema,
    })
}

async function onSubmit(e: ChangeEvent<HTMLFormElement>) 
{
    e.preventDefault ()
    if(id !== undefined)
    {
        try
        {
            await put(`/postagens`, postagem, setPostagem, {
                headers: {"Authorization": token}
            })
            toast.success("Postagem atualizada com sucesso!", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        }
        catch (error)
        {
            toast.error("Erro ao atualizar, por favor verifique os campos!", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        }
    }
    else
    {
        try
        {
            await post(`/postagens`, postagem, setPostagem, {
                headers: {"Authorization": token}
            })
            toast.success("Postagem cadastrada com sucesso!", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        }
        catch (error)
        {
            toast.error("Erro ao cadastrar, por favor verifique os campos!", {
                position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        }
    }
    navigate("/posts")
}

    return(
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro postagem</Typography>
                <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatePostagem(e)} id="titulo" label="Título" variant="outlined" name="titulo" 
                margin="normal" fullWidth />
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatePostagem(e)} id="texto" label="Texto" name="texto" variant="outlined" 
                margin="normal" fullWidth />

                <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-helper-label">Tema</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                        headers: {"Authorization": token}
                        })}>
                                {temas.map((item) => (
                                    <MenuItem value={item.id} style={{display: "block"}} > {item.descricao}</MenuItem>
                                ))}
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary" disabled={tema.id === 0}> 
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPost;