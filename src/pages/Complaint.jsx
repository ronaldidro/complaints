import ChevronRight from '@assets/chevron_right.svg'
import { Page, Container } from '@features/core'
import { InitialForm } from '@features/complaints'

const Complaint = () => {
  return (
    <Page>
      <Container className="px-12 py-14">
        <h1 className="text-4xl font-bold leading-10">Plataforma Digital Única de Denuncias del Ciudadano</h1>
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex pt-4 pb-6">
          <span className="text-blue-700 font-medium leading-6 underline">Conoce sobre el servicio</span>
          <img src={ChevronRight} alt="chevron-right" className="pl-2" />
        </a>
        <InitialForm />
      </Container>
    </Page>
  )
}

export default Complaint
