import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v4';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
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

  async function getData() {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://almerindoflix.herokuapp.com//categorias';

    const response = (await Axios(URL)).data;
    setCategorias([...response]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <h1>Cadastro de categoria: {valores.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          name="nome"
          type="text"
          value={valores.nome}
          onChange={handleChange}
        >
          Nome da Categoria:
        </FormField>

        <FormField
          name="descricao"
          type="textarea"
          value={valores.descricao}
          onChange={handleChange}
        >
          Descrição:
        </FormField>

        <FormField
          name="cor"
          type="color"
          value={valores.cor}
          onChange={handleChange}
        >
          Cor:
        </FormField>

        <Button>Cadastrar</Button>
      </form>

      {categorias.lenght === 0 && (
        <div>
          {/* Carregando... */}
          Loading..
        </div>
      )}

      <ul>
        {categorias.map((categoria) => {
          return <li key={uuid()}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </div>
  );
}
