import ButtonMui from '@mui/material/Button'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { button } from '../../utils/sizes'

export const Button = ({
  el,
  variant,
  children,
  onClick,
  type,
  disabled,
  size,
  className,
  endIcon,
  to,
  target,
  ...props
}) => {
  return (
    <ButtonMui
      component={el === 'Link' ? Link : undefined}
      to={to}
      target={target}
      variant={variant}
      onClick={onClick}
      disableElevation
      disableRipple
      fullWidth={!!size}
      disabled={disabled}
      type={type}
      classes={{
        root: '!normal-case',
        contained: '!py-4 !bg-blue-700 !font-bold',
        outlined: '!bg-white !border-2 hover:border-2 !py-3',
        text: '!font-medium !p-0'
      }}
      className={clsx('!text-base', button[size], className)}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </ButtonMui>
  )
}

Button.propTypes = {
  el: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string,
  endIcon: PropTypes.node,
  to: PropTypes.string,
  target: PropTypes.string
}
