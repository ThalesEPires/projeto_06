import Header from "../../Container/Header"
import MenuList from "../../Container/MenuList"
import restaurantImg from "../../../images/apresentacao.png"
import { Restaurant } from "../Home"


const restaurantMenu: Restaurant[] = [
]

const Restaurantes = () => {
    return (
        <>
            <Header />
            <img src={restaurantImg} alt='' />
            <MenuList menu={restaurantMenu} />
        </>
    )
}

export default Restaurantes