import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const { width = '200', height = '60', className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/images/logo.svg"
        alt=""
        width={width}
        height={height}
        loading={loading}
      />
    </a>
  )
}
