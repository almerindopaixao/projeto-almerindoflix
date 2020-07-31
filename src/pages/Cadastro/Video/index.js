import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

export default function CadastroVideo() {
  const { handleChange, valores } = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    toast.success('video cadastrado com sucesso');
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
        <Button>Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </div>
  );
}
