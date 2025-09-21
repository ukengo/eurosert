import Section from '@/layouts/Section'
import './AboutISO.scss'

export default () => {
  const aboutISO = [
    'ISO Standards are designed to structure and organize a company’s management across all areas. Global competition, together with the ongoing globalization of the economy, has driven these standards-although voluntary by nature-to become widely recognized and internationally accepted. ISO certifications, among others, consist of detailed guidelines and standards tied to specific management tools and systems that can be applied across all types of organizations and activities.',

    'When an organization holds a certificate issued by an internationally recognized regulatory authority, it demonstrates that an independent and reputable body has reviewed and confirmed the organization’s compliance with the established regulatory requirements. This certification also entitles the organization to display the official mark that guarantees this status. Such bodies perform regular audits to ensure continued adherence to the standards.',

    'Earning certifications enhances customer perception in multiple areas and is strongly associated with professionalism, quality, and efficiency. A wide range of certifications and regulations exist, covering everything from quality management and information handling to restrictions on chemical substances in products, waste management, and the safe handling of hazardous materials.',
  ]

  return (
    <Section
      className="about-iso"
      title="What are ISO Standards and why are they important?"
    >
      {aboutISO.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Section>
  )
}
