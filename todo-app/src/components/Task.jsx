import { useState } from 'react';

export const Task = (props) => {
    const { isCompleted, text, onDeleteClick } = props

    const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

    const handleChange = (event) => {
        setIsTaskCompleted(event.target.checked);
    };

    return (
        <div className={"task displayFlex"}>
            <div className={"taskText, displayFlex"}>
                <input className={"checkbox"} checked={isTaskCompleted} onChange={handleChange} type={"checkbox"}/>
                <p className={"taskText"}>{text}</p>
            </div>
            <button className={"deleteButton"} onClick={onDeleteClick}>Delete</button>
        </div>
    )
}