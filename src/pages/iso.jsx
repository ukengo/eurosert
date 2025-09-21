import AboutISO from '@/sections/AboutISO/AboutISO'
import Expert from '@/sections/Expert/Expert'
import Helpyou from '@/sections/Helpyou'
import Howwork from '@/sections/Howwork/Howwork'
import Steps3 from '@/sections/Steps3'

export const metadata = {
  title: 'ISO Standards',
}

export default () => {
  const listSteps3 = [
    'Assess the processes eligible for certification.',
    'Review the requirements of the relevant ISO Standard, then plan and implement its guidelines within existing processes or facilities.',
    'Submit an application to an internationally recognized regulatory body to obtain the certification.',
  ]

  const listStepsExpert = [
    {
      title: 'ISO 9001',
      description: 'Quality management system - Requirements',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO/IEC 27001',
      description:
        'Information security, cybersecurity and privacy protection - Information security management systems - Requirements',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO/IEC 42001',
      description:
        'Information technology - Artificial intelligence - Management system',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO 45001',
      description:
        'Occupational health and safety management systems - Requirements with guidance for use',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO 13485',
      description:
        'Medical devices - Quality management systems - Requirements for regulatory purposes',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO 14001',
      description:
        'Environmental management systems - Requirements with guidance for use',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO 35001',
      description:
        'Biorisk management for laboratories and other related organisations',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO 26000',
      description: 'Guidance on social responsibility',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO 50001',
      description:
        'Energy management systems - Requirements with guidance for use',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO/IEC 17025',
      description:
        'General requirements for the competence of testing and calibration laboratories',
      iconName: 'iso-icon',
    },
    {
      title: 'ISO 22000',
      description:
        'Food safety management systems - Requirements for any organization in the food chain',
      iconName: 'iso-icon',
    },
  ]

  const howWorkCards = [
    {
      title: 'Product Analysis',
      description:
        'Classification of products and identification of required standards for each certification',
    },
    {
      title: 'Documentation Preparation',
      description:
        'Consulting on the identification, acquisition, and interpretation of standards',
    },
    {
      title: 'Testing',
      description:
        'Management and analysis of tests to ensure product compliance',
    },
    {
      title: 'Certification',
      description:
        'Obtaining certification and support throughout the commercialization process',
    },
  ]

  return (
    <main className="content">
      <AboutISO />

      <Steps3
        classNameMod="steps--lining"
        title="Get ISO Certified in Just 3 Steps"
        description="Depending on the specific ISO Standard, different processes may apply. However, the certification schemes for ISO standards generally follow three main steps:"
        list={listSteps3}
        image="./src/assets/images/iso.png"
      />

      <Expert
        title="Core ISO Standards of Our Expertise"
        description="Discover our most widely used ISO standards – from quality and information security to environmental and occupational health. These are the standards trusted worldwide to improve performance, reduce risk and support innovation."
        listStepsExpert={listStepsExpert}
        classNameGrid="expert__body--grid"
        iconName="iso-icon"
      />

      <Howwork
        title="GLOBAL COMPLIANCE GROUP – Your Partner in ISO Standards"
        subtitle="We will identify the needs of your organization, assist in planning, and support the implementation of requirements within the processes and procedures that need to be modified or integrated in order to obtain certifications and ensure compliance with regulations or rules in accordance with ISO Standards or other private certifications"
        howWorkCards={[
          {
            title: 'Initial Evaluation',
            description:
              'We will evaluate the procedures, processes, equipment, products or materials that wish to be certified and determine whether it is possible to obtain the requested standards and what requirements they are based on',
          },
          {
            title: 'Planning and Implementation',
            description:
              'Once determined what standard or certificate is feasible to obtain, a detailed planning will identify which areas and characteristics should be modified and what changes will be made to guarantee the standards included in the desired ISO regulations.',
          },
          {
            title: 'Certification Body Application',
            description:
              'After making the changes, we will notify the Regulatory Authority of our intention to apply for the appropriate certificate. It will develop all the necessary documentation and carry out all procedures so that your organization receives the certificate as soon as possible.',
          },
        ]}
      />

      <Helpyou />
    </main>
  )
}
