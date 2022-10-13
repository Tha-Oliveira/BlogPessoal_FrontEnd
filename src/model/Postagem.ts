import Tema from "./Tema";
import UsuarioLogin from "./UsuarioLogin";

interface Postagem
{
    id: number
    titulo: string
    texto: string
    data: string
    tema?: Tema | null 
    usuario?: UsuarioLogin | null // linha add para vincular um usuário
}

export default Postagem;