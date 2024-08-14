import { useState } from 'react';
import './App.css';
import Viewer from './component/Viewer/Viewer';
import Controller from './component/Controller/Controller';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='Wrapper'>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller count={count} setCount={setCount} />
    </div>
  )
}

export default App
