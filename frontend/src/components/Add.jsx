import React,{useEffect,useState} from 'react'
import axios from 'axios'
   
export default function add (props)  {
const [name,setName]=useState("")
const [imageUrl,setImageUrl]=useState("")
const [category,setCategory]=useState("")

 const handlclick =()=>{
    axios.post("http://localhost:3000/api/image/add",{
        name:name,
        imageUrl:imageUrl,
        category:category
    })
    .then((result)=>{console.log(result); 
    props.add()})
    .catch((err)=>console.log(err))
 }
 const handleChange =(e)=>{
    setAdded({[e.target.name]:e.target.value})
}


  return (
    <div className="update-container">
      <h2>Added Item</h2>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
        
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"

          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button id="btn"onClick={()=>{handlclick()
    alert("added successfully")}}>Add</button>
    </div>
  )
}

