import React, { useState } from 'react'

function TodoList() {
    const [name, setName] =useState("")
    const [desc, setDesc] =useState("")
    const [items, setItems] = useState([]);




    const HandleData=()=>{

        if(name.length < 0 || desc.length < 0  ){
            return;
        }
        setItems([...items, {name, desc}])


        const newItems = {name, desc};

        fetch("http://localhost:3001/data",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newItems)
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error("Network Problem")
            }
            return;
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log("Error found", err)
        })
        setName("")
        setDesc("")
    }


  return (
    <div>
        <h1>Todo list</h1>
        <label>Name: </label>
        <input        
             name='name'
             value={name}
             onChange={(e)=>setName(e.target.value)}
             placeholder='Enter the name'
             required
        />
        <br/>
        <label>Description: </label>
        <input        
             name='desc'
             value={desc}
             onChange={(e)=>setDesc(e.target.value)}
             placeholder='Enter the Description'
             required
        />
        <br/>
        <br/>
        <button onClick={HandleData}>Add</button>
    </div>
  )
}

export default TodoList