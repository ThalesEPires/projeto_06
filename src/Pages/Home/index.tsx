import { useEffect, useState } from "react"

import HomeHeader from "../../Container/HomeHeader"
import ProductsList from "../../Container/ProductsList"


const Home = () => {
    const [home, setHome] = useState<Product[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setHome(res))
    }, [])

    return (
        <>
            <HomeHeader />
            <ProductsList product={home} />
        </>
    )
}

export default Home