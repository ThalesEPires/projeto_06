// import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import RestaurantImg from "../../../images/apresentacao.png"
import pizza from "../../../images/pizza1.png"

import * as S from "./styles"
import { useState } from "react"

const Restaurante = () => {
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const [modalEstaAberto, setModalEstaAberto] = useState(false)

    const goToCart = () => {
        navigate('/cart')
    }

    // const openCart = () => {
    //     dispatch(open())
    // }

    return (
        <>
            <img src={RestaurantImg} alt="Imagem do restaurante" />
            <div>
                <S.ProductsList>
                    <S.ProductCard onClick={() => setModalEstaAberto(true)}>
                        <img src={pizza} alt="Pizza Marguerita"  />
                        <h5>Pizza Marguerita</h5>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                    </S.ProductCard>
                    <S.ProductCard onClick={() => setModalEstaAberto(true)} >
                        <img src={pizza} alt="Pizza Marguerita"/>
                        <h5>Pizza Marguerita</h5>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                    </S.ProductCard>
                    <S.ProductCard onClick={() => setModalEstaAberto(true)} >
                        <img src={pizza} alt="Pizza Marguerita" />
                        <h5>Pizza Marguerita</h5>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                    </S.ProductCard>
                    <S.ProductCard onClick={() => setModalEstaAberto(true)} >
                        <img src={pizza} alt="Pizza Marguerita" />
                        <h5>Pizza Marguerita</h5>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                    </S.ProductCard>
                    <S.ProductCard onClick={() => setModalEstaAberto(true)} >
                        <img src={pizza} alt="Pizza Marguerita"/>
                        <h5>Pizza Marguerita</h5>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                    </S.ProductCard>
                    <S.ProductCard onClick={() => setModalEstaAberto(true)} >
                        <img src={pizza} alt="Pizza Marguerita" />
                        <h5>Pizza Marguerita</h5>
                        <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho</button>
                    </S.ProductCard>
                </S.ProductsList>
            </div>
            <S.Modal className={modalEstaAberto ? 'is-visible' : ''}>
                <S.ModalContent className="container">
                    <img src={pizza} alt="Pizza Marguerita" />
                    <button className="close-icon" type="button" onClick={() => setModalEstaAberto(false)}/>
                    <div>
                        <h4>Pizza Marguerita</h4>
                        <p>A pizza Marguerita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.<br /> <br /> <br />Serve: de 2 a 3 pessoas</p>
                        <button type="button" onClick={goToCart}>Adicionar ao carrinho  - R$ 60,90</button>
                    </div>
                </S.ModalContent>
                <div className="overlay" onClick={() => setModalEstaAberto(false)}></div>
            </S.Modal>
        </>
)}

export default Restaurante