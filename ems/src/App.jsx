import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login';
import EmployeeDashborad from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';


function App() {
  // localStorage.clear()

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData]=useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  


  const handleLogin = (email,password)=>{
    if(email =='admin@gmail.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee =userData.employees.find((e)=>email == e.email && e.password==password)
      if(employee){
        setLoggedInUserData(employee)
        setUser('employee')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
        
    }
    else{
      alert("Invalid credintials")
    }
  }

  return (
    <>
     
        {!user ? <Login handleLogin={handleLogin} />: ''}
        {user == 'admin' ?  <AdminDashboard changeUser={setUser} />: (user == 'employee' ? <EmployeeDashborad changeUser={setUser} data={loggedInUserData}/> : null)}
        
    
    </>
  )
}

export default App
