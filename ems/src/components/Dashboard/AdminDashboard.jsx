import React from "react";
import Header from "../Head/Header";
import CreateTask from "../Head/CreateTask";
import AllTask from "../Head/AllTask";

const AdminDashboard =(props)=>{
    return(
        <div className="h-screen  p-7">
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />

           
        </div>
    )
}

export default AdminDashboard