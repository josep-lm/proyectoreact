import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
function Holamundo(){
  return <h1>Hola Mundo</h1>

}

function Bola(){
  return <div className="rodona"></div>
}

function Cuadrado(){
  return <div className="cuadrado"></div>
}

function Separador(){
  return <hr className="separador"></hr>

}
function Separadoruno(){
  return <hr className="separadoruno"></hr>

}

function Titulo(props){
  return <h1>{props.texto}</h1>

}
function Mosca(props){
  return <div>
    <FontAwesomeIcon icon={faCrow} className="mosca" />
  </div> 
}

function Capital(props){
  return <div className="lletra">
    <h1 className="lletragran">{props.nom[0]}</h1>
    <p className="lletranormal">{props.nom}</p>
    
  </div>

}
function Gatos(props){
  return <div>
    <img src={"http://placekitten.com/"+props.ancho + "/"+ props.alto} alt="Gato"></img>
    <p className="gatos">{props.nombre}</p>
    </div>

}

function Bingo(props){
  return <div className="rodona">
    <p className="bingo">{props.textbola}</p>


  </div>
}

function App() {
  return (
    <div>
    <Holamundo />
    <Bola />
    <Cuadrado />
    <Separador />
    <Separadoruno />
    <Titulo texto="Hola React, gracies Ferran"/>
    <Mosca/>
    <Capital nom="Girona"/>
    <Gatos ancho="200" alto="200" nombre="Garfiled"/>
    <Bingo textbola="22"/>
    </div>
  );
}

export default App;
