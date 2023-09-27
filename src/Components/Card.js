import React from 'react'
import { StyledCard, SignUp, ImageContainer, Header, Body, Input, List, 
        PosterImage, Icon, Statement, TextField, FieldLabel } from './Styled/Card.Styled'
import Button from './Button'

const Card = () => {
  return (
    <>
      <StyledCard>

        <SignUp>
          
          <Header>Stay Updated!</Header>
          <Body>
            <Statement>
              Join 60 000+ product managers receiving monthly updates on:
            </Statement>

            <List>
              <Icon src='./images/icon-list.svg' alt='icon' />
              <p>Product discovery and building what matters</p>
            </List>
            <List>
              <Icon src='./images/icon-list.svg' alt='icon' />
              <p>Measuring to ensure updates are a success</p>
            </List>
            <List>
              <Icon src='./images/icon-list.svg' alt='icon' />
              <p>And much more!</p>
            </List>
          </Body>
          <Input>
            <FieldLabel>Email address</FieldLabel>
            <TextField type='text' placeholder='email@company.com' value={Text} />
          </Input>

          <Button text='Subscribe to monthly newsletter' />

        </SignUp>

        <ImageContainer>
          <PosterImage src='./images/illustration-sign-up-desktop.svg' alt='content psoter' />
        </ImageContainer>

      </StyledCard>
    </>
  )
}

export default Card