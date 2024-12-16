import { useState } from "react"
import { useNavigate } from "react-router-dom"

import * as S from "./styles"
import { ProductList } from "./styles"
import { add, open } from "../../Store/reducers/cart"
import { useDispatch } from "react-redux"

type Props = {
    id: number
    foto: string
    preco: number  
    nome: string
    descricao: string
    porcao: string
}


const Restaurante = ({ id, foto, preco, nome, descricao, porcao }: Props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCart = () => {
        dispatch(add({ id: id, foto: foto, preco: preco, nome: nome, descricao: descricao, porcao: porcao}))
        navigate('/cart')
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
                    <img src={foto} alt={nome}  />
                    <h5>{nome}</h5>
                    <p>{getDescription(descricao)}</p>
                    <button type="button">Adicionar ao carrinho</button>
                </S.ProductCard> 
            </ProductList> 
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={foto} alt={nome} />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>{nome}</h4>
                        <p>{descricao}<br /> <br /> <br /></p>
                        <p>{`Serve: ${porcao}`}</p>
                        <button type="button" onClick={addToCart}>{`Adicionar ao carrinho  - R$${preco}`}</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante