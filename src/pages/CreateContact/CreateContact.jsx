import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import "./CreateContact.css"
import Navbar from '../../components/Navbar/Navbar'

const CreateContact = () => {

  const navigate = useNavigate()

  const [fullname, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")
  
  const createBlog = async (e) => {

    e.preventDefault()
    const data = {
      fullname: fullname,
      email: email,
      phone: phone,
      about: about
    }


    const response = await axios.post("https://65082c7456db83a34d9bde5d.mockapi.io/contacts", data)
    console.log(response)
    if(response.status == 201) {
      navigate("/")
    }
  }


  return (
    <div>
      <Navbar/>
      <div className="form-container">
        <h2>Create Contact</h2>
        <form id="contact-form" onSubmit={createBlog}>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="fullname" placeholder="Provide Name" required onChange={(e) => setFullName(e.target.value)}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="johndoe@example.com" required onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (123) 456-7890" required onChange={(e) => setPhone(e.target.value)}/>

                <label htmlFor="phone">About:</label>
                <input type="tel" id="phone" name="about" placeholder="About this person" required onChange={(e) => setAbout(e.target.value)}/>
            <button type="submit" className="submit-button">Create</button>
        </form>
    </div>
    </div>
  )
}

export default CreateContact