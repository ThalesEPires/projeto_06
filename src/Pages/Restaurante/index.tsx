import Header from "../../Container/Header"
import MenuList from "../../Container/MenuList"
import restaurantImg from "../../../images/apresentacao.png"
import { useEffect, useState } from "react"

const Restaurantes = () => {

    const [menu, setMenu] = useState<Product[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setMenu(res))
    }, [])
    return (
        <>
            <Header />
            <img src={restaurantImg} alt='' />
            <MenuList product={menu} />
        </>
    )
}

export default Restaurantes