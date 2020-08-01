import React from 'react';
import t from 'prop-types';
import { Table, Titulo } from './styled';

export default function Tabela({ children }) {
  return (
    <Table>
      <Titulo>Titulo</Titulo>
      <Titulo>Descrição</Titulo>
      <Titulo>Editar</Titulo>
      <Titulo className="ultimo">Remover</Titulo>
      {children}
    </Table>
  );
}

Tabela.propTypes = {
  children: t.node.isRequired,
};
