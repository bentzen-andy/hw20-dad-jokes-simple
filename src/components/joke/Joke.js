import React, { useEffect, useState } from "react";
import { TailSpin } from "../loading-spinners/TailSpin";
import css from "./Joke.module.css";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const handleClick = () => {
    fetchJoke();
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    setJoke(null);
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  };

  const requestedJoke = joke !== null ? joke : <TailSpin />;

  return (
    <div className={css["joke"]}>
      <button onClick={handleClick}>Generate New Joke</button>
      <div className={css["joke-content"]}>{requestedJoke}</div>
    </div>
  );
};

export default Joke;
