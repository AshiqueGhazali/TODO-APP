import React, { useEffect, useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask';
import ListTask from './ListTask';
import EditTask from './EditTask';


const Todo = () => {
    const [tasks, setTask] = useState([])
    const [editIndex, setEditIndex] = useState(null);


    const addTasks = (title) => {
        const newTask = [...tasks, { title }]
        setTask(newTask)
    }

    const removeTask = (index) => {
        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTask(newTask)
    }

    const startEditTask = (index) => {
        setEditIndex(index);
    };

    const updateTask = (title, index) => {
        const newTask = [...tasks];
        newTask[index] = { title };
        setTask(newTask);
        setEditIndex(null);
    };

    const cancelEdit = () => {
        setEditIndex(null);
    };


    let [pending, setPending] = useState(0)
    useEffect(() => {
        setPending(tasks.length)
    },[tasks])
    
    return (
        <>
            <div className="TodoContainer">
                <div className='header'>DID't YOU DO..?</div>
                <div><h4>You Have {pending} Pending Task </h4></div>
                <div className='addTask'>
                    {editIndex === null ? (
                        <AddTask addTasks={addTasks} />
                    ) : (
                        <EditTask
                            currentTask={tasks[editIndex]}
                            updateTask={updateTask}
                            index={editIndex}
                            cancelEdit={cancelEdit}
                        />
                    )}
                </div>
                <div className='tasks'>
                    {tasks.map((task, index) => (
                        <ListTask key={index} task={task} removeTask={removeTask} startEditTask={startEditTask} index={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Todo