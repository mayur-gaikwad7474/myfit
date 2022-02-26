import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Screen1 from './screens/screen1/Screen1'
import Screen2 from './screens/screen2/Screen2'
import Screen3 from './screens/screen3/Screen3'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Screen1 />} />
         <Route path="/2" element={<Screen2 />} />
         <Route path="/3" element={<Screen3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
