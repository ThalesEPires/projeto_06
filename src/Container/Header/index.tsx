import { useDispatch, useSelector } from "react-redux"

import { open } from "../../Store/reducers/cart"

import { CartButton, HeaderBar, Logo } from "./styles"
import logo from "../../../public/images/logo.png"
import { RootReducer } from "../../Store"

const Header = () => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return (
        <HeaderBar>
            <div className="header-container">
                <h4>Restaurantes</h4> 
                <Logo src={logo} alt="Logo da Efood" />
                <CartButton onClick={openCart}>{items.length} produto(s) no carrinho</CartButton>
            </div>
        </HeaderBar>
    )
} 

export default Header