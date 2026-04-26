import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)

  function increase(){
    setnum(num+1)
  }

    function decrease(){
    setnum(num-1)
  }
    function reset(){
    setnum(0)
  }



  return (
    <div className='main'>
      <h1>{num}</h1>
      <div className='btn'>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App