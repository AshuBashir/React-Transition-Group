import './App.css';
import Transition1 from './components/Transition';
import Example from './components/CssTransitions';
import Example2 from './components/SwitchTransitions';
import TransitionGroup1 from './components/TransitionGroup';



function App() {
  return (
    <div>
    <h1 className='heading'>React Transition Group</h1>
      <Transition1/>
      <Example/>
      <Example2/>
      <TransitionGroup1/>
    </div>
  );
}

export default App;
