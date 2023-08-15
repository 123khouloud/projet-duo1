import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Update (props)  {




  const [name, setName] = useState(props.image.name);
  const [category, setCategory] = useState(props.image.category);
  const [imageUrl, setImageUrl] = useState(props.image.imageUrl);
  


  useEffect(()=>{
    setName(name),
    setImageUrl(imageUrl),
    setCategory(category)

  },[])


  const handleUpdate = () => {
    axios.put(`http://localhost:3000/api/image/update/${props.image._id}`,{
        name:name,
        imageUrl:imageUrl,
        category:category
    }).then((result)=>{console.log(result)
    set}).catch((err)=>{console.log(err)})
  };

  return (
    <div className="update-container">
      <h2>Update Item</h2>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button id="btn"onClick={()=>{handleUpdate()
      props.trig(!props.trigger)
    alert("updated successfully")
    }}>Update</button>
    </div>
  );
}


