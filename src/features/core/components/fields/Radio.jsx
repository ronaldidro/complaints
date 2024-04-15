import { Radio as RadioMui, FormControl, FormControlLabel, RadioGroup } from '@mui/material'
import { useField } from 'react-final-form'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { margin } from '../../utils/sizes'
import Error from './Error'

export const Radio = ({
  name,
  label,
  options = [],
  row = false,
  disabled,
  validate,
  marginType,
  className,
  controlClassName
}) => {
  const {
    input,
    meta: { submitFailed }
  } = useField(name, { validate, type: 'radio' })

  return (
    <FormControl className={clsx(margin[marginType], className)}>
      <label htmlFor={`${name}-input`} id={`${name}-label`} className="font-bold pb-5">
        {label}
      </label>
      <RadioGroup
        id={`${name}-input`}
        aria-labelledby={`${name}-label`}
        name={name}
        value={input.value}
        onChange={input.onChange}
        className="gap-6"
        row={row}
      >
        {options.map((o, index) => (
          <FormControlLabel
            key={index}
            name={`${name}-${index}`}
            value={o.value.toString()}
            label={o.label}
            className={clsx({ 'border border-red-700': submitFailed }, controlClassName)}
            control={
              <RadioMui
                disabled={disabled}
                className={clsx({ '!text-red-700': submitFailed }, '!text-gray-800 !pl-0 !py-0 !pr-4 self-start')}
                disableRipple
                inputProps={{
                  id: `${name}-${index}-input`,
                  'aria-label': o.label
                }}
              />
            }
          />
        ))}
      </RadioGroup>
      <Error name={name} />
    </FormControl>
  )
}

Radio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  row: PropTypes.bool,
  disabled: PropTypes.bool,
  validate: PropTypes.func,
  marginType: PropTypes.string,
  className: PropTypes.string,
  controlClassName: PropTypes.string
}
