import { Cardapio } from "../../types"
import Carrinho from "../Carrinho"
import * as S from "./styles"

export type Props = {
    cart: Cardapio[]
}

const CartList = ({ cart }: Props) => {
    return (
        <div className="container">
            <S.CartList>
                {cart.map((cart) => (
                    <li key={cart.id}>
                        <Carrinho
                            id={cart.id}
                            foto={cart.foto}
                            preco={cart.preco}
                            nome={cart.nome}
                        />
                    </li>
                ))}
            </S.CartList>
        </div>
    )
}

export default CartList