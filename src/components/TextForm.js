import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }
  const handleLowClick=()=>{
    // console.log("Lowercase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }
  const handleCopyClick=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard","success")

  }
  const handleClearClick=()=>{
    let newText= document.getElementById("myBox").value = "";
    setText(newText);
    props.showAlert("Text cleared","success")

  }
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const [text,setText]=useState('');
  // setText("new text");
    return (
      <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder="Enter the text here"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick} >Convert to Upper Case</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lower Case</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your Text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
