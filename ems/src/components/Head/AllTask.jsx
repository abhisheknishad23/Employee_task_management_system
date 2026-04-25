import React, { useContext } from 'react';
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    //console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>Employeee name</h2>
            <h3 className='w-1/5 '>New Task</h3>
            <h5 className='w-1/5 '>Active Task</h5>
            <h5 className='w-1/5 '>Completed</h5>
            <h5 className='w-1/5 '>Failed</h5>
        </div>
       <div className=''>
          {userData.employees.map(function(elem, index){
            return <div key={index} className='border border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 '>{elem.firstName}</h2>
            <h3 className='w-1/5 text-blue-600'>{elem.taskSummary.newTask}</h3>
            <h5 className='w-1/5 text-yellow-600'>{elem.taskSummary.active}</h5>
            <h5 className='w-1/5 text-green-600'>{elem.taskSummary.completed}</h5>
            <h5 className='w-1/5 text-red-600 text-lg'>{elem.taskSummary.failed}</h5>
        </div>

        })}
       </div>
       

    </div>
  )
}

export default AllTask