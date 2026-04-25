import React from "react";
import Header from "../Head/Header";
import TaskNumber from "../Head/TaskNumber";
import TaskList from "../Head/TaskList";

const EmployeeDashboard = (props)=>{
    
    return(
        <div className="p-20">
          
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskNumber data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}

export default EmployeeDashboard