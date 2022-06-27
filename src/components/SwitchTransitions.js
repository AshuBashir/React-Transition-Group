
import React from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import { useState } from "react";
import "./SwitchTransitions.css";
import "./Transition.css"


function Example2() {
    const [state, setState] = useState(false);
    return (
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={state ? "Goodbye, world!" : "Hello, world!"}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
          <button  className="transition-1" onClick={() => setState(state => !state)}>
            {state ? "Goodbye, world!" : "Hello, world!"}
          </button>
        </CSSTransition>
      </SwitchTransition>
    );
   }
  export default Example2

