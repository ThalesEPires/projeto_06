import Restaurante from "../../Pages/Restaurante"
import lixeira from "../../../public/images/lixeira.png"
import { Img, Overlay, CartItem, Infos, Title, Price, Lixeira, Valor, Value, Button, CartContainer } from "./styles"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../Store"

import { close } from "../../Store/reducers/cart"

type Props = {
    imagem: string
    nome: string
    preco: number
    id: number
}

const Carrinho = ({ imagem, nome, preco, id}: Props) => {
    const navigate = useNavigate()

    const { isOpen } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const goToDelivery = () => {
        navigate('/entrega')
    } 

    return (
        <div>
            <Restaurante />
            <CartContainer className={isOpen ? 'is-open' : ''}>
                <Overlay onClick={closeCart}/>
                    <ul>
                        <CartItem key={id}>
                            <Img src={imagem} />
                            <Infos>
                                <Title>{nome}</Title>
                                <Price>{preco}</Price>
                                <Lixeira src={lixeira} />
                            </Infos>
                        </CartItem>
                    </ul>
                    <Valor>
                        <Value>Valor total</Value>
                        <Value>R$ 182,70</Value>
                    </Valor>
                    <Button type="button" onClick={goToDelivery} >Continuar com a entrega</Button>
                </CartContainer>
        </div>
    )
}

export default Carrinho