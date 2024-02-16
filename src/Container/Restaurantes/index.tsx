import { useNavigate } from "react-router-dom"
import { useState } from "react"

import * as S from "./styles"

type Props = {
    title: string
    image: string
    description: string
    id?: number
    porcao: string
    preco: string
}

const Restaurante = ({ title, image, description, id, porcao, preco }: Props) => {
    const navigate = useNavigate()

    const [modalEstaAberto, setModalEstaAberto] = useState(false)

    const goToCart = () => {
        navigate('/cart')
    }

    return (
        <>
            <ul>
                <S.ProductCard key={id} onClick={() => setModalEstaAberto(true)}>
                    <img src={image} alt={title}  />
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                </S.ProductCard> 
            </ul> 
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={image} alt={title} />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>{title}</h4>
                        <p>{description}<br /> <br /> <br /></p>
                        <p>{`Serve: ${porcao}`}</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho  - {preco}</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante