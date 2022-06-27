import {CSSTransition, TransitionGroup} from "react-transition-group";
import { useState } from 'react';
import "./TransitionGroup.css";
import "./Transition.css";




function TransitionGroup1() {
    const [items, setItems] = useState([
      '🍏 Apple',
      '🍌 Banana',]);
  
    const FRUITS = [
      '🍏 Apple',
      '🍌 Banana',
      '🍍 Pineapple',
      '🥥 Coconut',
      '🍉 Watermelon',
      '🍓 Strawberry',
      '🍈 Melon',
      '🥝 Kiwi',
      '🍒 Cherry',
      '🍑 Peach'
    ];
  
    const handleAddFruit = () => {
      const nextHiddenItem = FRUITS.find((i) => !items.includes(i));
      if (nextHiddenItem) {
        setItems((prev) => [ ...prev, nextHiddenItem]);
      }
    };
  
    return (
      <div className="App">
      <TransitionGroup>
        <h2 className="shopping">Shopping List</h2>
        {items.map(( item, index ) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                  <p className="shopping">{item}</p>
              </CSSTransition>
            ))}
          <button className="transition-1 shopping" onClick={handleAddFruit}>
            Add Fruit
          </button>
      </TransitionGroup>
      </div>
    );
   }

   export default TransitionGroup1