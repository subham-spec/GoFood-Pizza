import React from 'react'
import Back from "../assets/pizzaLeft.jpg"
import "../styles/contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
            style={{backgroundImage: `url(${Back})`}}>

        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter full name...' type='text' required></input>                 
            
                <label htmlFor='email'>E-Mail</label>
                <input name='email' placeholder='ex: xyz@abc.com' type='email' required></input>
            
                <label htmlFor='message'>Enter yout message</label>
                <textarea name='message' rows="6" placeholder='Enter your massage...' type="text" required></textarea>
            
                <button type="submit">Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Contact