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

    return (
        <div>
            <Container>
              <div className="field">
                <div className="image">➕</div>
                <input 
                    type="text"
                    placeholder="Adicione uma tecnologia"
                    value={newListName}
                    onChange={e=>setNewListName(e.target.value)}
                />
              </div>
              <button onClick={addTec}>
                Criar
                <img src={Plus} />
                </button>
            </Container>
            
            <div className='tecCriadas'>tecnologias criadas {list.length}</div>
            {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
    );
};