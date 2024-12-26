import React, { useEffect, useState } from 'react'
import supabase from '../createClient'
const Form = ({fetchUsers,formType="create",updateState, setUpdateState, userInfo}) => {
    const [user,setUser] = useState({
        name:'',
        age:0
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser((prev)=>({
            ...prev,
            [name]:value

        }))
    }
    useEffect(()=>{
        if(userInfo) setUser(userInfo)        
    },[userInfo])

    const postUser = async(e)=>{
        e.preventDefault()
        if(formType=="update") {
            const { data } = await supabase
            .from('users')
            .update({ name: user.name,age:user.age })
            .eq('id', user.id)
            setUpdateState(false)
            fetchUsers()
        }
        else{
            console.log(user)
            const { error } = await supabase
            .from('users')
            .insert({ name: user.name,age:user.age })
            fetchUsers() 
            setUser({name:"",age:"" })
        }
        
    }

    
  return (
    <form onSubmit={postUser} className='my-3'>
        <input  type="text"
                placeholder='enter name'
                name='name'
                value={user.name}
                onChange={handleChange}
                className='bg-white h-10 pl-2 text-gray-950 border border-gray-300' />
        <input type="number"
                placeholder='enter age'
                value={user.age>0?user.age:''}
                onChange={handleChange}
                name='age'
                className='bg-white h-10 pl-2 text-gray-950 border border-gray-300' />
        <input type="submit" value={formType} className="bg-white h-10 rounded-md text-gray-950 mx-2 px-2"/>
        {/* <button className="bg-white text-gray-950 mx-2 px-2 h-10">create</button> */}
    </form>
  )
}

export default Form