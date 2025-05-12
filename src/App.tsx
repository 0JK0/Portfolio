import './App.css';

import {LandingHeader} from './components/head.tsx';
import { Timeline } from './components/Experience.tsx';
import { Projects } from './components/Projects.tsx';

function App() {
  return (
    <>
      <div className='head'>  
        <LandingHeader />
      </div>

      <div className='experience'>
        <Timeline />
      </div>

      <div className='projects'>
        <Projects />
      </div> 
      
    </>
  );
}

export default App;