import PropTypes from 'prop-types'

import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from './Header'

export const Page = ({ children }) => {
  return (
    <>
      <Header />
      <Breadcrumb />
      {children}
      <Footer />
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node
}
