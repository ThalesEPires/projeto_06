import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import * as S from "./styles"
import { Api } from "../../types";

type Props = {
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
}

type ProductParams = {
    id: string
}

const Restaurante = ({ foto, preco, nome, descricao, porcao }: Props) => {
    const { id } = useParams() as ProductParams
    const [ restaurant, setRestaurant] = useState<Api>()

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setRestaurant(res))
    }, [id])

    
    const navigate = useNavigate()
    
    const [modalEstaAberto, setModalEstaAberto] = useState(false)
    
    const goToCart = () => {
        navigate('/cart')
    }
    
    if (!restaurant ) {
        return <h3>Carregando...</h3>
    }
    return (
        <>
            <ul>
                <S.ProductCard key={id} onClick={() => setModalEstaAberto(true)}>
                    <img src={foto} alt={nome}  />
                    <h5>{nome}</h5>
                    <p>{descricao}</p>
                    <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                </S.ProductCard> 
            </ul> 
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={foto} alt={nome} />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>{nome}</h4>
                        <p>{descricao}<br /> <br /> <br /></p>
                        <p>{`Serve: ${porcao}`}</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho  - {preco}</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante