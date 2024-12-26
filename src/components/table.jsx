import React from 'react'
import supabase from '../createClient'

// import '../App.css'
const Table = ({data,fetchUsers,setUpdateState,setUser}) => {
    const deleteUser = async(userid)=>{
        const {error} = await supabase
        .from('users')
        .delete()
        .eq('id',userid)
        fetchUsers()
    }
    const handleEdit = async (user)=>{
        setUpdateState(true)
        setUser(user)
    }

  return (
<div>
    <table className="border-collapse border border-gray-300 bg-white text-left shadow-md rounded-lg">
        <thead className="bg-gray-100">
            <tr>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5">ID</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5">Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5">Age</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5">Delete</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5">edit</th>
            </tr>
        </thead>
        <tbody>
                {
                    data.map((user)=>
                        <tr className="hover:bg-gray-50" key={user.id}>
                        <td className="px-4 py-2 text-gray-600 border-b border-gray-200 w-1/5">{user.id}</td>
                        <td className="px-4 py-2 text-gray-600 border-b border-gray-200 w-1/5">{user.name}</td>
                        <td className="px-4 py-2 text-gray-600 border-b border-gray-200 w-1/5">{user.age}</td>
                        <td className="px-4 py-2 w-1/5 hover:shadow-cyan hover:shadow"><button className='bg-red' onClick={()=>deleteUser(user.id)}>delete</button></td>
                        <td className="px-4 py-2 w-1/5 hover:shadow-cyan hover:shadow "><button className='bg-red' onClick={()=>handleEdit(user)}>edit</button></td>
                    </tr>)
                }
        </tbody>
    </table>
</div>
  )
}

export default Table