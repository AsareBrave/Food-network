import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-red-700 font-bold text-5xl font-Poppins'>
        <h1>This is the testing of the font</h1>
       </div>

       <h1 className='text-5xl '>This is the testing of the font</h1>
    </>
  )
}

export default App
