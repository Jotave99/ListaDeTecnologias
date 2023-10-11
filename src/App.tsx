import {useState} from 'react'; 
import { Area, Container, Header } from './App.styles';
import { AddArea } from './assets/AddArea/AddArea';
import './App.css';

const App = () => {


  return(
    <div>
      <Container>
        <br/><br/>
      <Header>Minha Lista de Tecnologias</Header>
      </Container>
      <Area>
        <AddArea />
      </Area>
    </div>
  );
};

export default App;