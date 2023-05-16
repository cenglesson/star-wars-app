import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import Characters from "./components/Character";

export const App = () => {
  const [savedCharacters, setSavedCharacters] = useState<string[]>([]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <>
              <MovieDetails
                addCharacters={(newCharacters) =>
                  setSavedCharacters([...savedCharacters, ...newCharacters])
                }
              />
            </>
          }
        />
        <Route
          path="/movie/:id/character:id"
          element={
            <>
              <Characters savedCharacters={[]} />
            </>
          }
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
};
