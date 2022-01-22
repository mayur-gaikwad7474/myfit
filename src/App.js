import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Addnewworkout from './screens/addnewworkout/Addnewworkout'
import Addworkout from './screens/addworkout/Addworkout'
import Popup from './screens/popup/Popup'
import Viewworkout from './screens/viewworkout/Viewworkout'
import Workout from './screens/workout/Workout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workout />} />
        <Route path="/page2" element={<Viewworkout />} />
        <Route path="/page3" element={<Addworkout />} />
        <Route path="/page4" element={<Addnewworkout />} />
        <Route path="/page5" element={<Popup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
