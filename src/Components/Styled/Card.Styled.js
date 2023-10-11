import styled from "styled-components";

//Container
export const StyledCard = styled.div`
width: 900px;
height: 600px;
max-width: 100%;
display: flex;
margin: 5% auto;
background-color: hsl(0, 0%, 100%);
border-radius: 25px;
`

//Poster Page
export const ImageContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
`
export const PosterImage = styled.img`
max-width: 100%;
height: 94%;
display: flex;
`

//Sign-up Page
export const SignUp = styled.div`
max-width: 100%;
width: 48%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 7%;
border-top-left-radius: 25px;
border-bottom-left-radius: 25px;
`
export const Header = styled.h1`
width: 100%;
font-size: 350%;
color: hsl(234, 29%, 20%);
display: flex;
align-items: flex-end;
`
export const Body = styled.div`
display: flex;
flex-direction: column;
`
export const Statement = styled.p`
display: flex;
padding: 5% 0;
`
export const Icon = styled.img`
padding-right: 3%;
`
export const List = styled.div`
display: flex;
flex-direction: row;
padding: 2% 0;
`
export const Input = styled.div`
display: flex;
flex-direction: column;
padding-top: 8%;
max-width: 90%;
`
export const SubTitles = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const SubInput = styled.div`
display: flex;
`
export const FieldLabel = styled.label`
display: flex;
color: hsl(234, 29%, 20%);
font-size: 80%;
font-weight: bold;
padding-bottom: 8%;
`
export const TextField = styled.input`
width: 95%;
height: 50px;
border-color: hsl(231, 7%, 60%);
border-width: 1px;
border-radius: 8px;
border-style: solid;
padding-left: 5%;
cursor: pointer;
`

//Error State
export const Error = styled.input`
width: 95%;
height: 50px;
border-color: hsl(353, 70%, 60%);
background-color: hsla(353, 70%, 60%, 0.1);
border-width: 1px;
border-radius: 8px;
border-style: solid;
padding-left: 5%;
cursor: pointer;
`
export const ErrorLabel = styled.label`
display: flex;
color: hsl(353, 70%, 60%);
font-size: 80%;
font-weight: bold;
padding-bottom: 8%;
`

//Button
export const StyledButton = styled.div`
border-radius: 8px;
width: 91%;
height: 50px;
cursor: pointer;
background-color: hsl(234, 29%, 20%);
color: hsl(0, 0%, 100%);
display: flex;
justify-content: center;
align-items: center;
margin-top: 6%;

&:hover {
background: linear-gradient( to right, hsl(347, 95%, 60%), hsl(4, 100%, 67%));
}
`
export const Attribute = styled.div`
display: flex;
justify-content: center;
margin: 5%;
color: hsl(0, 0%, 100%);
`