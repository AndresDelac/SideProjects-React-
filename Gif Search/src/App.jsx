import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'

function App() {
  const [category, setCategory] = useState("")

  return (
    <>
      <h2>
        Main component
      </h2>

      <AddCategory setCategory={setCategory}/>
    </>
  )
}

export default App
