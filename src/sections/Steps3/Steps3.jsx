import './Steps3.scss'
import SectionSteps from '@/layouts/SectionSteps'

export default (props) => {
  const { classNameMod, title, description, list, image } = props

  return (
    <SectionSteps
      className="steps"
      classNameMod={classNameMod}
      title={title}
      description={description}
      image={image}
    >
      <ul>
        {list.map((item, index) => (
          <li className="steps__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </SectionSteps>
  )
}
