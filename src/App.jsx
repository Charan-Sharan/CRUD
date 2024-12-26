import React from 'react'
import './App.css'
import supabase from './createClient' 
import { useState,useEffect } from 'react'
import Table from './components/table'
import Form from './components/form'
const App = () => {

  const [users,setUsers] = useState([])
  const [updateState,setUpdateState] = useState(false)
  const [user,setUser] = useState({})

  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers = async ()=>{
    const {data} = await supabase.from('users').select('*')
    setUsers(data)
    console.log(data)
  }
  return (
      <>
            <Form fetchUsers={fetchUsers}/>
            {updateState?<Form fetchUsers={fetchUsers} setUpdateState={setUpdateState}  formType='update' userInfo={user}/>:<></>}
            <Table data={users} fetchUsers={fetchUsers} setUpdateState={setUpdateState} updateState={updateState} setUser={setUser}/>
      </>
  )
}

export default App