import { useEffect, useState } from "react"
import { Cardapio } from "../../types"
import CartList from "../../Container/CartList"

const Cart = () => {
    const [cart, setCart] = useState<Cardapio[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
            .then((res) => res.json())
            .then((res) => setCart(res.cardapio))
    }, [])
    return (
        <>
            <CartList cart={cart} />
        </>
    )
}

export default Cart