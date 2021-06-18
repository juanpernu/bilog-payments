import React from 'react';
import Container from './Container';
import PropTypes from 'prop-types';

const Cover = ({ gradientBg, position, text, paragraph, coverVideo }) => {

  const video = coverVideo ? 'video' : " ";

  return (
    <section className={`cover ${gradientBg}`}>
      <div className={`cover-wrapper ${video}`}>
        <Container
          text={text}
          paragraph={paragraph}
          position={position}
          withVideo={!!coverVideo}
        />
        {coverVideo &&
          <div className="container-video">
            <iframe
              className="video"
              width="90%"
              src={coverVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        }
      </div>
    </section>
  )
}

Cover.propTypes = {
  gradientBg: PropTypes.string,
}

Cover.defaultProps = {
  gradientBg: "default",
}

export default Cover;