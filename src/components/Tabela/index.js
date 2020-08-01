import React from 'react';
import t from 'prop-types';
import uuid from 'uuid/dist/v4';
import { Table, Titulo, Container, Conteudo } from './styled';

export default function Tabela({ categorias }) {
  return (
    <Table>
      <Container>
        <Titulo>Titulo</Titulo>
        <Titulo>Descrição</Titulo>
        <Titulo>Editar</Titulo>
        <Titulo className="ultimo">Remover</Titulo>
      </Container>
      {categorias.map((categoria) => {
        return (
          <Container key={uuid()}>
            <Conteudo>{categoria.titulo}</Conteudo>
            <Conteudo>{categoria.descricao}</Conteudo>
            <Conteudo>
              <Conteudo.Paragrafo>Editar</Conteudo.Paragrafo>
            </Conteudo>
            <Conteudo>
              <Conteudo.Paragrafo>Remover</Conteudo.Paragrafo>
            </Conteudo>
          </Container>
        );
      })}
    </Table>
  );
}

Tabela.propTypes = {
  categorias: t.arrayOf(t.object).isRequired,
};
