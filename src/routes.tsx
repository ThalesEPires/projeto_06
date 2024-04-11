import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Restaurantes from "./Pages/Restaurante"
import Cart from "./Pages/Cart"
import DeliveryAddress from "./Pages/Entrega"
import Checkout from "./Pages/Checkout"
import Confirmation from "./Pages/Confirmation"

const Rotas = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantes/:id" element={<Restaurantes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/entrega" element={<DeliveryAddress />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
)
export default Rotas