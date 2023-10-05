import GlobalStyles from "./Components/Styled/GlobalStyles";
import Attribution from "./Components/Attribution";
import Success from "./Components/Success";
import { useState } from 'react'
import { StyledCard, SignUp, ImageContainer, Header, Body, Input, List, 
        PosterImage, Icon, Statement, TextField, FieldLabel, Error, ErrorLabel } from './Components/Styled/Card.Styled'
import Button from './Components/Button'

const App = () => {

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

  setEmail('')

}

//Add Email
const addEmail = async () => {
  const res = await fetch('http://localhost:5000/emails', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(),
  })

  const data = await res.json()

  setEmail([...email, data])

}

  return (
    <>
      <GlobalStyles />
      
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
            <ErrorLabel>Valid email required</ErrorLabel>

            {error ? (<Error type='text' />)
                   : (<TextField type='text' placeholder='email@company.com' value={email} onChange={handleChange} onAdd={addEmail} />)}
          </Input>

          <Button text='Subscribe to monthly newsletter' onClick={onSubmit}  />

        </SignUp>

        <ImageContainer>
          <PosterImage src='./images/illustration-sign-up-desktop.svg' alt='content psoter' />
        </ImageContainer>

      </StyledCard>

    </>

      <Attribution />
      <Success />
    </>
  );
}

export default App;
