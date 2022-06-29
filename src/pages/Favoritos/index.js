import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify'

function Favoritos(){

    const [listaFavoritos, setListaFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);
   
    
    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeflix");
        setListaFavoritos(JSON.parse(minhaLista) || []);

    },[])

    function excluirFilme(id){
        let filtroFilmes = listaFavoritos.filter((item)=>{
            return(item.id !==id)
        })

        setListaFavoritos(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("FILME REMOVIDO COM SUCESSO");
    }







    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>

            {listaFavoritos.length===0 && <sapan> Você não possui nenhum filme salvo :( </sapan>}

            <ul>
                {listaFavoritos.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/film/${filme.id}`}>Ver detalhes</Link>
                            
                                <button onClick={()=>excluirFilme(filme.id)}>Excluir</button>
                            </div>     
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;