import styled from "styled-components";

//Container
export const SuccessContainer = styled.div`
width: 500px;
height: 530px;
max-width: 100%;
display: flex;
background-color: hsl(0, 0%, 100%);
border-radius: 25px;
margin: 25% auto;

@media (min-width: 480px) and (max-width: 1284px) {
    width: 375px;
    height: 680px;
    border-radius: 0;
    margin: 0; 
    margin-bottom: 10%;
}
`
export const StyledCard = styled.div`
width: 360px;
height: 440px;
display: flex;
margin: auto;
flex-direction: column;

@media (min-width: 480px) and (max-width: 1284px) {
    margin-top: 40%;
    margin-left: 5%;
    margin-right: 5%;
}
` 
export const Icon = styled.img`
width: 18%;
height: 18%;
padding-bottom: 8%;

@media (min-width: 480px) and (max-width: 1284px) {
    width: 18%;
    height: 18%;
}
`
export const Header = styled.h1`
font-size: 350%;
color: hsl(234, 29%, 20%);
display: flex;
@media (max-width: 375px) {
    font-size: 250%;
}
`
export const Statement = styled.div`
display: flex;
padding-top: 5%;
padding-bottom: 10%;
line-height: 160%;

@media (min-width: 480px) and (max-width: 1284px) {
    padding-bottom: 40%;
}
`

//Button
export const StyledButton = styled.div`
border-radius: 8px;
width: 100%;
height: 60px;
cursor: pointer;
background-color: hsl(234, 29%, 20%);
color: hsl(0, 0%, 100%);
display: flex;
justify-content: center;
align-items: center;

&:hover {
background: linear-gradient( to right, hsl(347, 95%, 60%), hsl(4, 100%, 67%));
}

@media (min-width: 480px) and (max-width: 1284px) {
    width: 100%;
    height: 55px;
}
`
export const ButtonContainer = styled.div`
    display: flex;
`