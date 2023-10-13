import React from 'react'
import PropTypes from "prop-types"
import { StyledButton } from './Styled/Success.Styled'

const DismissButton = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick} >{text}</StyledButton>
  )
}

DismissButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default DismissButton