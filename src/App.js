import './App.css';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import About from "./components/About"
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {

const [mode, setMode] = useState('light');  //whether dark mode is enabled or not 

const [alert, setAlert]= useState(null);

const showAlert =(message, type)=>{
   setAlert({
    msg: message,
    type: type
   })

   setTimeout(() => {
          setAlert(null);
        }, 3000);
      }



const toggleMode =()=>{

  if (mode === "light"){
    setMode('dark');
    document.body.style.backgroundColor = '#0d126b';
    showAlert("Dark Has Been Enabled", "success");
    document.title = 'TextUtils - Dark Mode';

    // setInterval(() => {
    //   document.title = 'TextUtils Was Amazing Mode!';
    // }, 2000);

    // setInterval(() => {
    //   document.title = 'Install TextUtils Now!!';
    // }, 1500);
  }

  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Has Been Enabled", "success");
    document.title = 'TextUtils - Light Mode';
  }
}
  return (
    <>
   {/* <Navbar title="TextUtils" aboutText ="About TextUtils"/> */}
   {/* <Navbar/> */}

   <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
           <div className="container my-3">

           <Routes>

            {/* /users --> Component 1
            /users/home  --> -->  exact path k liye Components 2 */}



          <Route path="/about" element={  <About />}>
          
          </Route>
          
          <Route path="/" element={  <TextForm showAlert={showAlert} heading="Enter The Text Enalyze" mode={mode} />}>
        
           
          </Route>
        </Routes>
          </div>
          </Router>
          
           
          
    </>
   );
  }
     
  // <Router>
      

  // <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  // <Alert alert={alert}/>
  // <div className="container my-3">
           
  //     <Routes>
  //       <Route exact path="/about" element={<About/>} >

  //       </Route>

  //       <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

  //       </Route>
  //     </Routes>


  // </div>


  // </Router>




        
  
  

  

export default App;
