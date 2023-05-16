import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import yoda from "../assets/yoda.png";
import { useNavigate } from "react-router-dom";
import { IFilm } from "../types/types";
import LoadingSpinner from "./LoadingSpinner";

type MatchParams = {
  id: string;
};

interface Props {
  addCharacters: (characters: string[]) => void;
}

const MovieDetails: React.FC<Props> = ({ addCharacters }) => {
  const { id: episodeId } = useParams<MatchParams>();
  const [movie, setMovies] = useState<IFilm | undefined>();

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/films/${episodeId}/`)
      .then((response) => {
        setMovies(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [episodeId]);

  return (
    <div className="section-details">
      <div className="background-galaxy"></div>

      <img src={yoda} alt="Yoda" className="yoda-img" />
      <div className="wrapper-details">
        {loading && <LoadingSpinner />}
        {!loading && (
          <>
            <div className="container-details">
              <div key={movie?.episode_id}>
                <h1>{movie?.title}</h1>
                <p>{`"${movie?.opening_crawl}"`}</p>
                <p>{`Director: ${movie?.director}`}</p>
                <p>{`Producer: ${movie?.producer}`}</p>
              </div>
              <div>⭐⭐⭐⭐⭐</div>
              <div className="button-wrapper">
                <button
                  className="btn outline"
                  onClick={() => navigate(`/home`)}
                >
                  GO BACK
                </button>
                <button
                  className="btn outline"
                  onClick={() =>
                    navigate(
                      `/movie/${movie?.episode_id}/character/${movie?.characters}`
                    )
                  }
                >
                  CHARACTERS
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
