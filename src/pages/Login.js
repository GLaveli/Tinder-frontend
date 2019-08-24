import React, { useState } from 'react';
import './Login.css'

import api from '../services/api'
import logo from '../assets/rinder.png';


export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(username);

    const response = await api.post('/users', {
      username,
    }
    );

    const { _id } = response.data;


    history.push(`/user/${_id}`);

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