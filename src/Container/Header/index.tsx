import logo from "../../../public/images/logo.png"
import { HeaderBar, Logo } from "./styles"

const Header = () => {
    return (
        <HeaderBar>
            <div className="header-container">
                <h4>Restaurantes</h4>
                <Logo src={logo} alt="Logo da Efood" />
                <h4>0 produto(s) no carrinho</h4>
            </div>
        </HeaderBar>
    )
} 

export default Header