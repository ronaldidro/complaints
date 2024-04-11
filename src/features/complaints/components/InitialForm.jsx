import { FORM_ERROR } from 'final-form'
import PropTypes from 'prop-types'

import ArrowRight from '@assets/arrow_right.svg'
import { Button, Checkbox, Form } from '@features/core'
import { COMPLAINT_REGISTER_STEPS } from '../utils/constants'

const CustomItem = ({ order, description }) => {
  return (
    <div className="flex items-center pt-4">
      <figure className="bg-green-200 rounded-full h-8 w-8 flex items-center justify-center">
        <span className="font-bold text-white">{order}</span>
      </figure>
      <p className="pl-3">{description}</p>
    </div>
  )
}

export const InitialForm = () => {
  const handleSubmit = ({ readed }) => {
    if (!readed) return { [FORM_ERROR]: 'Debes marcar esta opción para poder continuar' }
  }

  return (
    <Form onSubmit={handleSubmit} initialValues={{ readed: false }}>
      {({ submitError }) => (
        <>
          <section className="bg-neutral-100 py-14 px-32 mb-14">
            <article className="pb-6">
              <p>¡Hola!</p>
              <p>
                Antes de iniciar con el registro de tu denuncia, ten en cuenta que
                <b> en esta plataforma, tu denuncia debe:</b>
              </p>
            </article>
            <article className="bg-white py-9 px-20 shadow-complaint-criteria">
              <ul className="list-disc list-inside">
                <li className="pb-4">
                  Tratarse de un posible <b> acto de corrupción</b> en la administración pública.
                </li>
                <li>
                  Involucrar a una persona que <b> trabaje en el sector público.</b>
                </li>
              </ul>
              <p className="pt-4 pb-7">
                Si, por otro lado, tu denuncia está referida a una <b>insatisfacción o disconformidad</b> sobre la
                calidad en la atención o presentación de un servicio público, puedes ingresar un reclamo en el&nbsp;
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline">
                  Libro de reclamaciones.
                </a>
              </p>
              <div className="flex flex-col items-center">
                <Checkbox name="readed" label="Declaro que he leído la presente información" />
                {submitError && <p className="text-red-700 pt-2">{submitError}</p>}
              </div>
            </article>
            <article className="pt-9">
              <p>Podrás registrar tu denuncia en tres pasos:</p>
              {Object.entries(COMPLAINT_REGISTER_STEPS).map(([key, value], index) => (
                <CustomItem key={index} order={key} description={value} />
              ))}
            </article>
          </section>
          <section className="flex justify-center">
            <Button type="submit" variant="contained" endIcon={<img src={ArrowRight} alt="arrow-right" />}>
              Iniciar denuncia
            </Button>
          </section>
        </>
      )}
    </Form>
  )
}

CustomItem.propTypes = {
  order: PropTypes.string,
  description: PropTypes.string
}
