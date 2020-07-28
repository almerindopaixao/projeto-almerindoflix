import React from 'react';

import { Link } from 'react-router-dom';

export default function CadastroVideo() {
  return (
    <div className="main">
      <h1>Cadastro de vídeo</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </div>
  );
}
