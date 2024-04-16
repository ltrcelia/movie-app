import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Form = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("war");
  const [sortGoodBad, setSortGoodBad] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${searchMovie}&language=fr-FR`
      )
      .then((res) => setMovieData(res.data.results));
  }, [searchMovie]);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top<span>➜</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop<span>➜</span>
          </div>
        </div>
      </div>
      <div>
        <div className="result">
          {movieData
            .slice(0, 12)
            .sort((a, b) => {
              if (sortGoodBad === "goodToBad") {
                return b.vote_average - a.vote_average;
              } else if (sortGoodBad === "badToGood") {
                return a.vote_average - b.vote_average;
              }
            })
            .map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
