import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://api.spotify.com/v1/',
    headers : { 
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('spotifyToken')

        config.headers = {
            ...config.headers,

            Authorization : `Bearer ${token}`,
            
        }

        return config
    }
)

export {
    instance
}