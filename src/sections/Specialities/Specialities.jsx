import SpecialitiesCard from '@/components/SpecialitiesCard'
import Section from '@/layouts/Section'
import './Specialities.scss'

export default () => {
  //specialities
  const specialities = [
    {
      iconName: 'md',
      text: 'Machinery and Installations (MD)',
      href: null,
    },
    {
      iconName: 'emc',
      text: 'Electronic Equipment (EMC)',
      href: null,
    },
    {
      iconName: 'medical',
      text: 'Medical Devices (MDD)',
      href: null,
    },
    {
      iconName: 'atex',
      text: 'ATEX',
      href: null,
    },
    {
      iconName: 'pressure',
      text: 'Pressure Equipment (PED)',
      href: null,
    },
    {
      iconName: 'toys',
      text: 'Toys',
      href: null,
    },
    {
      iconName: 'protect',
      text: 'Personal Protective Equipment (PPE)',
      href: null,
    },
    {
      iconName: 'radio',
      text: 'Radio Equipment (RED)',
      href: null,
    },
    {
      iconName: 'electrical',
      text: 'Electrical Equipment (LVD)',
      href: null,
    },
    {
      iconName: 'construction',
      text: 'Construction Products (CPR)',
      href: null,
    },
    {
      iconName: 'rohs',
      text: 'Restriction of Hazardous Substances (RoHS)',
      href: null,
    },
    {
      iconName: 'safety',
      text: 'Other (GPSD)',
      href: null,
    },
  ]

  return (
    <Section title="Our Specialities" className="specialities">
      <p className="specialities__text">
        Ми надаємо повну європейську сертифікацію або спеціальну допомогу на
        будь-якому етапі виконання обов'язків з сертифікації продукції, сприяючи
        правильному розумінню її правових вимог та застосовних директив.
      </p>
      <div className="specialities__cards">
        {specialities.map(({ iconName, text, href }, index) => (
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
