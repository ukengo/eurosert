import './Expert.scss'
import Section from '@/layouts/Section'
import StepCard from '@/components/StepCard'

export default (props) => {

  const {
    listStepsExpert,
    classNameMod,
    classNameGrid,
    title,
    description,
  } = props

  return (
    <Section
      className='expert'
      classNameMod={classNameMod}
      classNameGrid={classNameGrid}
      title={title}
      description={description}
    >
      {
        listStepsExpert.map(({ title, description, iconName }, index) => (
          <StepCard
            key={index}
            title={title}
            description={description}
            iconName={iconName}
          />
        ))
      }

    </Section>

  )
}
