import React from 'react';
import Container from './Container';

const Cover = ({ gradientBg = "default", position, text, paragraph, coverVideo }) => {

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

export default Cover;
