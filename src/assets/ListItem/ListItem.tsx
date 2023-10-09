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

    const handleRemover = () => {
        deleteTec(item.id);
    }

    return(
        <div>
            <Container done={isChecked}>
                <input type='checkbox' 
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)} />
                <label>{item.name}</label>
                <img onClick={handleRemover} src={Trash} />
            </Container>
        </div>
    );
};
