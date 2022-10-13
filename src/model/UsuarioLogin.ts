import Postagem from "./Postagem";

interface UsuarioLogin
{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: "",
    postagem?: Postagem[] // linha add para que o usuário possa ter um 
}

export default UsuarioLogin;