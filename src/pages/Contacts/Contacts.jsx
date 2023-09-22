import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./Contacts.css"
import Button from '../../components/Button/Button'
import Navbar from '../../components/Navbar/Navbar'

const Contacts = () => {
  const navigate = useNavigate()
  
  const [contacts, setContacts] = useState([])
  const [showAllContacts, setShowAllContacts] = useState(false) // using a state hook to set a condition to show limited or all contacts
  const [searchQuery, setSearchQuery] = useState('')

  const fetchContacts = async () => {
    const contactresponse = await axios.get("https://65082c7456db83a34d9bde5d.mockapi.io/contacts")
    // console.log(contactresponse)
    if(contactresponse.status == 200) {
      setContacts(contactresponse.data)
    }

  }

  const showAllContactsHandler = () => {
    setShowAllContacts(true)  // set showallcontacts to true to show all th contacts
  }

  
  
  
  useEffect(() => {
    fetchContacts()
  }, [])
  return (
    <>
    <Navbar home="All Contacts" addcontact="Add Contact" />

    {/* input for search query */}
    <div className='search-box'>
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    </div>
    

    <div id='allcontacts'>
      {
        contacts.filter((contact) => contact.fullname.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, showAllContacts ? contacts.length: 6).map((contact) => {
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
    <div className='load-more'>
    {!showAllContacts && (<Button onClick={showAllContactsHandler} name="Load More"/>)}
    </div>
    </>
  )
}

export default Contacts