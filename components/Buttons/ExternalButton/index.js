const ExternalButton = ({ externalLink, text }) => {
  return (
    <span className="ebutton--container">
      <button aria-label="Primary" className="button primary">
        <a href={externalLink}>
          <p>{text}</p>
        </a>
      </button>
    </span>
  )
}

export default ExternalButton;
