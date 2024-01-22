import { useNavigate } from "react-router-dom"
import { Overlay } from "../../Container/Carrinho/styles"
import Restaurante from "../../Container/Restaurantes"
import * as S from "./styles"

const Checkout = () => {
    const navigate = useNavigate()

    const goToDelivery = () => {
        navigate('/entrega')
    }

    const goToConfirmation = () => {
        navigate('/confirmation')
    }

    return (
        <>
            <Restaurante />
            <Overlay />
            <S.CartContainer>
            <h3>Pagamento - Valor a pagar R$ 190,90</h3>
            <form>
                <S.Row>
                    <S.InputGroup>
                        <label htmlFor="nameCard">Nome do Cartão</label>
                        <input type="text" id="nameCard" name="nameCard"></input>
                    </S.InputGroup>
                </S.Row>
                <S.Row>
                    <S.InputGroup>
                        <label htmlFor="numberCard">Número do cartão</label>
                        <input type="number" id="numberCard" name="numberCard"></input>
                    </S.InputGroup>
                    <S.InputGroup maxWidth="88px">
                        <label htmlFor="cardCode">CVV</label>
                        <input type="number" id="cardCode" name="cardCode"></input>
                    </S.InputGroup>
                </S.Row>
                <S.Row>
                    <S.InputGroup>
                        <label htmlFor="expiresMonth">Mês do vencimento</label>
                        <input type="number" id="expiresMonth" name="expiresMonth"></input>
                    </S.InputGroup>
                    <S.InputGroup>
                        <label htmlFor="expiresYear">Ano do vencimento</label>
                        <input type="number" id="expiresYear" name="expiresYear"></input>
                    </S.InputGroup>
                </S.Row>
            </form>
            <S.Button type="button" title="Finalizar pagamento" onClick={goToConfirmation}>Finalizar pagamento</S.Button>
            <S.Button type="button" title="Voltar para a edição de endereço" onClick={goToDelivery}>Voltar para a edição de endereço</S.Button>
        </S.CartContainer>
        </>
    )
}

export default Checkout