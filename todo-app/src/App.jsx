import './App.css'
import { Task } from './components/Task.jsx'
import { useState } from 'react';
import { AddTask } from './components/AddTask.jsx'

export function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddClick = (task) => {
        setTasks([task, ...tasks])
    }

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
            <AddTask onAddClick={handleAddClick} />
            <div>
                {tasks.map((task, index) => (
                    <Task key={index} {...task} onDeleteClick={handleDeleteClick} />
                ))}
            </div>
        </>
    )
}