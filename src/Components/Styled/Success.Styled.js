import styled from "styled-components";

//Container
export const StyledCard = styled.div`
width: 360px;
height: 400px;
max-width: 100%;
display: flex;
flex-direction: column;
background-color: hsl(0, 0%, 100%);
border-radius: 25px;
margin: auto;
padding: 6% 8%;
`
export const Icon = styled.img`
width: 18%;
height: 18%;
padding-bottom: 8%;
`
export const Header = styled.h1`
font-size: 350%;
color: hsl(234, 29%, 20%);
display: flex;
`
export const Statement = styled.div`
display: flex;
padding: 7% 0;
line-height: 140%;
`

//Button
export const StyledButton = styled.div`
border-radius: 8px;
width: 100%;
height: 100%;
cursor: pointer;
background-color: hsl(234, 29%, 20%);
color: hsl(0, 0%, 100%);
display: flex;
justify-content: center;
align-items: center;

&:hover {
background: linear-gradient( to right, hsl(347, 95%, 60%), hsl(4, 100%, 67%));
}
`