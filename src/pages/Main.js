import React from 'react';
import './Main.css';

import logo from '../assets/rinder.png';
import like from '../assets/like.png';
import deslike from '../assets/deslike.png';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="rinder" />
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/29147021?v=4" alt="avatar" />
          <footer>
            <strong>Guilherme Laveli</strong>
            <p>Estudante e Entusiasta de codigos!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>

        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/29147021?v=4" alt="avatar" />
          <footer>
            <strong>Guilherme Laveli</strong>
            <p>Estudante e Entusiasta de codigos!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>

        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/29147021?v=4" alt="avatar" />
          <footer>
            <strong>Guilherme Laveli</strong>
            <p>Estudante e Entusiasta de codigos!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>

        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/29147021?v=4" alt="avatar" />
          <footer>
            <strong>Guilherme Laveli</strong>
            <p>Estudante e Entusiasta de codigos!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>

        </li>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/29147021?v=4" alt="avatar" />
          <footer>
            <strong>Guilherme Laveli</strong>
            <p>Estudante e Entusiasta de codigos!</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={deslike} alt="deslike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>

        </li>
      </ul>
    </div>
  );
};