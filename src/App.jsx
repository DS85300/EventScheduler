import { useState } from 'react'
import { Router,Route,Routes } from 'react-router-dom';
import './index.css'

function App() {
  const [someState, setSomeState] = useState(null);


  return (
    <>
    <div className='bg-amber-300'>This is our Eventscheduler</div>
    <Routes>
      <Route>
        <Route/>
        <Route/>
        <Route/>
     </Route >
    </Routes>
    </>
  )
}

export default App
