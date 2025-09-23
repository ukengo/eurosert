import AboutCEMark from '@/sections/AboutCEMark'
import Steps from '@/sections/Steps/Steps'
import LISTSTEPS from '@/constants/Liststeps'
import Helpyou from '@/sections/Helpyou'
import { STEPS_BUTTON_TEXT_TO_SERT } from '@/constants/others'

export const metadata = {
  title: 'CE Marking',
}

export default () => {
  return (
    <main className="content">
      <AboutCEMark />
      <Steps
        classNameMod="steps--lining"
        title="Європейська сертифікація за 6 кроків"
        description="Процес сертифікації визначається відповідно до категорії продукту, але базова схема сертифікації складається з шести кроків:"
        list={LISTSTEPS}
        image="./src/assets/images/eurosert.png"
        buttonText={STEPS_BUTTON_TEXT_TO_SERT}
        buttonHref="/european"
      />
      <Helpyou />
    </main>
  )
}
