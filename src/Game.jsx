import React from "react";

export const Game = ({ isLoading, step, question, questionsLength, onClickVariant }) => {
    const percentage = Math.round(step / questionsLength * 100);

    return (
      <>
        {isLoading ? (
          <div className="loading">
            <h1>Вопросы загружаются, подожди...</h1>
          </div>
        ) : (
        <>
          <div className="progress">
            <div className="progress__outer">
              <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <span>{`${step}/${questionsLength}`}</span>
          </div>
          <div className="question">
            <h1>{question.title}</h1>
            <ul>
              {question.variants.map((text, index) => (
                <li key={text} onClick={() => onClickVariant(index)}>{text}</li>
              ))}
            </ul> 
          </div>
        </>
      )}
      </>
    );
  }