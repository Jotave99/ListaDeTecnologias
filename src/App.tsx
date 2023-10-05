import {useState} from 'react'; 
import { Area, Container, Header } from './App.styles';
import { Item } from './assets/Item/Item';
import { ListItem } from './assets/ListItem/ListItem';
import './App.css';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'React', done: false},
    {id: 2, name: 'React Native', done: true},
  ]);

  return(
    <div>
      <Container>
      <Header>Minha Lista de Tecnologias</Header>
      </Container>
      <Area>
          

          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </Area>
    </div>
  );
};

export default App;