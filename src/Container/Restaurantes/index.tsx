import { useState } from "react"

import * as S from "./styles"
import { ProductList } from "./styles"
import { add, open } from "../../Store/reducers/cart"
import { useDispatch } from "react-redux"

type Props = {
    id: number
    image: string
    price: number
    name: string
    description: string
    portion: string
}


const Restaurante = ({ image, price, name, description, portion, id }: Props) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(add())
        dispatch(open())
    }
    
    const [modalEstaAberto, setModalEstaAberto] = useState(false)

    const getDescription = (text: string) => {
        if (text.length > 260) {
            return text.slice(0, 257) + '...'
        }
        return text
    }
    
    return (
        <>
            <ProductList>
                <S.ProductCard key={id} onClick={() => setModalEstaAberto(true)}>
                    <img src={image} alt={name}  />
                    <h5>{name}</h5>
                    <p>{getDescription(description)}</p>
                    <button type="button">Adicionar ao carrinho</button>
                </S.ProductCard> 
            </ProductList> 
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={image} alt={name} />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{description}<br /> <br /> <br /></p>
                        <p>{`Serve: ${portion}`}</p>
                        <button type="button" onClick={addToCart}>{`Adicionar ao carrinho  - R$${price}`}</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante