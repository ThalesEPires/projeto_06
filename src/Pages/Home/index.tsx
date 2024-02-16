import { useEffect, useState } from "react"

import HomeHeader from "../../Container/HomeHeader"
import ProductsList from "../../Container/ProductsList"

export type Restaurant = {
    id: number
    title: string
    highlighted: boolean
    type: string[]
    note: string
    description: string
    cover: string
    info: {
        image: string
        preco: string
        id: number
        name: string
        description: string
        porcao: string
    }
}

const Home = () => {
    const [home, setHome] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setHome(res))
    }, [])

    return (
        <>
            <HomeHeader />
            <ProductsList restaurant={home} />
        </>
    )
}

export default Home