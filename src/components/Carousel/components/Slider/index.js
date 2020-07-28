import React from 'react';
import SlickSlider from 'react-slick';
import PropType from 'prop-types';

import { Container } from './styled';

export default function Slider({ children }) {
  return (
    <Container>
      <SlickSlider
        {...{
          dots: false,
          infinite: false,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
        }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
}

Slider.propTypes = {
  children: PropType.node.isRequired,
};
