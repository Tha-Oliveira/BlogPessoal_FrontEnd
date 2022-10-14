import Postagem from "./Postagem";

interface Usuario
{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    postagem?: Postagem[] // linha add para que o usuario possa ter uma postagem
}

export default Usuario;