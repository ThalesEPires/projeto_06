import { useNavigate } from "react-router-dom"
import { Overlay } from "../Carrinho/styles"
import Restaurante from "../Restaurantes"
import { Button, CartContainer, InputGroup, Row } from "./styles"

const Delivery = () => {
    const navigate = useNavigate()

    const goToCart = () => {
        navigate('/cart')
    }

    const goToCheckout = () => {
        navigate('/checkout')
    }
    return (
        <>
            <Restaurante />
            <Overlay />
            <CartContainer>
                <h3>Entrega</h3>
                <form>
                    <Row>
                        <InputGroup>
                            <label htmlFor="nome">Quem irá receber</label>
                            <input type="text" id="nome" name="nome"></input>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup>
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" id="endereco" name="endereco"></input>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup>
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" id="cidade" name="cidade"></input>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup>
                            <label htmlFor="cep">CEP</label>
                            <input type="number" id="cep" name="cep"></input>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="numero">Número</label>
                            <input type="number" id="numero" name="numero"></input>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup>
                            <label htmlFor="complemento">Complemento (opcional)</label>
                            <input type="text" id="complemento" name="complemento"></input>
                        </InputGroup>
                    </Row>
                </form>
                <Button type="button" title="Continuar com o pagamento" onClick={goToCheckout}>Continuar com o pagamento</Button>
                <Button type="button" title="Voltar para o carrinho" onClick={goToCart}>Voltar para o carrinho</Button>
            </CartContainer>
        </>
    )
}

export default Delivery