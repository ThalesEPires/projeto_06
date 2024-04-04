import { Overlay } from "../../Container/Carrinho/styles"
import Restaurantes from "../Restaurante"
import { Button, CartContainer } from "./styles"

const Confirmation = () => {
    return (
        <>  
            <Restaurantes />
            <Overlay />
            <CartContainer>
            <h3>Pedido realizado</h3>
            <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. <br /> <br />
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br /> <br />
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição. <br /> <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </p>
            <Button type="button">Concluir</Button>
        </CartContainer>
        </>
    )
}

export default Confirmation