import PropTypes from 'prop-types'

const LabelBase = ({ title, children }) => (
  <article className="max-w-64 h-36">
    <b>{title}</b>
    {children}
  </article>
)

LabelBase.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export const Natural = () => (
  <LabelBase title="Persona natural">
    <p>
      Requiere tus <b>nombres y apellidos, DNI,</b> carnet de extranjería o pasaporte, <b>correo electrónico</b> y
      número de celular.
    </p>
  </LabelBase>
)

export const Juridical = () => (
  <LabelBase title="Persona jurídica">
    <p>
      Requiere datos de la <b>empresa denunciante, RUC,</b> razón social, representante, <b>correo electrónico</b> y
      número de celular.
    </p>
  </LabelBase>
)

export const Anonymous = () => (
  <LabelBase title="Anónimo">
    <p>
      <b>No requiere</b> tus datos personales, pero de <b>manera opcional</b> puedes registrar un correo electrónico o
      número de celular, para enviarte <b>notificaciones urgentes.</b>
    </p>
  </LabelBase>
)
