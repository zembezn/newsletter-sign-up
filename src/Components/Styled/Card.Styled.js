import styled from "styled-components";

//Container
export const Container = styled.div`
width: 900px;
height: 600px;
max-width: 100%;
display: flex;
justify-content: center;
margin: 5% 0;
background-color: hsl(0, 0%, 100%);
border-radius: 35px;

@media (min-width: 0px) and (max-width: 768px) {
    width: 375px;
    height: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    border-radius: 0;
    margin-bottom: 8%;
}
`
//Poster Page
export const ImageContainer = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;

img {
    height: 92%;
}

img.mobile {
    display: none;
}

@media (max-width: 768px) {

    display: flex;
    width: 100%;

    img {
        display: none;
    }

    img.mobile {
        max-width: 100%;
        display: flex;
        content: url(${({ media }) => media });
        justify-content: center;
    }
}
`
//Sign-up Page
export const SignUp = styled.div`
max-width: 100%;
width: 48%;
height: 100%;
display: flex;
margin-left: 3%;
margin-right: 1%;
flex-direction: column;
justify-content: center;
border-top-left-radius: 25px;
border-bottom-left-radius: 25px;

@media (max-width: 768px) {
  width: 100%;
  margin: 0;
}

`
export const Title = styled.h1`
width: 100%;
font-size: 350%;
color: hsl(234, 29%, 20%);
display: flex;
align-items: flex-end;

@media (max-width: 768px) {
    font-size: 250%;
    padding-top: 10%;
    padding-bottom: 3%;
    padding-left: 7%;
}
`
export const Body = styled.div`
display: flex;
flex-direction: column;

@media (max-width: 768px) {
    padding: 0 7%;
    line-height: 150%;
}
`
export const Message = styled.p`
display: flex;
padding: 4% 0;
padding-bottom: 3%;
padding-right: 5%;
line-height: 150%;
`
export const Points = styled.img`
padding-right: 3%;
`
export const List = styled.div`
display: flex;
flex-direction: row;
padding: 2% 0;

@media (max-width: 768px) {
    align-items: flex-start;
}
`
export const Input = styled.div`
display: flex;
flex-direction: column;
padding-top: 8%;
max-width: 90%;

@media (max-width: 768px) {
    padding-left: 6%;
    max-width: 83%;
}
`
export const SubTitles = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 95%;

@media (max-width: 768px) {
    width: 105%;
    justify-content: space-between;
}
`
export const SubInput = styled.div`
display: flex;
`
export const FieldLabel = styled.p`
display: flex;
color: hsl(234, 29%, 20%);
font-size: 70%;
font-weight: bold;
padding-bottom: 12%;
`
export const TextField = styled.input`
width: 90%;
height: 55px;
border-color: hsl(231, 7%, 60%);
border-width: 1px;
border-radius: 8px;
border-style: solid;
padding-left: 5%;
font-size: 100%;
cursor: pointer;

@media (max-width: 768px) {
    width: 100%;
}
`

//Error State
export const Error = styled.input`
width: 90%;
height: 50px;
color: hsl(353, 70%, 60%);
border-color: hsl(353, 70%, 60%);
background-color: hsla(353, 70%, 60%, 0.1);
border-width: 1px;
border-radius: 8px;
border-style: solid;
padding-left: 5%;
cursor: pointer;

@media (max-width: 768px) {
    width: 100%;
}
`
export const ErrorLabel = styled.p`
display: flex;
color: hsl(353, 70%, 60%);
font-size: 70%;
font-weight: bold;
padding-bottom: 8%;
`

//Button
export const StyledButton = styled.div`
border-radius: 8px;
width: 86.5%;
height: 55px;
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

@media (max-width: 768px) {
    margin-bottom: 15%;
    width: 88%;
    margin-left: 6%;
    
}
`
export const Attribute = styled.div`
display: flex;
font-size: 12px;
justify-content: center;
color: hsl(0, 0%, 100%);
margin-bottom: 5%;
`