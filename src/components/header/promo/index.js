import styled from "styled-components";
import Button from '@mui/material/Button';

const PromoHeader = styled.section`
  background-image: url("./img/mushroom.jpg");
  background-size: 100%;
  background-position: bottom;
  padding: 15% 0 5% 15%;
`

const PromoTitle = styled.h1`
font-size: 52px;
color: #fff;
text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
font-weight: bold;
`
const PromoTxt = styled.p`
font-size: 22px;
`

const Promo = () => {
  return <PromoHeader>
    <PromoTitle>Febrero Promocional</PromoTitle>
    <PromoTxt>Productos seleccionados con 33% de descuento</PromoTxt>
    <Button variant="contained">Ver Consolas</Button>
  </PromoHeader>

}

export default Promo;