import React from 'react'
import ReactDom from 'react-dom'
import './Hero_Page.css';

export default function Hero_Page(){
    return(
        <div>
            <div class="image-container">
            <img src="src\assets\HeroImage.jpg" class="Myimage"/>
            <div className="image-overlay"></div>
            <h1 class="centered-heading">Sugar</h1>
            </div>
        </div>
    )
}