import { useState, useEffect } from "react";
import "./App.css"
import {v4 as uuid}from 'uuid';
import Popup from "./Popup.jsx";
import Header from "./Header.jsx";
import ToDoList from "./ToDoList.jsx";


const App = () => {

    const [toDoList, setToDoList] = useState(() => {
        const storedList = localStorage.getItem('to-do-list');
        return storedList ? JSON.parse(storedList) : [];
    })
    const [popup, setPopUp] = useState(false)
    const [newTaskText, setNewTaskText] = useState('');

    useEffect(() => {
        localStorage.setItem('to-do-list', JSON.stringify(toDoList));
    }, [toDoList]);

    const handlePopUp = () => {
        (!popup) ? setPopUp(true) : setPopUp(false);
    }

    const addTask = () => {
        if (newTaskText !== "") {
            setToDoList(current => {
                return [
                    ...current,
                    {
                        id: uuid(),
                        text: newTaskText,
                        complete: false
                    }
                ]
            })
            setNewTaskText("");
            setPopUp(false);
        }
    }

    const toggleComplete = (id) => {
        setToDoList(current => {
            return current.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        complete: !item.complete
                    }
                }
                return item;
            })
        })
    }

    const deleteItem = (id) => {
        setToDoList(current => {
            return current.filter(item => item.id !== id);
        })
    }

    return (
        <>
            <Popup
                popup={popup}
                newTaskText={newTaskText}
                setNewTaskText={setNewTaskText}
                handlePopUp={handlePopUp}
                addTask={addTask}
            />

            <Header 
                handlePopUp={handlePopUp}
            />
            <ToDoList
                toDoList={toDoList}
                toggleComplete={toggleComplete}
                deleteItem={deleteItem}
            />
        </>
    )
}

export default App;