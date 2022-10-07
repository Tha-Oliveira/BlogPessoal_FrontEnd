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

export const busca = async (url: any, setDados: any, header: any) => { // função para o getALL
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}