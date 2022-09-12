import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.section`
width:100vw;
height:100vh;
background-color:#FF5630;
display: flex;
justify-content:center;
align-items:center;
`

const BoxLink = styled.div`
width:60vw;
height:40vh;
border: solid black;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
justify-content:space-evenly;
font-family: cursive;

a{
  text-decoration: none;
  color: wheat;
}
`



export default function Home() {
  return (
    <Container>
      <BoxLink>
      <h1>Home</h1>
      <Link to="/dogpage">
        <p>-Dog Page-</p>
      </Link>
      </BoxLink>      
    </Container>
  );
}
