import Specialities from '@/sections/Specialities'
import Steps from '@/sections/Steps/Steps'
import Expert from '@/sections/Expert/Expert'
import Helpyou from '@/sections/Helpyou'
import AboutSertEur from '@/sections/AboutSertEur'
import LISTSTEPS from "@/constants/Liststeps"

export const metadata = {
  title: 'European Certification',
}

export default () => {

//expert
const listStepsExpert = [
  {
    title: "Identify applicable EU Standards",
    description: "Product classification is carried out according to the definitions set out in current EU Directives and Regulations. Based on this classification, we identify which directives and regulations must be taken into account to place the product on the European market.",
    iconName: "identify",
  },
  {
    title: "Extract and define Legal Requirements",
    description: "Identify the legal obligations from relevant regulations that apply to your product. We will specify which requirements must be met and support you in achieving full compliance.",
    iconName: "extract-and-classify",
  },
  {
    title: "Assess Product Compliance",
    description: "To verify whether a product complies with the requirements set out in the regulations, it must undergo a conformity assessment. Sherpa Product Certification will assess your product against the identified essential requirements, and if any gaps are found, we will outline the necessary modifications to ensure full compliance.",
    iconName: "assess-compliance",
  },
  {
    title: "Testing in Accredited Laboratories",
    description: "As part of the conformity assessment, it is essential to verify that the product’s technical and functional characteristics meet the safety and compatibility requirements set by current regulations. To ensure and demonstrate compliance, the product must undergo laboratory testing in accredited facilities appropriate to its nature. Sherpa Product Certification will identify the necessary tests and arrange for them to confirm conformity.",
    iconName: "tests",
  },
  {
    title: "Coordinate with Notified Bodies",
    description: "In many cases, the evaluation can be performed directly by the manufacturer. However, for certain products, regulations require assessment by a Notified Body designated by the European Commission as the competent authority. If your product falls into this category, we will guide you to the appropriate Accredited Body for the conformity assessment, and Sherpa Product Certification can handle the entire process on your behalf.",
    iconName: "management",
  },
  {
    title: "Prepare Declaration of Conformity and CE Marking",
    description: "All products placed on the European market must be accompanied by a Declaration of Conformity specifying the directives and regulations they comply with. Sherpa Product Certification will prepare the required documentation, draft the Declaration, and guide you through the CE marking process.",
    iconName: "write-declaration",
  },
  {
    title: "Develop and maintain Technical Documentation",
    description: "Each regulation specifies the required content for a product’s technical documentation. Sherpa Product Certification will analyze your documentation against the applicable Directive or Regulation to ensure compliance. If the documentation is incomplete or incorrect, we will provide guidance on how to complete or revise it. If no documentation exists, we will assist you from the start, outlining all necessary steps to meet the required content and format standards.",
    iconName: "technical-documentation",
  },
]

return (
    <main className="content">

      <AboutSertEur />

      <Steps
        classNameMod='steps--lining'
        title='Європейська сертифікація за 6 кроків'
        description='Процес сертифікації визначається відповідно до категорії продукту, але базова схема сертифікації складається з шести кроків:'
        list={LISTSTEPS}
        image='./src/assets/images/CE-mark.png'
        buttonText='More about CE Marking'
        buttonHref='/cemarking'
      />

      <Specialities />
      <Expert
        listStepsExpert={listStepsExpert}
        classNameMod='expert--lining'
         title='GLOBAL COMPLIANCE GROUP - професійна підтримка з питань сертифікації в Європі'
         description='Процес сертифікації відрізняється залежно від типу продукції, але загалом складається з 6 етапів і завершується нанесенням маркування CE на виріб. Водночас деякі товари не потребують самого маркування CE, проте повинні відповідати чинним вимогам. Sherpa Product Certification є фахівцем із європейської сертифікації, і ми проведемо вас через усі етапи, а за потреби — виконаємо весь процес за вас, щоб ви змогли впровадити маркування CE на своїй продукції.'
      />
      <Helpyou />



    </main>

  )
}