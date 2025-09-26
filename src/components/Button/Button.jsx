import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, type = 'button', href, children, ...rest } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const attributesByTag = isLink
    ? { href, ...rest } // пробрасываем все остальные пропсы
    : { type, ...rest } // пробрасываем все остальные пропсы

  return (
    <Component className={clsx('button', className)} {...attributesByTag}>
      {children}
    </Component>
  )
}
