import React from 'react';
import { AppBar , Toolbar , styled } from '@mui/material';
const Container = styled (AppBar)`
    background : #060606;
    height : 9vh;
    position : static;
`
const Header = () => {
    const logo = 'https://www.airfleet.co/blog/content/images/2022/04/GTM.png'
  return (
    <Container>
        <Toolbar>
            <img src={logo} alt='logo' style={{width : 50}}/>
        </Toolbar>
    </Container>
  )
}

export default Header;