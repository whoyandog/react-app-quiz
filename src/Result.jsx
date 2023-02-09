import React from "react";

export const Result = ({ correct, questionsLength }) => {
    return (
      <div className="result">
        <img alt="Congratulations!" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Верных ответов {correct} из {questionsLength}</h2>
        <a href="/">
          <button>Попробовать снова</button>
        </a>
      </div>
    );
  }