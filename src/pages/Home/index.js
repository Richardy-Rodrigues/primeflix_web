import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key:'cd3a8735892ea40d0de9549ba27698cb',
                    language: 'pt-BR',
                    page: 1,
                }
            })
            console.log(response.data.results)
        }

        loadFilmes()
    }, []);

    return (
        <div>
            <h1>Pag Home</h1>
        </div>
    )
}

export default Home;