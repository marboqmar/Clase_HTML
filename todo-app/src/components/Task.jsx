import { useState } from 'react';

export const Task = (props) => {
    const { isCompleted, text, onDeleteClick } = props

    const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

    const handleChange = (event) => {
        setIsTaskCompleted(event.target.checked);
    };

    return (
        <div className={`task displayFlex ${isTaskCompleted ? 'taskCompleted' : ''}`}>
            <div className={"taskText displayFlex"}>
                <input className={"checkbox"} checked={isTaskCompleted} onChange={handleChange} type={"checkbox"}/>
                <p>{text}</p>
            </div>
            <button className={"addAndDeleteButtons deleteButtonPaddingAndBG"} onClick={onDeleteClick}>Delete</button>
        </div>
    )
}