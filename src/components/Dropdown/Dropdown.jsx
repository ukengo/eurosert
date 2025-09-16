import './Dropdown.scss'

export default ({ items }) => {

  return (
    <div className="dropdown">
    <ul className="dropdown__list">
      {items.map(({ label, href }, index) => (
        <li className="dropdown__item" key={index}>
          <a href={href} className="dropdown__link" >
            {label}
          </a>
        </li>
      ))}
    </ul>
    </div>
  )
}