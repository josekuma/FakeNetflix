const key= '1d69909edb3ac66c82b14d120e6a1122'

const requests={
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
}

export default requests;