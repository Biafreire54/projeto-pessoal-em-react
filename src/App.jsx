import React, { useState } from 'react';
import Title from './components/Title';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'bia@gmail.com' && senha === 'bia0503') {
      alert('Você está logado');
    } else {
      alert('Credenciais incorreto.');
    }
  };

  return (
    <div className="App">
      {loggedIn ? (
        <h2>Bem-vindo! Você está logado.</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <Title/>
            <img src="logo.png"/>
            <br />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={handleSenhaChange}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
}

export default App;

