import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log("movie >>> ", movie);
      console.log("movie.name >>> ", movie?.name);
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          console.log("url >>> ", url);
          // https://www.youtube.com/watch?v=ttzj0NwyJfs
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParams >>> ", urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("erorr >>> ", error));
    }
  };

  // console.table(movies);
  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* <YouTube videoId="XtMThy8QKqU" opts={opts} /> */}
      {/* <YouTube videoId="ttzj0NwyJfs" opts={opts} /> */}
    </div>
  );
}

export default Row;
