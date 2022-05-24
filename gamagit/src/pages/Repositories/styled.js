import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
background: #ddd;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;


export const Content = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
`

export const Input = styled.input`
border: 1px solid #green;
height: 0 .5rem;
border-radius: .25rem 0 0 .25rem;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`

export const Button = styled.button`
border: 1px solid #000;
height: 1.5rem;
background: #000;
color: #fff;
border-radius: 0 .25rem .25rem 0;

&:focus,
&:active {
    outline: none;
    box-shadow: none;
}
`


export const Title = styled.h1`
text-aling: center;
font-size: 2rem;
font-family: sans-serif;
color: #333;
`

export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
font-family: sans-serif;
`

export const ListItem = styled.li`
margin: .5rem 0;
background: #000;
color: #fff;
padding: .5rem;
`

export const LinkHome = styled(Link)`
display: block;
width: 5em;
padding: 0.5em;
text-align: center;
margin: 2em auto;
background: .5em 0;
background-color: #000;
color: #fff;
text-decoration: none;
border-radius 0.8em;
`;

export const ErrorMsg = styled.span`
display: block;
font-size: 0.65rem;
color: red;
font-weight: 500;
`;