import './App.css'
import { Task } from './components/Task.jsx'
import { useState } from 'react';
import { AddTask } from './components/AddTask.jsx'


export function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddClick = (task) => {
        setTasks([task, ...tasks]);
    }

    const handleDeleteClick = () => {
        alert('delete clicked');
    }

    const [isFilterActive, setIsFilterActive] = useState({
        allButtonSelected: false,
        completedButtonSelected: false,
        pendingButtonSelected: false,
    });

    const handleFilterClick = (event) => {
        let stateCopy = { ...isFilterActive};
        if (event.target.id === "All") {
            stateCopy.allButtonSelected = !stateCopy.allButtonSelected
        }
        else if (event.target.id === "Completed") {
            stateCopy.completedButtonSelected = !stateCopy.completedButtonSelected
        }
        else if (event.target.id === "Pending") {
            stateCopy.pendingButtonSelected = !stateCopy.pendingButtonSelected
        }
        console.log(stateCopy)
        setIsFilterActive(stateCopy);
    };

    return (
        <>
            <div className={"topButtons"}>
                <button className={isFilterActive.allButtonSelected ? 'active' : ''} id={"All"} onClick={handleFilterClick}>All</button>
                <button className={isFilterActive.completedButtonSelected ? 'active' : ''} id={"Completed"} onClick={handleFilterClick}>Completed</button>
                <button className={isFilterActive.pendingButtonSelected ? 'active' : ''} id={"Pending"} onClick={handleFilterClick}>Pending</button>
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