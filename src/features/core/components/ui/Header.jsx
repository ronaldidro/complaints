import { Container } from '../Container'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="bg-red-800 py-3.75">
      <Container className="flex items-center px-12">
        <Logo className="h-10 md:h-9.5" />
        <p role="heading" className="text-white hidden md:flex border-l ml-6 pl-6">
          Plataforma Digital Única de Denuncias del Ciudadano
        </p>
      </Container>
    </header>
  )
}

export default Header
