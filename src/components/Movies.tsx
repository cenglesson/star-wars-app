import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../types/types";
import LoadingSpinner from "./LoadingSpinner";
import r2 from "../assets/rtwo.png";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<IFilm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/films/")
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="movie-container">
      {error && <p className="error-message">{error}</p>}
      {loading && <LoadingSpinner />}
      {!loading &&
        movies.map((movie) => (
          <>
            <img src={r2} alt="rtwo" className="rtwo-img" />
            <div
              key={movie.episode_id}
              onClick={() => navigate(`/movie/${movie.episode_id}`)}
            >
              <div className="card">
                <p className="title-movie">{movie.title}</p>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Movies;
