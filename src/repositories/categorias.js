import axios from '../services/axios';
import { URL_CATEGORIES } from '../config/urls';

export default async function getAllWithVideos() {
  try {
    const respostaDoServior = await axios(`${URL_CATEGORIES}?_embed=videos`);
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}

export async function deleteOne(categorias) {
  const config = {
    data: categorias,
  };
  try {
    const respostaDoServior = await axios.delete(URL_CATEGORIES, config);
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.statysText;
      return resposta;
    }

    throw new Error('Não foi deletar os dados :(');
  } catch (e) {
    return e;
  }
}

export async function getAll() {
  try {
    const respostaDoServior = await axios(URL_CATEGORIES);
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}

export async function postAll(objetoCategorias) {
  try {
    const respostaDoServior = await axios.post(
      URL_CATEGORIES,
      objetoCategorias
    );
    if (respostaDoServior.statusText === 'OK') {
      const resposta = respostaDoServior.data;
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  } catch (e) {
    return e;
  }
}
