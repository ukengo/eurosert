import Section from '@/layouts/Section'
import './AboutCEMark.scss'
import CeMarkBlock from '@/components/CeMarkBlock'


export default () => {

  const aboutCeMark = [
    {
      mark__title: 'Manufacturers',
      mark__descroption: 'Manufacturers play a vital role in ensuring that products placed on the extended single market of the EEA are safe. It is their responsibility to carry out the conformity assessment, set up the technical file, issue the EU declaration of conformity and affix the CE marking to a product.',
    },
    {
      mark__title: 'Importers and distributors',
      mark__descroption: 'Importers and distributors help ensure that only products compliant with EU rules, bearing CE marking are placed on the EEA market. As intermediaries between manufacturers and traders they must have knowledge of the legal requirements and ensure that products they distribute or import meet them.',
    },
    {
      mark__title: 'EU Consumers',
      mark__descroption: 'EU consumers may have different preferences when it comes to the colour or brand of products such as a new laptop or a toy for their children. At the same time, they expect all products on the market to be safe.',
    },

  ]

  const aboutCeMarkList = [
    'businesses know that products bearing the CE marking can be traded in the EEA without restrictions',
    'consumers enjoy the same level of health, safety, and environmental protection throughout the entire EEA',
  ]

  return (
    <Section
      className='about-ce-mark'
    /* title='CE marking' */
    >

      <h1 className="about-ce-mark__title">CE marking</h1>
      <div className="about-ce-mark__descroption">
        The letters ‘CE’ appear on many products traded on the extended Single Market in the European Economic Area (EEA). They signify that products sold in the EEA have been assessed to meet high safety, health, and environmental protection requirements.
      </div>
      <div className="about-ce-mark__blocks">
        {aboutCeMark.map(({ mark__title, mark__descroption }, index) => (
          <CeMarkBlock key={index} title={mark__title} description={mark__descroption} />
        ))}
      </div>
      <div className="about-ce-mark__content">
        <p>
          When you buy a new phone, a teddy bear, or a TV within the EEA, you can find the CE mark on them. CE marking also supports fair competition by holding all companies accountable to the same rules.
        </p>
        <p>By affixing the CE marking to a product, a manufacturer declares that the product meets all the legal requirements for CE marking and can be sold throughout the EEA. This also applies to products made in other countries that are sold in the EEA.
        </p>
        <p>There are two main benefits CE marking brings to businesses and consumers within the EEA
        </p>
      </div>
      <ul className="about-ce-mark__list">
        {aboutCeMarkList.map((item, index) => (
          <li className="about-ce-mark__item" key={index}>{item}</li>
        ))}
      </ul>
      <div className="about-ce-mark__content">
        <p>
          CE marking is a part of the EU’s harmonisation legislation, which is mainly managed by Directorate-General for Internal market, Industry, Entrepreneurship and SMEs. The CE marking for Restriction of Hazardous Substances is managed by Directorate-General for Environment.
        </p>
      </div>
      <h3 className="about-ce-mark__note-title">IMPORTANT NOTE:
      </h3>
      <p className="about-ce-mark__note-text">Not all products must have CE marking. It is compulsory only for most of the products covered by the New Approach Directives. It is forbidden to affix CE marking to other products.</p>
      <p className="about-ce-mark__note-text">Please note that a CE marking does not indicate that a product have been approved as safe by the EU or by another authority. It does not indicate the origin of a product either.</p>
    </Section >
  )
}
