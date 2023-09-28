import React from 'react'
import { StyledCard, Icon, Header, Statement } from './Styled/Success.Styled'
import Button from './Dismiss.Button'

const Success = () => {
  return (
    
        <StyledCard>
            <Icon src='./images/icon-success.svg' alt='success icon' />

            <Header>Thanks for subscribing!</Header>

            <Statement>
                A confirmation email has been sent to ash@loremcompany.com. 
                Please open it and click the button inside to confirm your subscription.
            </Statement>

            <Button text='Dismiss message' />

        </StyledCard>
   
  )
}

export default Success