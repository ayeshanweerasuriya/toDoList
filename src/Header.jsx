import React from "react";
import {TbPencilPlus} from "react-icons/tb";

const Header = ({handlePopUp}) => {
    return (
        <div className="header-container">
        <div className="header">
            <p className="header-title">
                My Task
            </p>
            <div  onClick={() => handlePopUp()}  className="header-add-task">
                <p className="header-add-task-text">
                    <TbPencilPlus/>
                </p>
            </div>
        </div>
    </div>
    )
}

export default Header;