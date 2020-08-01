import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import create from '../../../repositories/videos';

export default function CadastroVideo() {
  const history = useHistory();
  const { handleChange, valores } = useForm({
    titulo: 'Video Padrão',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg&t=2994s',
    categoria: 'Imersão React',
  });

  function handleSubmit(event) {
    event.preventDefault();

    create({
      titulo: valores.titulo,
      url: valores.url,
      categoriaId: 1,
    })
      .then(() => {
        history.push('/');
        toast.success('Video cadastrado com sucesso');
      })
      .catch((e) => {
        toast.error('Desculpe mas não foi possivél cadastrar o vídeo');
        toast.error(e);
      });
  }

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
        >
          Categoria:
        </FormField>
        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </div>
  );
}
