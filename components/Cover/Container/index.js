import Title from '../Title';

const Container = ({ text, paragraph, position, withVideo }) => {
  return (
    <div className={`cover--container ${withVideo && 'no-padding__bottom'} ${position}`}>
      <Title text={text} />
      <p className="cover--container-paragraph">
        {paragraph}
      </p>
    </div>
  )
}

export default Container;
