import React from 'react';
import { Link } from 'react-router-dom';

export default function CadastroCategoria() {
  return (
    <div className="main">
      <h1>Cadastro de categoria</h1>
      <form>
        <label htmlFor="nome">
          Nome da Categoria:
          <input type="text" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">Ir para home</Link>
    </div>
  );
}
