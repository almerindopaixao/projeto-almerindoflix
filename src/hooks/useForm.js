import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;
    setValor(chave, valor);
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    clearForm,
    handleChange,
  };
}
