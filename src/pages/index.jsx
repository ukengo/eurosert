import Helpyou from '@/sections/Helpyou'
import Hero from '@/sections/Hero'
import Howwork from '@/sections/Howwork/Howwork'
import Services from '@/sections/Services'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Services />
      <Howwork
        title="Our Process"
        subtitle="Comprehensive certification process from start to finish"
        howWorkCards={[
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
        ]}
      />

      <Helpyou />
    </>
  )
}
