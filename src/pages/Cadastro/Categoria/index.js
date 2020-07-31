import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/axios';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { valores, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, valores]);

    clearForm(valoresIniciais);
  }

  async function getData() {
    const response = (await axios('/categorias')).data;
    setCategorias([...response]);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <h1>Cadastro de categoria: {valores.titulo}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          name="nome"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        >
          Título da Categoria:
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
          return <li key={categoria.id}>{categoria.titulo}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </div>
  );
}
