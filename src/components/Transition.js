import {Transition} from "react-transition-group";
import { useState } from 'react'; 
import "./Transition.css"


const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: "inline-block",
  backgroundColor: "#b3d0ff"
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

function Transition1() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <button className="transition-1" onClick={() => setInProp(!inProp)}>Click to Show</button>
      <Transition in={inProp} timeout={300}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            I'm a component that gets a Fade transition!
          </div>
        )}
      </Transition>
      
    </div>
  );
}

export default Transition1;