import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = ({changeUser, data}) =>{
    // const [username, setUsername] = useState('')

    // if(!data){
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.firstName)
    // }
    

    const logOutUser = ()=>{
        localStorage.setItem('loggedInUser', '')
        //window.location.reload()
        changeUser('')
    }

    return(
        <div className="flex items-end justify-between">
            <h1 className="text-2xl">Hello <br /> <span className="text-3xl">{data?.firstName || "Admin"}</span></h1>
            <button onClick={logOutUser} className="bg-red-500 text-white px-5 py-2 text-lg font-medium">Log out</button>
        </div>
    )
}

export default Header