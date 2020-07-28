import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import { SliderItem } from './components/Slider/styled';
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';

export default function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    cor: PropTypes.string.isRequired,
    link_extra: PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    videos: PropTypes.arrayOf(),
  }).isRequired,
};
