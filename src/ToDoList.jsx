import React from "react";
import {RiCheckboxBlankFill} from "react-icons/ri";
import {RiCheckboxFill} from "react-icons/ri";
import {RiDeleteBin6Line} from "react-icons/ri";


const ToDoList = ({toDoList, toggleComplete, deleteItem}) => {
    return(
        <div className="to-do-list">
        {toDoList.map((listItem) => {
            return (
                <div key={listItem.id} className="to-do-container">
                <p className="to-do-checkbox" onClick = {() => toggleComplete(listItem.id)}>
                    {(!listItem.complete) ? <RiCheckboxBlankFill/> : <RiCheckboxFill/>}
                </p>
                <p className="to-do-text">
                    {listItem.text}
                </p>
                <p className="to-do-delete" onClick = {() => deleteItem(listItem.id)}>
                    <RiDeleteBin6Line/>
                </p>
            </div>
            )
        })}
    </div>
    )
}

export default ToDoList;