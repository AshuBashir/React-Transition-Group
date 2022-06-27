import React from "react";
import {CSSTransition} from "react-transition-group";
import { useState } from "react";
import "./style.css";
import "./Transition.css"

function Example() {
    const [showMessage, setShowMessage] = useState(false);
  
    return (
      <div>
        
         <button className="transition-1" onClick={() => setShowMessage(!showMessage)}>
            Show Message
          </button>
         <CSSTransition in={showMessage} timeout={300} classNames="example" unmountOnExit>
            <p>Hello, I am a message that animates with CSSTransition!</p>
        </CSSTransition>
      </div>
    );
  }

  export default Example