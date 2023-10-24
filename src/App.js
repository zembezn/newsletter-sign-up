import GlobalStyles from "./Components/Styled/GlobalStyles"
import { useState, useRef } from 'react'
import { Container, SignUp, ImageContainer, Title, Body, Input, List, Points, Message, TextField, FieldLabel, Error, ErrorLabel, SubTitles, SubInput } from './Components/Styled/Card.Styled'
import { SuccessContainer, Icon, Header, Statement, StyledCard, ButtonContainer } from './Components/Styled/Success.Styled'
import { Attribute } from './Components/Styled/Card.Styled'
import Button from './Components/Button'
import DismissButton from './Components/Dismiss.Button';
import icon from './images/icon-list.svg'
import successIcon from './images/icon-success.svg'
import desktopImage from './images/illustration-sign-up-desktop.svg'
import mobileImage from './images/illustration-sign-up-mobile.svg'

const App = () => {

const [email, setEmail] = useState('')
const [error, setError] = useState(null)
const [successful, setSuccessful] = useState(false) 
const refEmail = useRef(null)

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const currentEmailValue = () => {
   return refEmail.current.value;
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
              <Icon src={successIcon} alt='success icon' />

              <Header>Thanks for subscribing!</Header>
              
              <Statement>
                <p>
                  A confirmation email has been sent to <span><b>{currentEmailValue()}</b></span>. 
                  Please open it and click the button inside to confirm your subscription.
                </p>
              </Statement>
            <ButtonContainer>
              <DismissButton text='Dismiss message' onClick={Dismiss} />
            </ButtonContainer>
            </StyledCard>
           </SuccessContainer>)

        : (<Container>
            <SignUp>           
              <Title>Stay updated!</Title>
              <Body>
                <Message>Join 60 000+ product managers receiving monthly updates on:</Message>

                <List>
                  <Points src={icon} alt='icon' />
                  <p>Product discovery and building what matters</p>
                </List>
                <List>
                  <Points src={icon} alt='icon' />
                  <p>Measuring to ensure updates are a success</p>
                </List>
                <List>
                  <Points src={icon} alt='icon' />
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
                
                {error ? (<Error type='email' id="error" placeholder="" value={email} onChange={handleChange} ref={refEmail} autoComplete="on" />)
                      : (<TextField type='email' id='email' placeholder='email@company.com' value={email} onChange={handleChange} ref={refEmail} autoComplete="on" />)}
              </Input>

              <Button type='submit' text='Subscribe to monthly newsletter' onClick={onSubmit}  />

            </SignUp>

            <ImageContainer media={mobileImage} >
              <img src={desktopImage} alt='desktop poster' />
              <img className="mobile" alt="mobile poster" />
            </ImageContainer>

          </Container> 
        )} 

          <Attribute>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/zembezn?tab=repositories">Kanya Zembe</a>.
          </Attribute>           
    </>
   );
  }

export default App;
