import Section from '@/layouts/Section'
import './AboutSertEur.scss'
import { ABOUT_SSERT_EUR } from '@/constants/others'

export default () => {
  //aboutSertEur

  return (
    <Section
      className="about-sert-eur"
      title="Що таке європейська сертифікація або європейська відповідність?"
    >
      {ABOUT_SSERT_EUR.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Section>
  )
}
