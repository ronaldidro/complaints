import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Form, Radio, Button, HorizontalLinearStepper } from '@features/core'
import * as validations from '@features/core/utils/validations'
import { Anonymous, Juridical, Natural } from './Complainant'
import { useReadedContext } from '../context/ReadedContext'

const complainantTypes = [
  { label: <Natural />, value: 'natural' },
  { label: <Juridical />, value: 'juridical' },
  { label: <Anonymous />, value: 'anonymous' }
]

export const CreateForm = () => {
  const [readed] = useReadedContext()
  const navigate = useNavigate()

  const handleSubmit = value => {
    console.log('🚀 ~ handleSubmit ~ value:', value)
  }

  useEffect(() => {
    if (!readed) navigate('/')
  }, [readed])

  return (
    <Form onSubmit={handleSubmit}>
      {({ submitError }) => (
        <>
          <section className="bg-neutral-100 rounded-lg px-8 py-16">
            <HorizontalLinearStepper className="pb-14" />
            <Radio
              row
              name="complainantType"
              label="Puedes ingresar tu denuncia como:"
              options={complainantTypes}
              controlClassName="bg-white !m-0 p-5 rounded shadow-complainant-type self-start"
              validate={validations.required('Debes elegir un tipo de denunciante')}
            />
          </section>
          <section className="flex justify-end pt-8">
            <Button type="submit" variant="contained" className="w-52">
              Continuar
            </Button>
          </section>
        </>
      )}
    </Form>
  )
}
