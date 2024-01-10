export const Task = (props) => {
    const { isCompleted, text, onDeleteClick } = props

    return (
        <div className={"task displayFlex"}>
            <div className={"taskText, displayFlex"}>
                <input className={"checkbox"} checked={isCompleted} type={"checkbox"}/>
                <p className={"taskText"}>{text}</p>
            </div>
            <button className={"deleteButton"} onClick={onDeleteClick}>Delete</button>
        </div>
    )
}