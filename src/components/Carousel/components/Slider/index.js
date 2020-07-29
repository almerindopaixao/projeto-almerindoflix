import React from 'react';
import SlickSlider from 'react-slick';
import PropType from 'prop-types';

import { Container } from './styles';

export default function Slider({ children, categoryColor }) {
  return (
    <Container categoryColor={categoryColor}>
      <SlickSlider
        {...{
          dots: false,
          infinite: true,
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
  categoryColor: PropType.string.isRequired,
};
