import { useRef } from 'react'
import Categorias from '../../components/Categorias/Categorias'
import Hero from '../../components/Hero/Hero'
import CardsProductos from '../../components/Productos/CardsProductos'
import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion'

import {
	CategoriasWrapper,
	HomeWrapper,
	ProductosWrapper,
	RecomendadosWrapper,
} from './HomeStyles'

function Home() {
	const categoriesRef = useRef()

	const doScroll = () => {
		window.scrollTo(
			categoriesRef.current.getBoundingClientRect().x,
			categoriesRef.current.getBoundingClientRect().y
		)
	}

	return (
		<HomeWrapper>
			<Hero doScroll={doScroll} />

			<RecomendadosWrapper>
				<h2>👾Ofertas👾</h2>
				<CardsRecomendacion />
			</RecomendadosWrapper>

			<CategoriasWrapper ref={categoriesRef}>
				<h2>Categorias</h2>
				<Categorias />
			</CategoriasWrapper>

			<ProductosWrapper>
				<h2>Nuestros productos</h2>
				<CardsProductos />
			</ProductosWrapper>
		</HomeWrapper>
	)
}

export default Home
