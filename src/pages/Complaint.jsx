import { Page, Container, LearnAbout } from '@features/core'
import { InitialForm } from '@features/complaints'

const Complaint = () => {
  return (
    <Page>
      <Container className="px-12 py-14">
        <h1 className="text-4xl font-bold leading-10">Plataforma Digital Única de Denuncias del Ciudadano</h1>
        <LearnAbout className=" pt-4 pb-6" />
        <InitialForm />
      </Container>
    </Page>
  )
}

export default Complaint
