import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.section`
width:100vw;
height:100vh;
background-color:skyblue;
display: flex;
justify-content:center;
align-items:center;

`

const BoxDog = styled.div`
width:80vw;
height:80vh;
border: solid black;
border-radius: 2em;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
justify-content:space-evenly;
font-family: cursive;

a{
  text-decoration: none;
  color: white;
}
@media(max-width:430px){
  height:50vh;
  
}
`

const Button = styled.button`
border: none;
cursor: pointer;
padding: 1em;
border-radius: 2em;
font-family: cursive;
:hover{
  background-color:pink;
}

`

const Img = styled.img`
width: 50vw;
height: 30vh;
border-radius: 1em;
@media(max-width:430px){
  width: 40vw;
  height: 20vh;
}
`


export default function Dog() {

  const [dog, setDog] = useState()
  const [img, setImg] = useState(false)

const API = 'https://dog.ceo/api/breeds/image/random'
 
function getDog(){
  axios.get(API).then((response)=>{
    setDog(response.data.message);
    setImg(true)
  })
}

  return (
    <Container>
      <BoxDog>
      <h1>Dog Page</h1>
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>Página anti stress</p>
   <Button onClick={() =>{getDog()}}>Clique aqui</Button>
   
   {img && <Img src={dog} alt='Foto de doguinho' />}
   </BoxDog>
    </Container>
  );
}
