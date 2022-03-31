import React from "react";
import Header from "../header/Header";
import Joke from "../joke/Joke";
import Footer from "../footer/Footer";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css["app"]}>
      <Header />
      <h1>Dad jokes:</h1>
      <Joke />
      <Footer />
    </div>
  );
};

export default App;
