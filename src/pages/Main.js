import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api';

import imgSad from '../assets/giftravolta.gif';
import logo from '../assets/rinder.png';
import like from '../assets/like.png';
import deslike from '../assets/deslike.png';



export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users', {
        headers: {
          user: match.params.id,
        }
      });

      setUsers(response.data)
    };

    loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/users/${id}/likes`, null, {
      headers: { user: match.params.id },
    });
    setUsers(users.filter(user => user._id !== id));
  };

  async function handleDeslike(id) {
    await api.post(`/users/${id}/deslikes`, null, {
      headers: { user: match.params.id },
    });
    setUsers(users.filter(user => user._id !== id));
  };

  return (
    <div className="main-container">
      <img src={logo} alt="rinder" />

      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => (handleDeslike(user._id))}>
                  <img src={deslike} alt="deslike" className="imgBtn" />
                </button>
                <button type="button" onClick={() => (handleLike(user._id))}>
                  <img src={like} alt="like" className="imgBtn" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
          <div className="empty">
            <img id="gifTravolta" src={imgSad} alt="so sad" />
            <p id="avisoUe">Ué, cadê ?</p>
            <p id="avisoFimDaLinhaMenor">Pelo jeito você passou por todos aqui, não é mesmo.. <br /> aguarde mais pessoas se cadastrarem</p>
          </div>
        )}

    </div>
  );
};