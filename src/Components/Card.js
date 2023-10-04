import React from 'react'
import { useState } from 'react'
import { StyledCard, SignUp, ImageContainer, Header, Body, Input, List, 
        PosterImage, Icon, Statement, TextField, FieldLabel, Error, ErrorLabel } from './Styled/Card.Styled'
import Button from './Button'


const Card = ({ onAdd }) => {

const [email, setEmail] = useState('')
const [error, setError] = useState(null)

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const handleChange = (e) => {
  setEmail(e.target.value);
};

const onSubmit = (e) => {
  e.preventDefault()

  setError(null);

  if(isValidEmail(email)) {
    console.log('The email is valid')
  } else {
    setError('Email is invalid')
  }

  onAdd({ email })

  setEmail('')

}
 
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

          <Input onSubmit={onSubmit} >
            <FieldLabel>Email address</FieldLabel>
            <TextField type='text' placeholder='email@company.com' value={email} onChange={handleChange} />
            {/* <ErrorLabel>Valid email required</ErrorLabel>
            <Error type='text' placeholder='error' /> */}
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