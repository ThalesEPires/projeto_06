import Header from "../../Container/Header"
import MenuList from "../../Container/MenuList"
import { useEffect, useState } from "react"
import { Api } from "../../types"
import { useParams } from "react-router-dom"

type ProductParams = {
    id: string
}

const Restaurantes = () => {
    const { id } = useParams() as ProductParams
    const [menu, setMenu] = useState<Api[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurante/${id}`)
            .then((res) => res.json())
            .then((res) => setMenu(res))
    }, [id])
    return (
        <>
            <Header />
            <MenuList produto={menu} />
        </>
    )
}

export default Restaurantes