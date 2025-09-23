import { HOWWORK_CARDS, HOWWORK_SUBTITLE, HOWWORK_TITLE } from '@/constants/others'
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
        title={HOWWORK_TITLE}
        subtitle={HOWWORK_SUBTITLE}
        howWorkCards={HOWWORK_CARDS}
      />

      <Helpyou />
    </>
  )
}
