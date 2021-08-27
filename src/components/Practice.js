import React, { useState } from 'react'

// import React from 'react'

export default function Practice() {

    const [buttonText, setbuttonText] = useState("Enable Dark Mode")
    const [myStyle, setmyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    })

    const toggleStyle=()=>{
        if(myStyle.backgroundColor==="black"){
            setmyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setbuttonText("Enable Dark Mode")
        }
        else{
            setmyStyle({
                color:"white",
                backgroundColor:"black",
                border:"2px solid white"
            })
            setbuttonText("Enable Light Mode")
        }
    }

    return (
        <>
        <div className="container">
            <div className="card-group">
  <div className="card" style={myStyle}>
    <img src="https://source.unsplash.com/400x400/?lion" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <img src="https://source.unsplash.com/400x400/?tiger" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <img src="https://source.unsplash.com/400x400/?leopard" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

<div className="container my-4">
<div className="card-group">
  <div className="card" style={myStyle}>
    <img src="https://source.unsplash.com/400x400/?hyena" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <img src="https://source.unsplash.com/400x400/?fox" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <img src="https://source.unsplash.com/400x400/?jackal" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

<div className="container my-3">
<button onClick={toggleStyle} type="button" class="btn btn-primary btn-lg">{buttonText}</button>
</div>


        </>
    )
}
