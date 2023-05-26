import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Promo from "./promo";

const NavHeader = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding-top: 1rem;
padding-bottom: 1rem;
`

const Search = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: space-around;
`

const Items = styled.div`
display: flex;
align-items: center;
width: 50%;
`

const Image = styled.img`
  height: 50px;
`

const Header = () => {
  return (<header>

    <NavHeader>
      <Search>
        <Items>
          <Image src="./img/icon.png" />
          <h1><span style={{ color: "#2A7AE4" }}>Alura</span>Geek</h1>
        </Items>
        <Items>
          <TextField fullWidth id="filled-basic" label="¿Qué deseas buscar?" variant="outlined" />
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        </Items>
      </Search>
      <Button variant="contained" size="large">Log In</Button>
    </NavHeader >

    <Promo>

    </Promo>
  </header>

  )
}

export default Header;