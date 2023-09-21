import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import "./SingleContact.css"


const SingleContact = () => {
  
  const navigate = useNavigate()
  
  // see full details of contact 
  const {id} = useParams()
  const [contact, setContact] = useState()

  const fetchContact = async() => {
    const response = await axios.get("https://65082c7456db83a34d9bde5d.mockapi.io/contacts/" + id)
    console.log(response)
    if(response.status == 200) {
      setContact(response.data)
    }else{
      alert("Something went wrong!")
    }
  }

  const deleteContact = async (e) => {
    e.preventDefault()
    const response = await axios.delete(`https://65082c7456db83a34d9bde5d.mockapi.io/contacts/${id}`, contact)
    // console.log(response)
    if(response.status == 200){
      navigate('/')
    }
  }

  useEffect(() => {
    fetchContact()
  }, [])


  return (
      <div>
    <Navbar home="All Contacts"/>
    <div id='single-contact'>
          <div className="contact-card" key={contact?.id}>
          <img src={contact?.avatar} alt="Profile Picture" className="contact-avatar"/>
          <h2 className="contact-name">{contact?.fullname}</h2>
          <p className="contact-email">{contact?.email}</p>
          <p className="contact-phone">{contact?.phone}</p>
          <p className="contact-about">{contact?.about}</p>
          <Button onClick={() => navigate('/editcontact/' + contact.id)} name={"Edit"}/>
          {/* <Button name={"Edit"}/> */}
          <Button onClick={deleteContact} name={"Delete"}/>
          </div>
    </div>
    </div>
  )
}

export default SingleContact