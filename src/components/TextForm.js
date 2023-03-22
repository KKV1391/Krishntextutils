  import React, {useState} from 'react'

  export default function TextForm(props) {
     
      const handleUpClick=()=>{
        // console.log("Uppercase Was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase!!", "success");
      }

      const handleLoClick=()=>{
        // console.log("Uppercase Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase!!", "success");
      }
      const handleClearClick=()=>{
        // console.log("Uppercase Was Clicked" + text);
        let newText ="";
        setText(newText);
        props.showAlert("Clear Text!!", "success");
      }

      const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
      }

      const handleCopy =()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard!!", "success");
      }

      const handleExtraSpaces=()=>{

        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Speces Removed!!", "success");
      }

      const [text, setText] = useState("");
    return (

      <>
      <div className= "container" style ={{color: props.mode=== 'dark'?'white':'#0d126b'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
  
    <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor: props.mode=== 'dark'?'grey':'white' , color: props.mode=== 'dark'?'white':'#0d126b'}} id="mybox" rows="8"></textarea>
  </div>

  <button className="btn btn-primary mx-1  my-2" onClick={handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>


      <div className="container my-3" style ={{color: props.mode=== 'dark'?'white':'#0d126b'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length } Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something in the textboxabove to preview it here'}</p>
      </div>

      </>
    );
  }
