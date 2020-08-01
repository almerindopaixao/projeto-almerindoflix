import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import create from '../../../repositories/videos';
import { getAll } from '../../../repositories/categorias';

export default function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, valores } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg&t=2994s',
    categoria: 'Front End',
  });

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const { id } = categorias.find((categoria) => {
        return categoria.titulo === valores.categoria;
      });

      create({
        titulo: valores.titulo,
        url: valores.url,
        categoriaId: id,
      })
        .then(() => {
          history.push('/');
          toast.success('Video cadastrado com sucesso');
        })
        .catch((e) => {
          toast.error('Desculpe mas não foi possivél cadastrar o vídeo');
          toast.error(e.message);
        });
    } catch (e) {
      toast.error('Categoria não encontrada');
    }
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
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        >
          Título do Vídeo:
        </FormField>

        <FormField
          name="url"
          type="text"
          value={valores.url}
          onChange={handleChange}
        >
          Url:
        </FormField>
        <FormField
          name="categoria"
          type="text"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        >
          Categoria:
        </FormField>
        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </div>
  );
}
