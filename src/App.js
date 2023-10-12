import GlobalStyles from "./Components/Styled/GlobalStyles";
import Attribution from "./Components/Attribution";
import { useState } from 'react'
import { StyledCard, SignUp, ImageContainer, Header, Body, Input, List, 
        PosterImage, Icon, Statement, TextField, FieldLabel, Error, ErrorLabel, SubTitles, SubInput } from './Components/Styled/Card.Styled'
import Button from './Components/Button'
// import Success from './Components/Success'

const App = () => {

const showSignUp = useState('') 
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


  setError('')

  if(isValidEmail(email)) {
    console.log('The email is valid')
  } else {
    setError('Email is invalid')
  }

  setEmail('')

}

  return (
    <>
      <GlobalStyles />
      {showSignUp &&      
        <StyledCard>

          <SignUp>           
            <Header>Stay Updated!</Header>
            <Body>
              <Statement>Join 60 000+ product managers receiving monthly updates on:</Statement>

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
              <SubTitles>
                <SubInput>
                  <FieldLabel>Email address</FieldLabel>
                </SubInput>
                <SubInput>
                  {error && <ErrorLabel>Valid email required</ErrorLabel> }
                </SubInput>
              </SubTitles>
              
              {error ? (<Error type='email' placeholder=""  />)
                    : (<TextField type='email' id='email' placeholder='email@company.com' value={email} onChange={handleChange} />)}
            </Input>

            <Button type='submit' text='Subscribe to monthly newsletter' onClick={onSubmit}  />

          </SignUp>

          <ImageContainer>
            <PosterImage src='./images/illustration-sign-up-desktop.svg' alt='content psoter' />
          </ImageContainer>

        </StyledCard> 
      }

       

      <Attribution />
      
    </>
  );
}

export default App;
