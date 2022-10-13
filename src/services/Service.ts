import axios from "axios";

export const api = axios.create({
    baseURL:"https://blogpessoal-6n2i.onrender.com/"})

export const login = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados) 
    setDados(resposta.data)
}

export const cadUsuario = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados) 
    setDados(resposta.data)
}

export const busca = async (url: any, setDados: any, header: any) => { // função para o getALL
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const buscaId = async (url: any, setDados: any, header: any) => { // função para getById
    const resposta = await api.get(url,header)
    setDados(resposta.data)
}

export const post = async (url: any, dados: any, setDados: any, header: any) => { // função para post
    const resposta = await api.post(url,dados, header) 
    setDados(resposta.data)
}

export const put = async (url: any, dados: any, setDados: any, header: any) => { // função para o put (atualizar)
    const resposta = await api.put(url,dados, header) 
    setDados(resposta.data)
}

export const deleteId = async (url: any, header: any) => { // função para deletar 
    await api.delete(url, header)
}