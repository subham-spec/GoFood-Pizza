import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from "../assets/pizza.jpeg"
import "../styles/home.css";

function Home() {
  return (
    <div>
        <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
            <div className='headerContainer'>
                <h1>Rom's Pizza</h1>
                <p>A Pizza room for ready to eat</p>
                <Link to="/Menu">
                    <button>
                        Order Now
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home