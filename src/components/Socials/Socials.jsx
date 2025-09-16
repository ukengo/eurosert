import Icon from '@/components/Icon'
import './Socials.scss'

export default () => {
  const socials = [
    {
      name: 'Whatsapp',
      url: 'https://wa.me/+380675042079',
      iconName: 'watsapp-long-icon',
    },
  ]

  return (
    <div className="socials">
      <ul className="socials__items">
        {socials.map(({ name, url, iconName }, index) => (
          <li key={index} className="socials__item">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Icon className="socials__svg" name={iconName} width="131" height="31" hasFill />
            </a>
          </li>
        ))}
      </ul>

    </div>
  )

}