import React from 'react'
import { StyledCard, SignUp, ImageContainer, Header, Body, Input, Image, List } from './Styled/Card.Styled'

const Card = () => {
  return (
    <>
    <StyledCard>
      <SignUp>
        <Header>Stay Updated!</Header>
        <Body>Join 60 000+ product managers receiving monthly updates on:
        <List>
          <img src='./images/icon-list.svg' alt='icon' />
          <p>Product discovery and building what matters</p>
        </List>
        <List>
          <img src='./images/icon-list.svg' alt='icon' />
          <p>Measuring to ensure updates are a success</p>
        </List>
        <List>
          <img src='./images/icon-list.svg' alt='icon' />
          <p>And much more!</p>
        </List>
        </Body>
        <Input></Input>
      </SignUp>
      <ImageContainer>
        <Image src='./images/illustration-sign-up-desktop.svg' alt='content psoter' />
      </ImageContainer>
    </StyledCard>
    </>
  )
}

export default Card