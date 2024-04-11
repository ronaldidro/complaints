import PropTypes from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

export const Form = ({ initialValues, onSubmit, className, children, ...props }) => {
  return (
    <FinalForm initialValues={initialValues} onSubmit={onSubmit} {...props}>
      {({ handleSubmit, submitting, pristine, values, submitError, ...rest }) => (
        <form onSubmit={handleSubmit} className={className}>
          {children({ submitting, pristine, values, submitError, ...rest })}
        </form>
      )}
    </FinalForm>
  )
}

Form.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.func
}
