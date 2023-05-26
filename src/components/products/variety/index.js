import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Title = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 15%;
padding-right: 15%;
padding-top: 2.5rem;
`

const Products = styled.div`
padding-left: 15%;
padding-right: 15%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Card = styled.div`
`

const Precio = styled.p`
font-weight: bold;
`
const VerProducto = styled.p`
display: flex;
align-items: center;
font-weight: bold;
color: #2A7AE4;
`

const ProductList = [
  { id: 1, img: "./img/atari-shirt.png", name: "Atari Shirt", price: "$20.00", alt: "Atari Shirt" },
  { id: 2, img: "./img/clock.png", name: "Retro Clock", price: "$15.00", alt: "Retro Clock" },
  { id: 3, img: "./img/nes-shirt.png", name: "NES Shirt", price: "$20.00", alt: "Nes Shirt" },
  { id: 4, img: "./img/pikachu.png", name: "Pikachu Constume", price: "$120.00", alt: "Pikachu Constume" },
  { id: 5, img: "./img/sonic.png", name: "Sonic Figure", price: "$40.00", alt: "Sonic Figure" },
  { id: 6, img: "./img/vr.png", name: "VR", price: "$75.00", alt: "VR" },
]

const Variety = () => {
  return <div>
    <Title>
      <h1>Diversos</h1>
      <VerProducto>Ver todo <ArrowForwardIcon /></VerProducto>
    </Title>
    <Products>
      {ProductList.map(({ id, name, img, price }) =>
        <Card id={id}>
          <img src={img} />
          <p>{name}</p>
          <Precio >{price}</Precio>
          <VerProducto>Ver producto</VerProducto>
        </Card>
      )}
    </Products>
  </div>
}

export default Variety;