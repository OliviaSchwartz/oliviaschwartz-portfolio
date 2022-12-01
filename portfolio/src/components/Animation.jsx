import '../App.css'
import React from 'react'

function WordAnimation() {
    return (
      <div>
            <h4 className="wordCarousel">
            <span>A LITTLE ABOUT ME:</span>
            <div className="animation-div">
                <ul className="flip4">
                    <li>WEB DEVELOPER</li>
                    <li>TRAVEL ENTHUSIAST</li>
                    <li>DOG LOVER</li>
                </ul>
            </div>
          </h4>
      </div>
    );
  }

  export default WordAnimation;
