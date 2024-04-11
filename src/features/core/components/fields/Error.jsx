import FormHelperText from '@mui/material/FormHelperText'
import PropTypes from 'prop-types'

import useCustomField from '../../hooks/useCustomField'

const Error = ({ name, className }) => {
  const { error, gotError } = useCustomField(name, {
    subscription: { touched: true, error: true, submitError: true }
  })

  return gotError ? (
    <FormHelperText error className={className}>
      {error}
    </FormHelperText>
  ) : null
}

Error.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
}

export default Error
