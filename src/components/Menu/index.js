import React from 'react';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './utils/ButtonLink';

export default function Menu() {
  return (
    <nav className="Menu">
      <Button as="a" href="/">
        <img className="Logo" src={Logo} alt="AlmerindoFlix Logo" />
      </Button>
      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}
