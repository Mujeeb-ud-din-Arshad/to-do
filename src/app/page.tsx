"use client"
import React, { useState } from 'react'

const Page = () => {
  const [title,settitle] = useState("")
  const [desc,setdesc] = useState("")
  const [maintask,setmaintask] = useState([])
  const handle=(e)=>{
    e.preventDefault()
    setmaintask([...maintask, {title,desc}]) 
    settitle("")
    setdesc("")  
  }
  const del = (i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let rendertask:any = <h2>No Task Available </h2>
  if (maintask.length>0) {
    rendertask= maintask.map((t,i)=>{
      return (
       
      <div key={i} className='flex justify-betweeen mb-5 items-center'> 
      <div className='flex justify-betweeen mb-5 items-center w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title }</h5> 
      <h6 className='text-xl font-semibold'>{t.desc }</h6>
      </div>
      <button onClick={()=>{del(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
       </div>
      )
      });
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center '>To-Do List</h1>
    <form onSubmit={handle}>
        <input type="text" placeholder='Enter Task hare' className='m-5 text-2xl border-zinc-800 px-4 py-2 border-2 '
        value={title}
        onChange={(e)=>{
        settitle(e.target.value)
        }}
         />
        <input type="text" placeholder='Enter Discription hare' className='m-5 text-2xl border-zinc-800 px-4 py-2 border-2 ' 
         value={desc}
         onChange={(e)=>{
         setdesc(e.target.value) 
         }}
        />
        <button className='bg-black text-white px-4 py-2 text-2xl rounded'> Add Task </button>
    </form>
    <hr />
    <div className='p-8 bg-slate-800'>
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default Page
