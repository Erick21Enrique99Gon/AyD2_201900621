import { useState } from 'react'
import './App.css'

function App() {
  const [datos, setdatos] = useState("")

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick ={() => setdatos("Erick Enrique González Chávez 201900621 Ayd1")} >
          Datos {datos}
        </button >
      </div>
    </>
  )
}

export default App
