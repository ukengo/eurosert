import Specialities from '@/sections/Specialities'
import Steps from '@/sections/Steps/Steps'
import Expert from '@/sections/Expert/Expert'
import Helpyou from '@/sections/Helpyou'
import AboutSertEur from '@/sections/AboutSertEur'
import LISTSTEPS from '@/constants/Liststeps'
import {
  EXPERT_EUROPEAN_DESCRIPTION,
  EXPERT_EUROPEAN_LIST,
  EXPERT_EUROPEAN_TITLE,
  STEPS_3_TITLE,
  STEPS_6_DESCRIPTION,
  STEPS_BUTTON_TEXT_TO_MARK,
} from '@/constants/others'

export const metadata = {
  title: 'European Certification',
}

export default () => {
  //expert
  return (
    <main className="content">
      <AboutSertEur />

      <Steps
        classNameMod="steps--lining"
        title={STEPS_3_TITLE}
        description={STEPS_6_DESCRIPTION}
        list={LISTSTEPS}
        image="./src/assets/images/CE-mark.png"
        buttonText={STEPS_BUTTON_TEXT_TO_MARK}
        buttonHref="/cemarking"
      />

      <Specialities />
      <Expert
        listStepsExpert={EXPERT_EUROPEAN_LIST}
        classNameMod="expert--lining"
        title={EXPERT_EUROPEAN_TITLE}
        description={EXPERT_EUROPEAN_DESCRIPTION}
      />
      <Helpyou />
    </main>
  )
}
