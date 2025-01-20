import { useState } from 'react'
import Values from 'values.js'
import FormColor from './components/FormColor'

import './App.css'
import DisplayColors from './components/DisplayColors'
function App() {
  const [list, setList] = useState(new Values('red').all(5))

  console.log(list);
  
  return (
    <>
      <div>
        <FormColor setList={setList} />
        <DisplayColors list={list} />
      </div>
    </>
  )
}

export default App
