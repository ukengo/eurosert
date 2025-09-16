import './CeMarkBlock.scss'

export default (props) => {

  const {
    title,
    description,
  } = props

  return (
    <div className="about-ce-mark__block block-about-ce-mark">
      <h3 className="block-about-ce-mark__title">{title}</h3>
      <div className='block-about-ce-mark__description'>
        <p>{description}</p>
      </div>
    </div>
  )
}