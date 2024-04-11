import PropTypes from 'prop-types'

import GobPe from '@assets/gobpe.svg'

const Logo = ({ className }) => {
  return <img src={GobPe} className={className} alt="logo-header" />
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
