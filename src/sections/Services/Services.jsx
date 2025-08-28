import ServiceCard from "@/components/ServiceCard"
import './Services.scss'

export default () => {

  const servicesCards = [
    {
      iconName: 'certificate-solid',
      title: 'European Certification / CE Marking',
      description: 'CE маркування та відповідність європейським директивам для вступу на ринок ЄС',

    },
    {
      iconName: 'globe-americas',
      title: 'Worldwide Conformity & Certification',
      description: 'Сертифікація для США, Канади, Австралії, Китаю та інших країн',

    },
    {
      iconName: 'shield',
      title: 'Private Certifications',
      description: 'UL, ETL, MET, CSA, SGS, TÜV та інші престижні сертифікації',

    },
    {
      iconName: 'contract',
      title: 'Certification Services',
      description: '[Підготовка технічних файлів та декларацій відповідності',
    },
  ]

  return (
    <section className="services" aria-labelledby="services-title">
      <div className="services__inner container">
        <div className="services__header">
          <h2 className="services__title">
            Наші послуги
          </h2>
          <p className="services__subtitle">
            Повний спектр послуг з сертифікації продукції та управління якістю
          </p>
          <div className="services__cards">
            {servicesCards.map(({ iconName, title, description }, item) => (
              <ServiceCard
                iconName={iconName}
                title={title}
                description={description}
                key={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}