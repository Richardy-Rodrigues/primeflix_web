import axios from "axios";

// https://api.themoviedb.org/3/movie/11?api_key=cd3a8735892ea40d0de9549ba27698cb&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;