import './App.css'
import { Task } from './Task.jsx'

function App() {
    const handleDeleteClick = () => {
        alert('delete clicked');
    }
    return (
        <>
            <div className={"topButtons"}>
                <button>All</button>
                <button>Completed</button>
                <button>Pending</button>
            </div>
            <div className={"line"}></div>
            <div>
                <input className={"inputField"} type={"text"} placeholder="Escribe algo"/>
                <button>Add</button>
            </div>
            <div>
                <Task text={"Hacer la compra"} isCompleted onDeleteClick={handleDeleteClick} />
                <Task text={"Hacer Katas"} isCompleted={false} onDeleteClick={handleDeleteClick} />
            </div>

        </>
    )
}

export default App
