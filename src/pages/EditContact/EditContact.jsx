import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import "./EditContact.css"

const EditContact = () => {

  const {id} = useParams()

  const navigate = useNavigate()
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    phone: "",
    about: "",
  });

  const editContact = async (e) => {
    e.preventDefault()
    const response = await axios.put(`https://65082c7456db83a34d9bde5d.mockapi.io/contacts/${id}`, contact)
    // console.log(response)
    if(response.status == 200){
      navigate(`/singlecontact/${id}`)
    }
  }

  

  const fetchContact = async() => {
    const response = await axios.get("https://65082c7456db83a34d9bde5d.mockapi.io/contacts/" + id)
    if(response.status == 200) {
      setContact(response.data)
    }else{
      alert("Something went wrong")
    }
    }
  

  useEffect(() => {
    fetchContact()
  }, [])



  return (
    <div>
      <Navbar home="All Contacts" />
      <div className="container">
        <h1>Edit Contact</h1>
        <form id="edit-contact-form" onSubmit={editContact}>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" placeholder="Enter full name" onChange={(e) => setContact({ ...contact, fullname: e.target.value})}  value={contact.fullname} required/>
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e) => setContact({ ...contact, email: e.target.value})} value={contact.email} required/>

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" onChange={(e) => setContact({ ...contact, phone: e.target.value})} value={contact.phone} required/>

            <label htmlFor="about">About:</label>
            <textarea id="about" name="about" rows="4" onChange={(e) => setContact({ ...contact, about: e.target.value})} value={contact.about}></textarea>

            <button type="submit">Save Changes</button>
        </form>
    </div>
    </div>
  )
  }

export default EditContact