import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import Usuario from "../../model/Usuario";
import { buscaId } from "../../services/Service";
import { TokenState } from "../../store/tokens/TokensReducer";
import "./Perfil.css"

function Perfil ()
{
const userId = useSelector <TokenState, TokenState["id"]> (
        (state) => state.id
    )

const token = useSelector <TokenState, TokenState["tokens"]> (
        (state) => state.tokens
    )

const [usuario, setUsuario] = useState <Usuario> ({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    senha: ""
})

async function getUserById(id: number) 
{
    await buscaId(`/usuarios/${id}`, setUsuario, {
        headers: {"Authorization" : token}
    })
}

useEffect(() => {
    getUserById(+userId)
}, [])

    return(
        <>
            <Container>
                <div className='perfilContainer'>
                    <Grid xs={3} alignItems='center' justifyContent='center' className='perfil'>
                        <img src={usuario.foto} alt="" className='imgPerfil' />
                        <Typography variant='h5' align='center' >{usuario.nome}</Typography>
                    </Grid>
                <Grid xs={9} justifyContent='center' className='perfil'>
                    <Typography variant='h4' align='center'>Postagens de {usuario.nome}</Typography>
                        Você tem um total de {usuario.postagem?.length} postagens feitas

                    <div className="postUser">
                        {usuario.postagem?.map((post) => (
                        <div className="postPerfil">
                            <h3>{post.titulo}</h3>
                            <p>{post.texto}</p>
                            <strong>{post.tema?.descricao}</strong>
                        </div>
                ))}
                    </div>
                </Grid>
                </div>
            </Container>
        </>
    )
}

export default Perfil;