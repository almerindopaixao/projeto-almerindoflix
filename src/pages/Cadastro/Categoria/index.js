import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../services/axios';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Tabela from '../../../components/Tabela';
import { Conteudo } from '../../../components/Tabela/styled';
import './categoria.css';

export default function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { valores, handleChange, handleClick, clearForm } = useForm(
    valoresIniciais
  );

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
      <h1 className="titulo">Cadastro de categoria: {valores.titulo}</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <FormField
          name="titulo"
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

        <div className="botoes">
          <Button background="#DB202C">Enviar</Button>
          <Button
            background="#9E9E9E"
            onClick={handleClick}
            type="reset"
            color="black"
          >
            Limpar
          </Button>
        </div>
      </form>

      {categorias.lenght === 0 && (
        <div>
          {/* Carregando... */}
          Loading..
        </div>
      )}

      <Tabela>
        {categorias.map((categoria) => {
          return (
            <>
              <Conteudo>{categoria.titulo}</Conteudo>
              <Conteudo>{categoria.descricao}</Conteudo>
              <Conteudo>
                <p>Editar</p>
              </Conteudo>
              <Conteudo>
                <p>Remover</p>
              </Conteudo>
            </>
          );
        })}
      </Tabela>
      <div className="ir-home">
        <Link to="/">Ir para home</Link>
      </div>
    </div>
  );
}
