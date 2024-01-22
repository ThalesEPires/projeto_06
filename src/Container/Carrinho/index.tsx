import { useState } from "react"

import Restaurante from "../../Pages/Restaurante"
import pizza from "../../../images/pizza1.png"
import lixeira from "../../../images/lixeira.png"
import { Img, Overlay, CartItem, Infos, Title, Price, Lixeira, Valor, Value, Button, CartContainer } from "./styles"
import { useNavigate } from "react-router-dom"

const Carrinho = () => {
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
                            <CartItem>
                                <Img src={pizza} />
                                <Infos>
                                    <Title>Pizza Marguerita</Title>
                                    <Price>R$ 69,90</Price>
                                    <Lixeira src={lixeira} />
                                </Infos>
                            </CartItem>
                            <CartItem>
                                <Img src={pizza} />
                                <Infos>
                                    <Title>Pizza Marguerita</Title>
                                    <Price>R$ 69,90</Price>
                                    <Lixeira src={lixeira} />
                                </Infos>
                            </CartItem>
                            <CartItem>
                                <Img src={pizza} />
                                <Infos>
                                    <Title>Pizza Marguerita</Title>
                                    <Price>R$ 69,90</Price>
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