import ServiceCard from '@/components/ServiceCard'
import SERVICESKARDS from '@/constants/ServicesCards'
import './Services.scss'
import { SERVICES_SUBTITLE, SERVICES_TITLE } from '@/constants/others'

export default () => {
  return (
    <section
      className="services"
      aria-labelledby="services-title"
      id="services"
    >
      <div className="services__inner container">
        <div className="services__header">
          <h2 className="services__title title-h2">{SERVICES_TITLE}</h2>
          <div className="services__subtitle">
            <p>{SERVICES_SUBTITLE}</p>
          </div>
          <div className="services__cards">
            {SERVICESKARDS.map(({ iconName, title, descriptions }, item) => (
              <ServiceCard
                iconName={iconName}
                title={title}
                descriptions={descriptions}
                key={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
