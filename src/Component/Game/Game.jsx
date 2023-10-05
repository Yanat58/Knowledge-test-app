import React from 'react';
import { questionsHTMLCSS } from '../../questions';
import css from './Game.module.css';

const Game = ({ step, question, onClickVariant }) => {
  const { title, variants } = question;
  const procentage = Math.round((step / questionsHTMLCSS.length) * 100);

  return (
    <>
      <div className={css.progress}>
        <div
          style={{ width: `${procentage}%` }}
          className={css.progress__inner}
        ></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
