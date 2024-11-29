import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa' // Importa el icono de WhatsApp
import { FooterContainerStyled, LinksContainerStyled } from './FooterStyles'

const Footer = () => {
	return (
		<FooterContainerStyled>
			<LinksContainerStyled className="links">
				<Link to="/" style={{ paddingLeft: '2rem' }}>
					Inicio
				</Link>
				<Link to="/register" style={{ paddingLeft: '2rem' }}>
					Registrare
				</Link>

				{/* Enlace a WhatsApp */}
				<a
					href="https://wa.me/3163202647" // Cambia "1234567890" por el número de teléfono real
					target="_blank"
					rel="noopener noreferrer"
					style={{
						paddingLeft: '2rem',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					<FaWhatsapp size={20} color="#25D366" />
					Contacto
				</a>
			</LinksContainerStyled>
			<p>
				<span>© 2024 Tecsisman. Todos los derechos reservados.</span>
			</p>
		</FooterContainerStyled>
	)
}

export default Footer
