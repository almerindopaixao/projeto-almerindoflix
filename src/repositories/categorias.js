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
