import Header from "../../Container/Header"
import MenuList from "../../Container/MenuList"
import { useEffect, useState } from "react"
import {  Cardapio } from "../../types"
import { useParams } from "react-router-dom"

type ProductParams = {
    id: string
}

const Restaurantes = () => {
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
            <MenuList produtos={menu} />
        </>
    )
}

export default Restaurantes