import NImage from 'next/image';

const Image = ({ src, alt }) => {
  return (
    <div className="image-container">
      <NImage
        src={src}
        alt={alt}
        width={335}
        height={400}
      />
    </div>
  )
}

export default Image;
