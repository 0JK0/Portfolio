import './App.css';

import {LandingHeader} from './components/head.tsx';
import { Timeline } from './components/Experience.tsx';
import { Card } from './components/Projects.tsx';

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
        <Card image='src/assets/Projects/JayNotes-icon.png' title='JayNotes' tagImage='src/assets/techLogos/javascript-logo-svgrepo-com.svg' tagText='JavaScript' />
        <Card image='' title='' />
      </div> 
      
    </>
  );
}

export default App;