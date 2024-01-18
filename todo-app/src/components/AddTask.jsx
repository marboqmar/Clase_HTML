import { useState } from 'react';

export function AddTask(props) {
    const { onAddClick } = props;
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleAddClick = () => {
        onAddClick({
            id: new Date().getTime(),
            text: inputValue,
            isCompleted: false,
        });

        setInputValue("")
    }

    return (
        <>
            <div>
                <input className={"inputField"} type={"text"} placeholder="Escribe el nombre de tu tarea" value={inputValue} onChange={handleChange}/>
                <button className={"addAndDeleteButtons addButtonPaddingAndBG"} onClick={handleAddClick} disabled={!inputValue}>Add</button>
            </div>
        </>
    )
}

