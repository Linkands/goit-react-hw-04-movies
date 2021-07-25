import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
export const fetchMovies = async () => {
  const API_KEY = '695d029b17b871325482cda628ec8aff'
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`)
    return response.data.results
  } catch (error) {
    throw new Error(error)
  }
}

// export const fetchMoviesBySearch = async (query) => {
//   const API_KEY = '695d029b17b871325482cda628ec8aff'
//   try {
//     const response = await axios.get(
//       `/trending/movie/day?api_key=${API_KEY}&query=${query}`,
//     )
//     return response.data.results
//   } catch (error) {
//     throw new Error(error)
//   }
// }

async function fetchMoviesBySearch(query) {
  const API_KEY = '695d029b17b871325482cda628ec8aff'
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&query=${query}`,
    )
    return response.data.results
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchMoviesBySearch
