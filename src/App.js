import GlobalStyles from "./Components/Styled/GlobalStyles";
import { Attribute } from './Components/Styled/Card.Styled'
import { useState } from 'react'
import { SuccessContainer, Icon, Header, Statement, StyledCard } from './Components/Styled/Success.Styled'
import DismissButton from './Components/Dismiss.Button';
import { Container, SignUp, ImageContainer, Title, Body, Input, List, 
        PosterImage, Points, Message, TextField, FieldLabel, Error, ErrorLabel, SubTitles, SubInput } from './Components/Styled/Card.Styled'
import Button from './Components/Button'

const App = () => {

const [email, setEmail] = useState('')
const [error, setError] = useState(null)
const [successful, setSuccessful] = useState(false) 

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const handleChange = (e) => {
  setEmail(e.target.value);
};

const onSubmit = (e) => {
  e.preventDefault()

  setError('')
  setSuccessful(true)

  if(isValidEmail(email)) {
    console.log('The email is valid')
  } else {
    setError('Email is invalid')
  }

  setEmail('')
}

const Dismiss = () => {
  setSuccessful(false)
} 

  return (
    <>
      <GlobalStyles />
      {successful === !error ?

          (<SuccessContainer>
            <StyledCard>
              <Icon src='./images/icon-success.svg' alt='success icon' />

              <Header>Thanks for subscribing!</Header>
              
              <Statement>
                <p>
                  A confirmation email has been sent to <b>ash@loremcompany.com</b>. 
                  Please open it and click the button inside to confirm your subscription.
                </p>
              </Statement>

              <DismissButton text='Dismiss message' onClick={Dismiss} />
            </StyledCard>
           </SuccessContainer>)

        : (<Container>
            <SignUp>           
              <Title>Stay Updated!</Title>
              <Body>
                <Message>Join 60 000+ product managers receiving monthly updates on:</Message>

                <List>
                  <Points src='./images/icon-list.svg' alt='icon' />
                  <p>Product discovery and building what matters</p>
                </List>
                <List>
                  <Points src='./images/icon-list.svg' alt='icon' />
                  <p>Measuring to ensure updates are a success</p>
                </List>
                <List>
                  <Points src='./images/icon-list.svg' alt='icon' />
                  <p>And much more!</p>
                </List>
              </Body>

              <Input onSubmit={onSubmit} >
                <SubTitles>
                  <SubInput>
                    <FieldLabel>Email address</FieldLabel>
                  </SubInput>
                  <SubInput>
                    {error && <ErrorLabel>Valid email required</ErrorLabel> }
                  </SubInput>
                </SubTitles>
                
                {error ? (<Error type='email' id="error" placeholder="" value={email} onChange={handleChange} autoComplete="on" />)
                      : (<TextField type='email' id='email' placeholder='email@company.com' value={email} onChange={handleChange} autoComplete="on" />)}
              </Input>

              <Button type='submit' text='Subscribe to monthly newsletter' onClick={onSubmit}  />

            </SignUp>

            <ImageContainer>
              <PosterImage src='./images/illustration-sign-up-desktop.svg' alt='content psoter' />
            </ImageContainer>

          </Container> )
        } 

          <Attribute>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/zembezn?tab=repositories">Kanya Zembe</a>.
          </Attribute>           
    </>
   );
  }

export default App;
