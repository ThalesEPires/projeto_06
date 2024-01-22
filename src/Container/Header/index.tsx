import logo from "../../../images/logo.png"
import { HeaderBar, Logo } from "./styles"

const Header = () => {
    return (
        <HeaderBar>
            <h4>Restaurantes</h4>
            <Logo src={logo} alt="Logo da Efood" />
            <h4>0 produto(s) no carrinho</h4>
        </HeaderBar>
    )
}

export default Header