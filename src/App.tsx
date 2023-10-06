import {useState} from 'react'; 
import { Area, Container, Header } from './App.styles';
import { Item } from './assets/Item/Item';
import { ListItem } from './assets/ListItem/ListItem';
import { AddArea } from './assets/AddArea/AddArea';
import './App.css';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'React', done: false},
    {id: 2, name: 'React Native', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  };

  return(
    <div>
      <Container>
        <br/><br/>
      <Header>Minha Lista de Tecnologias</Header>
      </Container>
      <Area>
          <AddArea onEnter={handleAddTask} />
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </Area>
    </div>
  );
};

export default App;