import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import yoda from "../assets/yoda.png";
import { useNavigate } from "react-router-dom";
import { IPeople } from "../types/types";

type MatchParams = {
  episodeId: string;
};

interface Props {
  savedCharacters: string[];
}

const Characters: React.FC<Props> = ({ savedCharacters }) => {
  const { episodeId } = useParams<MatchParams>();
  const [characters, setCharacters] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/films/${episodeId}/`)
      .then((response) => {
        const characterUrls = response.data.characters as string[];
        const characterPromises = characterUrls.map((url) => axios.get(url));
        Promise.all(characterPromises).then((responses) => {
          const characterData = responses.map((response) => response.data);
          setCharacters(characterData);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [episodeId]);

  const filteredCharacters = characters.filter((character) =>
    savedCharacters.includes(character.name)
  );

  return (
    <div className="section-details">
      <div className="background-galaxy"></div>

      <img src={yoda} alt="Yoda" className="yoda-img" />
      <div className="wrapper-details">
        {loading && <p>Loading</p>}
        {!loading && (
          <>
            <div className="container-details">
              {filteredCharacters.map((character) => (
                <div key={character.name}>
                  <h1>{character.name}</h1>
                  <p>{`Height: ${character.height}`}</p>
                  <p>{`Mass: ${character.mass}`}</p>
                  <p>{`Birth year: ${character.birth_year}`}</p>
                </div>
              ))}
              <div>⭐⭐⭐⭐⭐</div>
              <div className="button-wrapper">
                <button
                  className="btn outline"
                  onClick={() => navigate(`/home`)}
                >
                  GO BACK
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Characters;
