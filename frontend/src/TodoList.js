import { useState } from "react";

export default function TodoList() {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [items, setItems] = useState([])
    

    const HandleDelete=(id)=>{
        const updatetedList = [...items];
        updatetedList.splice(id, 1);
        setItems(updatetedList);
    }

    const HandleData=()=>{
        setItems([...items, {name, desc}]);
        const newItems ={name, desc}

        if(name.length < 1 || desc.length < 1){
            return;
        }
        fetch("http://localhost:3001/data",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newItems)
        })
        .then((res)=>{
            if(!res.ok){
                throw new Error("Network Issue");
            }
            return;
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
            <h1>Todo List</h1>
            <label>Name : </label>
            <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter product name"
            />
            <br /><br />
            <label>Description : </label>
            <input
                name="Desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
                placeholder="Enter product Description"
            />
            <br /><br />
            <button onClick={HandleData}>Send</button>

            {
                items.map((item, id)=>{
                    return(
                        <li key={id}>{item.name} {item.desc} <button onClick={()=>HandleDelete(id)}>Delete</button></li>
                    )
                })
            }
        </div>
    )
}