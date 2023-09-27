import {useState} from 'react'; 
import { Area, Container, Header } from './App.styles';
import { Item } from './assets/Item/Item';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'React', done: false},
    {id: 2, name: 'React Native', done: false},
  ]);

  return(
    <div>
      <Container>
        <Area>
          <Header>Minha Lista de Tecnologias</Header>

          {list.map((item, index) => (
            <div>{item.name}</div>
          ))}
        </Area>
      </Container>
    </div>
  );
};

export default App;