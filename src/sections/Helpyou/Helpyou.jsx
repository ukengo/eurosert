
import Contactform from '@/components/Contactform'
import './Helpyou.scss'

export default () => {

  const helpyous = [
    'Comprehensive support in obtaining European certification and CE Marking for your products',
    'Full compliance assessment for manufacturers, importers, and exporters regarding product legislation',
    'Expert guidance on all matters related to CE Marking',
    'Product analysis and classification in line with applicable standards and regulatory frameworks for each market',
    'Identification of the specific directives, regulations, and requirements relevant to a product within a given region',
    'Customs tariff evaluation for products and raw materials',
    'Coordination and execution of product conformity testing according to EN, ISO, IEC, and other international standards',
    'End-to-end assistance for achieving smooth market access in Europe',
    'Verification of accuracy and authenticity of existing product certifications',
    'Determination of the legal responsibilities of manufacturers, importers, and distributors',
    'Provision of Authorized Representative services in the EU',
    'Drafting and validation of technical documentation and Declarations of Conformity',
    'Carrying out comprehensive risk assessments',
    'Review of packaging and labeling to ensure compliance with applicable standards',
  ]

  return (
    <section className="helpyou" aria-labelledby="services-title">
      <div className="helpyou__inner container">
        <div className="helpyou__content">
          <div className="helpyou__text">
            <h5 className="helpyou__title">How can we help you?</h5>
            <ul className="helpyou__items">
              {helpyous.map((helpyou, index) => (
                <li className="helpyou__item" key={index}>
                  {helpyou}
                </li>
              ))}
            </ul>
          </div>
          <div className="helpyou__contactform">
            <Contactform />
          </div>
        </div>
      </div>
    </section>
  )
}