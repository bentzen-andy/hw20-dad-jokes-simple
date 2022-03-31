import React from "react";
import Header from "../header/Header";
import Joke from "../joke/Joke";
import Footer from "../footer/Footer";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css["app"]}>
      <Header />
      <main>
        <h1>Dad Jokes:</h1>
        <Joke />
      </main>
      <Footer />
    </div>
  );
};

export default App;
