const Video = ({ url, id }) => (
  <iframe
    src={url}
    title={`Bilog version ${id} video`}
    frameBorder="0"
    width="100%"
    height="100%"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

export default Video;
