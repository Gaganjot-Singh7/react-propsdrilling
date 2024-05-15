import { useState } from 'react'

import './App.css'

import Home from './Home';






function App() {
  const [counts, setCounts] = useState(10);


  const incrementValue = () => {
    setCounts((prev) => { return prev + 1 })
  }

  return (
    <>
      <div>
        <h1>hello value    count{counts}</h1>
        <Home incrementValue={incrementValue}  counts={counts}/>
        

      </div>
    </>
  )
}

export default App
