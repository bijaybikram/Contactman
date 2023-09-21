import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./Contacts.css"
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'

const Contacts = () => {
  const navigate = useNavigate()
  
  const [contacts, setContacts] = useState([])

  const fetchContacts = async () => {
    const contactresponse = await axios.get("https://65082c7456db83a34d9bde5d.mockapi.io/contacts")
    // console.log(contactresponse)
    if(contactresponse.status == 200) {
      setContacts(contactresponse.data)
    }

  }
  
  
  
  useEffect(() => {
    fetchContacts()
  }, [])
  return (
    <>
    <Navbar home="All Contacts" addcontact="Add Contact" />
    <div id='allcontacts'>
      {
        contacts.map((contact) => {
          return (
          <div className="contact-card" key={contact.id}>
          <img src={contact.avatar} alt="Profile Picture" className="contact-avatar"/>
          <h2 className="contact-name">{contact.fullname}</h2>
          <p className="contact-email">{contact.email}</p>
          <p className="contact-phone">{contact.phone}</p>
          <p onClick={() => navigate(`/singlecontact/${contact.id}`)} style={{cursor: "pointer"}}>About</p>
          
          </div>
          )
        })
    
    }
    </div>
    </>
  )
}

export default Contacts