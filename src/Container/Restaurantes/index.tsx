import { useNavigate } from "react-router-dom"
import { useState } from "react"

import * as S from "./styles"

type Props = {
    image: string;
    price: number;
    itemId: number;
    name: string;
    info: string;
    portion: string;
}

const Restaurante = ({ image, price, itemId, name, info, portion }: Props) => {
    const navigate = useNavigate()

    const [modalEstaAberto, setModalEstaAberto] = useState(false)

    const goToCart = () => {
        navigate('/cart')
    }

    return (
        <>
            <ul>
                <S.ProductCard key={itemId} onClick={() => setModalEstaAberto(true)}>
                    <img src={image} alt={name}  />
                    <h5>{name}</h5>
                    <p>{info}</p>
                    <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                </S.ProductCard> 
            </ul> 
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={image} alt={name} />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{info}<br /> <br /> <br /></p>
                        <p>{`Serve: ${portion}`}</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho  - {price}</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante