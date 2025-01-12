import React from 'react'
import supabase from '../createClient'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'


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
    <table className="border-collapse border border-gray-300 bg-white text-left shadow-lg rounded-lg table ">
        <thead className="bg-gray-100">
            <tr>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5 font-bold">ID</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5 font-bold">Name</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5 font-bold">Age</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5 font-bold">Delete</th>
                <th className="px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200 w-1/5 font-bold">edit</th>
            </tr>
        </thead>
        <tbody>
                {
                    data.map((user)=>
                        <tr className="hover:bg-gray-100 hover:scale-110 transition ease-out duration-75 hover:shadow-md " key={user.id}>
                        <td className="px-4 py-2 text-gray-600 border-b border-gray-200 w-1/5">{user.id}</td>
                        <td className="px-4 py-2 text-gray-600 border-b border-gray-200 w-1/5">{user.name}</td>
                        <td className="px-4 py-2 text-gray-600 border-b border-gray-200 w-1/5">{user.age}</td>
                        <td className="px-4 py-2 w-1/5 hover:shadow-cyan hover:shadow"><button className='bg-red hover:scale-110 transition ease-out duration-75 flex items-center gap-2' onClick={()=>deleteUser(user.id)}><FaTrash className='inline-block'/><span>delete</span></button></td>
                        <td className="px-4 py-2 w-1/5 hover:shadow-cyan hover:shadow "><button className='bg-red hover:scale-110 hover:shadow-inner transition ease-out duration-75 flex items-center gap-2' onClick={()=>handleEdit(user)}><FaEdit/>edit</button></td>
                    </tr>)
                }
        </tbody>
    </table>
</div>
  )
}

export default Table