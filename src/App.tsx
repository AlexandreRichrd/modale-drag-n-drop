import Test from './components/Test/Test'
import './App.css'

import React, { useState } from 'react'

function App() {
    const [file, setFile] = useState('')
    const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpened(true)}>Click me !</button>
      <Test file={file} setFile={setFile} isOpened={isOpened} setIsOpened={setIsOpened}/>
      <div>
        <h2>Contenu du fichier :</h2>
        <p>{file}</p>
      </div>
    </>
  )
}

export default App
