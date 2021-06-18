const Title = ({ title, subtitle, alignCenter }) => {
  return (
    <div className={alignCenter && 'text-align-center'}>
      <h2 className="feature--title">{title}</h2>
      <p className="feature--subtitle">{subtitle}</p>
    </div>
  )
}

export default Title;
