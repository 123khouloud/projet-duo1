import React from "react";
import './App.css';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import Update from "./components/update";
import axios from "axios";
import Add from "./components/add";
import { useEffect, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [data, setData] = useState([]); 
  const [trigger,setTrigger]=useState(false)
  const [updates,setUpdates]=useState([])

  const addProject = () => {
    setTrigger(!trigger); 
    setCurrentPage('projects'); 
  };

  useEffect(() => {
    axios.get("http://localhost:3000/api/image").then((result) => {
      setData(result.data);
    }).catch((err) => console.log(err));
  }, [trigger]);

  const imageUpdate =(currentPage,obj)=>{
    setCurrentPage(currentPage)
    setUpdates(obj)
    }
    
    

    

  const switchView = (page) => {
    setCurrentPage(page);
  };
  
  const Search = (input) => {
    if (!input) {
      setTrigger(!trigger);
    }
 return setData(data.filter((e)=>e.category.toLowerCase().includes(input.toLowerCase())))
  }  

  const remove=(id) => {
    axios.delete(`http://localhost:3000/api/image/delete/${id}`)
    .then((result)=>{
  console.log(result);
  setTrigger(!trigger)
}).catch((err)=>console.log(err))
}

  return (
    <div className="App">
     <header className="header">
    <nav className="navbar" >
      <button className="special-button" onClick={() => switchView("home")}>Home</button>
      <button className="special-button" onClick={() => switchView("about")}>About Me</button>
      <button className="special-button" onClick={() => switchView("projects")}>My Projects</button>
      <button className="special-button" onClick={() => switchView("add")}>Add</button>
    </nav>
  </header>
      <main className="content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'projects' && <Projects add={addProject} update={imageUpdate} remove={remove} data={data} search={Search} />} 
        {currentPage === 'update' && <Update image= {updates}  trig={setTrigger} trigger={trigger}/>}
        {currentPage === 'add' && <Add />}
      </main>
    </div>
  );
}

export default App;

