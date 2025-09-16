import Section from '@/layouts/Section'
import './Info.scss'
import clsx from 'clsx'


export default (props) => {
  const { title, description, className } = props

  return (
    <>
      <div className="info__inner container">
        <h1 className='info__title'>
          {title}
        </h1>
        <div className={clsx('info__content', className)}>
          {description.map((item, index) => (
            <p key={index}>
              {item}
            </p>
          ))
          }
        </div>
      </div>
   

    <Section
      className="startinfo"
    >
      </Section>
  </>
  )
}