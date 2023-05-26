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
  { id: 1, img: "./img/mug.png", name: "Mug", price: "$60.00" },
  { id: 2, img: "./img/grogu.png", name: "Grogu", price: "$90.00" },
  { id: 3, img: "./img/kylo.png", name: "Kylo Ren", price: "$40.00" },
  { id: 4, img: "./img/lego-heads.png", name: "Lego Heads", price: "$60.00" },
  { id: 5, img: "./img/stoorm.png", name: "Storm Tropper", price: "$70.00" },
  { id: 6, img: "./img/yoda.png", name: "Yoda", price: "$75.00" },
]

const StarWars = () => {
  return <div>
    <Title>
      <h1>Star Wars</h1>
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

export default StarWars;