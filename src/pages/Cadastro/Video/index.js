import React from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

export default function CadastroVideo() {
  const { handleChange, valores } = useForm({});
  return (
    <div className="main">
      <h1>Cadastro de Vídeo</h1>

      <FormField
        name="tìtulo do Vídeo"
        type="text"
        value={valores.titulo}
        onChange={handleChange}
      >
        Título da Categoria:
      </FormField>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </div>
  );
}
