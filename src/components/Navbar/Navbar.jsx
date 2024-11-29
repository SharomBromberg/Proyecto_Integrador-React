import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

import { FiHome, FiUser } from 'react-icons/fi'
import CartIcon from './CartIcon/CartIcon'
import ModalCart from './ModalCart/ModalCart'
import ModalUser from './ModalUser/ModalUser'

import {
	CartNavStyled,
	CustomImageStyled,
	LinkContainerStyled,
	LinksContainerStyled,
	NavbarContainerStyled,
	SpanStyled,
	UserContainerStyled,
	UserNavStyled,
} from './NavbarStyles'
import { toggleMenuHidden } from '../../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {
	const { currentUser } = useSelector((state) => state.user)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	return (
		<NavbarContainerStyled>
			<ModalCart />
			<ModalUser />
			<div>
				<Link to="/">
					<CustomImageStyled src="/assets/logo.png" alt="Logo" />
				</Link>
			</div>
			<LinksContainerStyled>
				<motion.div whileTap={{ scale: 0.97 }}>
					<Link to="/">
						<LinkContainerStyled>
							<FiHome color="c8a2ff" />
						</LinkContainerStyled>
						Inicio
					</Link>
				</motion.div>

				<UserNavStyled>
					<UserContainerStyled
						onClick={() =>
							currentUser ? dispatch(toggleMenuHidden()) : navigate('/register')
						}
					>
						<SpanStyled>
							{currentUser
								? `${currentUser.nombre}`
								: 'Inicia Sesion / Registro'}
						</SpanStyled>
						<FiUser color="c8a2ff" />
					</UserContainerStyled>
				</UserNavStyled>

				<CartNavStyled>
					<CartIcon />
				</CartNavStyled>
			</LinksContainerStyled>
		</NavbarContainerStyled>
	)
}

export default Navbar
