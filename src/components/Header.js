import React from 'react'
import styled from "styled-components"
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom"

function Header() {
  return (
    <Container>
        <Logo>
            <Link to="/">
               <img src="img/logo.png"/> 
            </Link>
        </Logo>
        <HeaderOptionAddress>
            <Map/>
            <OptionLine>
                <OptionLineOne>Deliver to</OptionLineOne>
                <OptionLineTwo>Ethiopia</OptionLineTwo>
            </OptionLine>
        </HeaderOptionAddress>
        <HeaderSearch>
            <HeaderSearchInput type='text' />
            <HeaderSearchIconContainer>
                <HeaderSearchIcon/>
            </HeaderSearchIconContainer>
        </HeaderSearch>
        <HeaderNavItem>
            <HeaderOption>
                <OptionLineOne>Hello, Sign in</OptionLineOne>
                <OptionLineTwo>Account & Lists</OptionLineTwo>
            </HeaderOption>
            <HeaderOption>
                <OptionLineOne>Return</OptionLineOne>
                <OptionLineTwo>& Orders</OptionLineTwo>
            </HeaderOption>
            
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon/>
                        <CartCount>Cart</CartCount>
                    </Link>
                </HeaderOptionCart>
        </HeaderNavItem>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background: #0F1111;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    
    img {
        width: 100px;
        padding: 0 20px;
    }
`
const HeaderOptionAddress = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
`
const OptionLine = styled.div`
    
`
const OptionLineOne = styled.div`
    font-weight: 500;
    color: gray;
    font-size: .7em;
    line-height: .8em;
`
const OptionLineTwo = styled.div`
    font-weight: 700;
    color: white;
    font-size: .9em;
    padding-left: .2em;
`
const Map = styled(RoomOutlinedIcon)`
    
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: .3em;
    overflow: hidden;
    margin-left: 10px;
    background: white;
    margin-right: 2em;

    :focus-within {
        box-shadow: 0 0 0 3px #febd69;
    }
`
const HeaderSearchInput = styled.input`
    border: 0;
    flex-grow: 1;
    
    :focus {
        outline: none;
    }
`
const HeaderSearchIcon = styled(SearchIcon)`
    
`
const HeaderSearchIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    background-color: #febd69;
    color: black;
`
const HeaderOption = styled.div`
    padding: 10px 20px;
`
const ShoppingBasketIcon = styled(AddShoppingCartIcon)`
    
`
const HeaderOptionCart = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        gap: .2em;
        color: white;
        text-decoration: none;
    }
`
const CartCount =  styled.div`
    font-weight: bold;
    
`
const HeaderNavItem = styled.div`
    display: flex;
    margin-right: 2em;
    text-align: left;
`
