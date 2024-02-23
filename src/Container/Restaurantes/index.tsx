import { useNavigate } from "react-router-dom"
import { useState } from "react"

import * as S from "./styles"

type Props = {
    product: Product
}

const Restaurante = ({ product }: Props) => {
    const navigate = useNavigate()

    const [modalEstaAberto, setModalEstaAberto] = useState(false)

    const goToCart = () => {
        navigate('/cart')
    }

    return (
        <>
            <ul>
                <S.ProductCard key={product.menu.id} onClick={() => setModalEstaAberto(true)}>
                    <img src={product.menu.image} alt={product.menu.name}  />
                    <h5>{product.menu.name}</h5>
                    <p>{product.menu.info}</p>
                    <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                </S.ProductCard> 
            </ul> 
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={product.menu.image} alt={product.menu.name} />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>{product.menu.name}</h4>
                        <p>{product.menu.info}<br /> <br /> <br /></p>
                        <p>{`Serve: ${product.menu.portion}`}</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho  - {product.menu.price}</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante