const TMDB_API_KEY = "d894f72898642f230903b2c3a81334bc";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-Us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-Us`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878`,
  fetchMysteryMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648`,
  fetchMusicMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10402`,
  fetchAnimationMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
};

export default requests;
