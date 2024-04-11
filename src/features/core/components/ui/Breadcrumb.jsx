import { Container } from '../Container'

const Breadcrumb = () => {
  return (
    <section aria-label="breadcrumb" className="bg-gray-100 py-4 shadow-breadcrumb">
      <Container className="px-6 lg:px-12">
        <p className="text-blue-700 !text-sm !font-bold !leading-6">Nueva denuncia</p>
      </Container>
    </section>
  )
}

export default Breadcrumb
