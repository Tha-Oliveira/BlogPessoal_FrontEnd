import axios from "axios";

export const api = axios.create({
    baseURL:"https://blogpessoal-6n2i.onrender.com/"})

export const login = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados) 
    setDados(resposta.data.token)
}

export const cadUsuario = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados) 
    setDados(resposta.data)
}