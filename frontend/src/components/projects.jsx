import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThermometer1 } from '@fortawesome/free-solid-svg-icons'; 

const Projects = ({data,search,update,remove}) => {
  const [term,setTerm]=useState("")
const handleChange=(e)=>{
  const newTerm=e.target.value
  setTerm(newTerm)
  search(newTerm)
}
 
  
  console.log(data)
  return (
    <div>
      <div className="input-group d-flex align-items-center justify-content-center">
        <div className="form-outline">
          <input
            id="search-input"
            type="search"
            className="form-control"
            placeholder="Search"
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <button
          id="search-button"
          type="button"
          className="btn btn-primary mt-2"
          onClick={()=>{search(term)}}

        >
          <FontAwesomeIcon icon={faSearch} /> 
        </button>
      </div>

      <br />

      <div className="image-grid" >
        {data && data.map((e,i) => (
          <div className="image-data" key={i}>
            <img
              src={e.imageUrl}
              alt="Image Description"
            />
            <div className="data-description">
              <div className="data-name">{e.name}</div>
              <div className="data-category">{e.category}</div>
              <div className="button-container">
  <button id="button-1" type="button"  onClick={() => { remove(e._id) }}>Delete</button>
  <button id="button-2" onClick={()=>{
    update("update",e)
  }}>Update</button>
</div>


            
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
