import { Stepper as StepperMui, Step, StepLabel, StepConnector, styled, stepConnectorClasses } from '@mui/material'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const steps = ['Elección de tipo de denunciante', 'Registro de denuncia', 'Confirmación de registro de denuncia']

const StepperConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 28,
    left: 'calc(-50% + 1.75rem)',
    right: 'calc(50% + 1.75rem)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0056AC'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0056AC'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderWidth: 2
  }
}))

const CustomStepIcon = ({ icon, active, completed }) => {
  return (
    <figure
      className={clsx('bg-white rounded-full border-4 border-gray-400 w-14 h-14 flex items-center justify-center', {
        '!bg-blue-700 !border-blue-700': active || completed
      })}
    >
      <span
        className={clsx('text-gray-500 text-2xl font-bold', {
          'text-white': active || completed
        })}
      >
        {icon}
      </span>
    </figure>
  )
}

CustomStepIcon.propTypes = {
  icon: PropTypes.number,
  active: PropTypes.bool,
  completed: PropTypes.bool
}

export const HorizontalLinearStepper = ({ className }) => {
  return (
    <StepperMui
      className={clsx('max-w-lg mx-auto', className)}
      activeStep={1}
      connector={<StepperConnector />}
      alternativeLabel
    >
      {steps.map(label => (
        <Step key={label}>
          <StepLabel StepIconComponent={CustomStepIcon} classes={{ label: '!font-bold !mt-2 text-gray-400' }}>
            {label}
          </StepLabel>
        </Step>
      ))}
    </StepperMui>
  )
}

HorizontalLinearStepper.propTypes = {
  className: PropTypes.string
}
