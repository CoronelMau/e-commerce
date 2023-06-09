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
  { id: 1, img: "./img/gameboy.png", name: "Gameboy", price: "$40.00", alt: "Gameboy" },
  { id: 2, img: "./img/nes.png", name: "NES", price: "$75.00", alt: "Nintendo Entertainment System" },
  { id: 3, img: "./img/ps5.png", name: "PlayStation5", price: "$400.00", alt: "PlayStation 5" },
  { id: 4, img: "./img/switch-controllers.png", name: "Switch Controllers", price: "$80.00", alt: "Nintendo Switch Controllers" },
  { id: 5, img: "./img/xbox.png", name: "X-Box series X", price: "$400.00", alt: "X-Box series X" },
  { id: 6, img: "./img/xbox-controller.png", name: "X-Box Controller", price: "$75.00", alt: "X-Box Controller" },
]

const Consoles = () => {
  return <div>
    <Title>
      <h1>Consolas</h1>
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

export default Consoles;