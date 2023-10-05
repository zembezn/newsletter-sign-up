import React from 'react'
import PropTypes from "prop-types"
import { StyledButton } from './Styled/Card.Styled'

const Button = ({ text, onClick }) => {
  return (
    <StyledButton type='submit' onClick={onClick} >{text}</StyledButton>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button