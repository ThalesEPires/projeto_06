import { useState } from "react"

import Restaurante from "../../Pages/Restaurante"
import lixeira from "../../../public/images/lixeira.png"
import { Img, Overlay, CartItem, Infos, Title, Price, Lixeira, Valor, Value, Button, CartContainer } from "./styles"
import { useNavigate } from "react-router-dom"

type Props = {
    imagem: string
    nome: string
    preco: number
    id: number
}

const Carrinho = ({ imagem, nome, preco, id}: Props) => {
    const [cartIsClosed, setCartIsClosed] = useState(false)
    const navigate = useNavigate()

    const goToDelivery = () => {
        navigate('/entrega')
    }

    return (
        <div>
            <div>
                <Restaurante />
                <Overlay onClick={() => setCartIsClosed(true)}/>
                    <CartContainer className={cartIsClosed ? 'invisible' : ''}>
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
        </div>
    )
}

export default Carrinho