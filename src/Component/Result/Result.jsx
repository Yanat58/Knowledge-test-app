import React from 'react';
import { questionsHTMLCSS } from '../../questions';
import css from './Result.module.css';

const Result = ({ answerTrue }) => {
  const procentResult = Math.round(
    (answerTrue / questionsHTMLCSS.length) * 100
  );
  return (
    <div className={css.result}>
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" /> */}
      <h2>
        Ви відповіли вірно {answerTrue} з {questionsHTMLCSS.length} - це{' '}
        {procentResult}%{' '}
      </h2>
      <a href="/">
        <button>Спробувати ще раз</button>
      </a>
      <a href="/">
        <button>Перейти до JavaScript</button>
      </a>
    </div>
  );
};

export default Result;
