import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Tabela from '../../../components/Tabela';
import { getAll, postAll } from '../../../repositories/categorias';
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
    let errors = [];
    const chaves = Object.keys(valores);

    errors = chaves.filter((chave) => {
      return !valores[chave];
    });

    if (errors.length > 0) {
      errors.forEach((error) => {
        toast.error(`Campo ${error} precisa ser preenchido`);
      });

      return;
    }

    postAll({
      titulo: valores.titulo,
      descricao: valores.descricao,
      cor: valores.cor,
    })
      .then(() => {
        setCategorias([...categorias, valores]);
        toast.success('Categoria cadastrada com sucesso');
        clearForm(valoresIniciais);
      })
      .catch((erro) => {
        toast.error('Desculpe mas não foi possivél cadastrar a categoria');
        toast.error(erro.message);
      });
  }

  useEffect(() => {
    getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      })
      .catch((e) => toast.error(e.message));
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

      <Tabela categorias={categorias} />

      {categorias.lenght === 0 && (
        <div>
          {/* Carregando... */}
          Loading..
        </div>
      )}
      <div className="ir-home">
        <Link to="/">Ir para home</Link>
      </div>
    </div>
  );
}
