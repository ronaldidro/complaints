import { Page, Container, LearnAbout } from '@features/core'
import { CreateForm } from '@features/complaints'

const CreateComplaint = () => {
  return (
    <Page>
      <Container className="px-12 py-14">
        <h1 className="text-4xl font-bold leading-10">Ingresa tu denuncia de corrupción</h1>
        <p className="pt-4 pb-2">Completa la siguiente información para ingresar tu denuncia.</p>
        <LearnAbout className="pb-8" />
        <CreateForm />
      </Container>
    </Page>
  )
}

export default CreateComplaint
