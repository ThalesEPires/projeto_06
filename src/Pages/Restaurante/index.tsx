import Header from "../../Container/Header"
import MenuList from "../../Container/MenuList"
import { useEffect, useState } from "react"
import {  Cardapio } from "../../types"
import { useParams } from "react-router-dom"
import Banner from "../../Container/Banner"

type Props = {
    capa: string
}

type ProductParams = {
    id: string
}

const Restaurantes = ({ capa }: Props) => {
    const { id } = useParams() as ProductParams
    const [menu, setMenu] = useState<Cardapio[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setMenu(res.cardapio))
    }, [id])
    return (
        <>
            <Header />
            <Banner>
                    <img src={capa}  />
            </Banner>
            <MenuList produtos={menu} />
        </>
    )
}

export default Restaurantes