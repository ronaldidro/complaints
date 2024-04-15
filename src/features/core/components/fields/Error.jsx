import FormHelperText from '@mui/material/FormHelperText'
import PropTypes from 'prop-types'

import useCustomField from '../../hooks/useCustomField'
import clsx from 'clsx'

const Error = ({ name, className }) => {
  const { error, gotError } = useCustomField(name, {
    subscription: { touched: true, error: true, submitError: true }
  })

  return gotError ? (
    <FormHelperText error className={clsx('!mx-0 !mt-2 !text-base !text-red-700', className)}>
      {error}
    </FormHelperText>
  ) : null
}

Error.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
}

export default Error
