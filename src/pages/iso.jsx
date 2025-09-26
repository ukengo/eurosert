import {
  STEPS_3_DESCRIPTION,
  STEPS_3_TITLE,
  STEPS_3_LIST,
  STEPS_EXPERT_LIST,
  EXPERT_TITLE,
  EXPERT_DESCRIPTION,
  HOWWORK_ISO_TITLE,
  HOWWORK_ISO_SUBTITLE,
  HOWWORK_ISO_CARDS,
} from '@/constants/others'
import AboutISO from '@/sections/AboutISO/AboutISO'
import Expert from '@/sections/Expert/Expert'
import Helpyou from '@/sections/Helpyou'
import Howwork from '@/sections/Howwork/Howwork'
import Steps3 from '@/sections/Steps3'

export const metadata = {
  title: 'ISO Standards',
}

export default () => {
  return (
    <main className="content">
      <AboutISO />

      <Steps3
        classNameMod="steps--lining"
        title={STEPS_3_TITLE}
        description={STEPS_3_DESCRIPTION}
        list={STEPS_3_LIST}
        image="./src/assets/images/iso.png"
      />

      <Expert
        title={EXPERT_TITLE}
        description={EXPERT_DESCRIPTION}
        listStepsExpert={STEPS_EXPERT_LIST}
        classNameGrid="expert__body--grid"
        iconName="iso-icon"
      />

      <Howwork
        title={HOWWORK_ISO_TITLE}
        subtitle={HOWWORK_ISO_SUBTITLE}
        howWorkCards={HOWWORK_ISO_CARDS}
      />

      <Helpyou />
    </main>
  )
}
