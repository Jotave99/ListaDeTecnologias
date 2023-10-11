import { useState } from 'react';
import { Container } from "./styles";
import { Item } from "../Item/Item";
import Trash from "../trash.svg";

type Props = {
    item: Item;
    deleteTec: (listId: number) => void;
};

export const ListItem = ({ item, deleteTec }: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);
    const [contador, setContador] = useState<number>(1);

    const handleContador = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          setContador(contador + 1);
        } else {
          setContador(contador - 1);
        }
      };

    const handleRemover = () => {
        deleteTec(item.id);
    }

    return(
        <div>
            <Container done={isChecked}>
                <input type='checkbox' 
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                    onChangeCapture={handleContador} />
                <label>{item.name}</label>
                <img onClick={handleRemover} src={Trash} />
            </Container>
        </div>
    );
};
