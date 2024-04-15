import ChevronRight from '@assets/chevron_right.svg'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export const LearnAbout = ({ className }) => {
  return (
    <a href="#" target="_blank" rel="noopener noreferrer" className={clsx('flex', className)}>
      <span className="text-blue-700 font-medium leading-6 underline">Conoce sobre el servicio</span>
      <img src={ChevronRight} alt="chevron-right" className="pl-2" />
    </a>
  )
}

LearnAbout.propTypes = {
  className: PropTypes.string
}
