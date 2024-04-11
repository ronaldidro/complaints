import PropTypes from 'prop-types'
import clsx from 'clsx'

import { container } from '../utils/sizes'

export const Container = ({ className, children, size }) => {
  return <div className={clsx('mx-auto container', container[size], className)}>{children}</div>
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.string
}
