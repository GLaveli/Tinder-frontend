import React, { useState } from 'react';
import './Login.css'

import logo from '../assets/rinder.png';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username);

    history.push(username);

  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="rinder" />
        <input
          placeholder="Digite seu usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}