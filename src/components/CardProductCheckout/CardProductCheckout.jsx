import { useDispatch } from 'react-redux'
import { formatPrice } from '../../utils'
import { BsPlusLg } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice'

import Count from '../UI/Count/Count'
import Increase from '../UI/Increase/Increase'

import {
	CardContainerStyled,
	CardInfoStyled,
	PriceStyled,
	ProductTitleStyled,
	TextStyled,
	QuantityContainerStyled,
} from './CardProductCheckoutStyles'
import { IoMdTrash } from 'react-icons/io'

const CardProductCheckout = ({ id, img, title, price, quantity, desc }) => {
	const dispatch = useDispatch()

	return (
		<CardContainerStyled>
			<img src={img} alt={title} />
			<CardInfoStyled>
				<ProductTitleStyled>{title}</ProductTitleStyled>
				<TextStyled>{desc}</TextStyled>
				<PriceStyled>{formatPrice(price)}</PriceStyled>
			</CardInfoStyled>
			<QuantityContainerStyled>
				<Increase
					bgColor="var(--btn-gradient-secondary)"
					onClick={() => dispatch(removeFromCart(id))}
				>
					{quantity === 1 ? <IoMdTrash /> : <FaMinus />}
				</Increase>
				<Count>{quantity}</Count>
				<Increase
					onClick={() =>
						dispatch(addToCart({ id, img, title, price, quantity, desc }))
					}
				>
					<BsPlusLg />
				</Increase>
			</QuantityContainerStyled>
		</CardContainerStyled>
	)
}

export default CardProductCheckout
