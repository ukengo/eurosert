import Icon from '@/components/Icon'
import './IconCardRed.scss'

export default (props) => {
  const { iconRedName } = props

  return (
    <div className="icon-card-red">
      <Icon className="icon-card-red__svg" name={iconRedName} hasFill />
    </div>
  )
}
