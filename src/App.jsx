import react,{ useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import './App.css'
import Contacts from './pages/Contacts/Contacts'
import CreateContact from './pages/CreateContact/CreateContact'
import SingleContact from './pages/SingleContact/SingleContact'
import EditContact from './pages/EditContact/EditContact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contacts/>}/>
        <Route path='/createcontact' element={<CreateContact/>}/>
        <Route path='/singlecontact/:id' element={<SingleContact/>}/>
        <Route path='/editcontact/:id' element={<EditContact/>}/>
      </Routes>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
