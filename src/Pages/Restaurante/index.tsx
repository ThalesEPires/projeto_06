import Header from "../../Container/Header"
import MenuList from "../../Container/MenuList"
import { useEffect, useState } from "react"
import { Api, Cardapio } from "../../types"
import { useParams } from "react-router-dom"
import BannerList from "../../Container/BannerList"

type ProductParams = {
    id: string
}

const Restaurantes = () => {
    const { id } = useParams() as ProductParams
    const [menu, setMenu] = useState<Cardapio[]>([])
    const [capa, setCapa] = useState<Api[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setMenu(res.cardapio))
    }, [id])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/efood/bella_tavola_italiana/capa.jpeg`)
            .then((res) => res.json())
            .then((res) => setCapa(res.capa))
    }, [capa])

    return (
        <>
            <Header />
            <BannerList banner={capa}/>
            <MenuList produtos={menu} />
        </>
    )
}

export default Restaurantes