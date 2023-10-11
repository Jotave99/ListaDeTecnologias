import { Container } from "./style";
import { useState } from "react";
import { Item } from "../Item/Item";
import { ListItem } from "../ListItem/ListItem";
import Plus from "../plus.svg";

export const AddArea = () => {

    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'React', done: false},
        {id: 2, name: 'React Native', done: true},
      ]);
      const [newListName, setNewListName] = useState<string>('');
    
      const addTec = () => {
        if(newListName.trim() != '') {
          const newTec: Item = {
            id: Date.now(),
            name: newListName,
            done: false,
          };
    
          setList([...list, newTec]);
          setNewListName('');
        };

      };

      const deleteTec = (listId: number) => {
        const updatedTec = list.filter((item) => item.id !== listId);
        setList(updatedTec);
      }

    return (
        <div>
            <Container>
              <div className="field">
                <input 
                    type="text"
                    placeholder="Adicione uma nova tecnologia"
                    value={newListName}
                    onChange={e=>setNewListName(e.target.value)}
                />
              </div>
              <button onClick={addTec}>
                Criar
                <img src={Plus} />
              </button>
            </Container>
            <div className="tec">
            <div>tecnologias criadas </div>
            <div className="tecNumbers"> {list.length}</div>
            <div className='tecConcluidas'>concluidas</div>
            <div className="tecNumbers">{listTecFeitas()} de {list.length}</div>
            </div>
            {list.length === 0 && <div className="noTec">Você ainda não tem tecnologias cadastradas<br />
            Crie tecnologia e organize seus itens a fazer</div>}
            {list.map((item, index) => (
            <ListItem key={index} item={item} deleteTec={deleteTec} />
          ))}
        </div>
    );

    function listTecFeitas(): number {
      return list.filter((item) => item.done).length;
   }
   
};