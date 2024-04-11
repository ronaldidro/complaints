import { Checkbox as CheckboxMui, FormControl, FormControlLabel } from '@mui/material'
import CheckedIcon from '@assets/checked.svg'
import UncheckedIcon from '@assets/unchecked.svg'
import UncheckedErrorIcon from '@assets/unchecked_error.svg'
import { useField } from 'react-final-form'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { margin } from '../../utils/sizes'
import Error from './Error'

export const Checkbox = ({ name, label, disabled, validate, marginType, className }) => {
  const { input, meta } = useField(name, { validate, type: 'checkbox' })

  return (
    <FormControl className={clsx(margin[marginType], className)}>
      <FormControlLabel
        label={label}
        id={`${name}-label`}
        htmlFor={`${name}-input`}
        control={
          <CheckboxMui
            id={`${name}-input`}
            name={name}
            disabled={disabled}
            onChange={input.onChange}
            className="!py-0"
            icon={meta.submitFailed ? <img src={UncheckedErrorIcon} /> : <img src={UncheckedIcon} />}
            checkedIcon={<img src={CheckedIcon} />}
            disableRipple
            {...input}
          />
        }
        classes={{ label: 'text-base' }}
      />
      <Error name={name} />
    </FormControl>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  marginType: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}
