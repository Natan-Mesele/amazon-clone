import React from 'react'
import styled from "styled-components"

function Product() {
  return (
    <Container>
        <Title>
          Gaming accessories
        </Title>
        <Price>
          $30
        </Price>
        <Rating>
          ⭐⭐⭐⭐⭐
        </Rating>
        <Image src="img/tab.jpg"/>
        <ActionSection>
          <AddToCartButton>
            Add to Cart
          </AddToCartButton>
        </ActionSection>
        
    </Container>
  )
}

export default Product

const Container = styled.div`
  background: white;
  z-index: 100;
  max-height: 400px;
  flex: 1;
  padding: 20px;
  margin: 20px; 
  text-align: left;
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-size: 1em;
  font-weight: 500;
`
const Price = styled.span`
  font-weight: 500;
  margin-top: 10px;
`

const Rating = styled.div`
  margin: .6em 0;
`
const AddToCartButton = styled.button`
  width: 100px;
  height: 2em;
  color: black;
  background: #f0c14b;
  border: 2px soid #a88734;
  border-radius: .5em;
  margin-top: 1em;
  cursor: pointer;
`
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`
const ActionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`