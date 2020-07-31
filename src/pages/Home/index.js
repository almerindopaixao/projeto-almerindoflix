import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
// import BannerMain from '../../components/BannerMain';
// import Carousel from '../../components/Carousel';
import getAllWithVideos from '../../repositories/categorias';
import './Home.css';

export default function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    getAllWithVideos()
      .then((categoriasComVideos) => setDadosIniciais(categoriasComVideos))
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      {JSON.stringify(dadosIniciais)}
      {/*
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />
      */}
    </div>
  );
}
