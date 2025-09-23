import Section from '@/layouts/Section'
import './AboutISO.scss'
import { ABOUT_ISO, ABOUT_ISO_TITLE } from '@/constants/others'

export default () => {
  
  return (
    <Section
      className="about-iso"
      title={ABOUT_ISO_TITLE}
    >
      {ABOUT_ISO.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Section>
  )
}
