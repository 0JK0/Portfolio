import './App.css';

import {LandingHeader} from './components/head.tsx';
import { Timeline } from './components/Experience.tsx';

function App() {
  return (
    <>
      <div className='head'>  
        <LandingHeader />
      </div>

      <div className='experience'>
        <Timeline />
      </div> 
      
    </>
  );
}

export default App;