import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";

const TaskList = ({data})=>{
    //console.log(data)
    return(
        <div id="tasklist" className="h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap  mt-10">
          {data.tasks.map((elem, index)=>{
            if(elem.active){
                return <AcceptTask key={index} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={index} data={elem}/>
            }
            if(elem.complete){
                return <CompleteTask key={index} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={index} data={elem}/>
            }
          })}

           
        </div>
    )
}

export default TaskList