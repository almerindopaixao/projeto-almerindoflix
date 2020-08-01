import styled from 'styled-components';

const Table = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr 1fr 1fr;
  border: 1px solid var(--primary);
  width: 100%;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Titulo = styled.div`
  padding: 10px 10px 10px 10px;
  font-size: 20px;
  border-bottom: 1px solid var(--primary);

  &:not(.ultimo) {
    border-right: 1px solid var(--primary);
  }
`;

const Conteudo = styled.div`
  padding: 10px 0 10px 10px;
  color: var(--blackLighter);
`;

export { Table, Titulo, Conteudo };
