import SpecialitiesCard from '@/components/SpecialitiesCard'
import Section from '@/layouts/Section'
import './Specialities.scss'
import { SPECIALITIES_CARDS, SPECIALITIES_TITLE } from '@/constants/others'

export default () => {
  //specialities

  return (
    <Section title={SPECIALITIES_TITLE} className="specialities">
      <p className="specialities__text">
        Ми надаємо повну європейську сертифікацію або спеціальну допомогу на
        будь-якому етапі виконання обов'язків з сертифікації продукції, сприяючи
        правильному розумінню її правових вимог та застосовних директив.
      </p>
      <div className="specialities__cards">
        {SPECIALITIES_CARDS.map(({ iconName, text, href }, index) => (
          <SpecialitiesCard
            iconName={iconName}
            text={text}
            key={index}
            href={href}
          />
        ))}
      </div>
    </Section>
  )
}
