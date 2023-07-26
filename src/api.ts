import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers:{

        "Acesso-Control-Allow-Origin":"*",
        "Content-Type": "application/json",
        
    }
})

export default api;

