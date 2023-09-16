import React from 'react'
import "../App.css";
function Join() {
  return (
    <div className='join'><div className='join_head'>
    <h3>LET'S BUILD A COMMUNITY</h3>
    <h1>Join our next destination</h1>
</div>  
       <div className='join_box'>
        <div className='join_input'>
            <div className='join_input_text'><h3>Share your travels</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, neque.</p></div>
        </div>
        <form className='form'>
            <input placeholder='Destination name'></input>
            <input placeholder='Country of Destination'></input>
            <input placeholder='Your name'></input>
            <input placeholder='Shooting category'></input>
            <textarea placeholder='Describe what kind of photos you want to focus on'></textarea>
        <button>Submit</button>
        </form></div> 
    </div>
  )
}

export default Join