
import axios from "axios";
//Base da URL: //https://api.themoviedb.org/3

//URL da API: /movie/now_playing?api_key=d87797869ab224f19302433733f157f2&language=pt-BR


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;
