import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';
import { Link } from 'react-router-dom';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;
    setValor(chave, valor);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, valores]);

    setValores(valoresIniciais);
  }

  return (
    <div className="main">
      <h1>Cadastro de categoria: {valores.nome}</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">
            Nome da Categoria:
            <input
              name="nome"
              onChange={handleChange}
              value={valores.nome}
              type="text"
            />
          </label>
        </div>

        <div>
          <label htmlFor="descricao">
            Descrição:
            <textarea
              name="descricao"
              value={valores.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="cor">
            Cor:
            <input
              name="cor"
              onChange={handleChange}
              value={valores.cor}
              type="color"
            />
          </label>
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria) => {
          return <li key={uuid()}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </div>
  );
}
