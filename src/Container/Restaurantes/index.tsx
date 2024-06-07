import { useNavigate } from "react-router-dom"
import { useState } from "react"

import * as S from "./styles"

type Props = {
    id: number
    image: string
    price: number
    name: string
    description: string
    portion: string 
}


const Restaurante = ({ image, price, name, description, portion, id }: Props) => {
    const navigate = useNavigate()
    
    const [modalEstaAberto, setModalEstaAberto] = useState(false)
    
    const goToCart = () => {
        navigate('/cart')
    }
    
    return (
        <>
            <ul>
                <S.ProductCard key={id} onClick={() => setModalEstaAberto(true)}>
                    <img src={image} alt={name}  />
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <button type="button">Adicionar ao carrinho</button>
                </S.ProductCard> 
            </ul> 
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={image} alt={name} />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{description}<br /> <br /> <br /></p>
                        <p>{`Serve: ${portion}`}</p>
                        <button type="button" onClick={goToCart}>{`Adicionar ao carrinho  - R$${price}`}</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante