import React from "react";

const Popup = ({popup, newTaskText, setNewTaskText, handlePopUp, addTask}) => {
    return (
        popup &&
         <div className="pop-up-container">
                <div className="pop-up">
                    <p className="pop-up-title">
                        Let's add your task!
                    </p>
                    <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} className="pop-up-input"/>
                    <div className="pop-up-button-container">
                        <button onClick={() => handlePopUp()} className="pop-up-button back">
                            Go Back
                        </button>
                        <button onClick={() => addTask()} className="pop-up-button add">
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Popup;