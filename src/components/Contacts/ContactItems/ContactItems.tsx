import React from 'react'
import './contact-items.css';

interface contacts {
  title: string;
  phone: string;
  email: string;
  image: string;
}

const ContactItems:React.FC<contacts> = ( contact ) => {
  return (
    <div>
      <h1>{contact.title}</h1>
      <h2>{contact.phone}</h2>
      <h2>{contact.email}</h2>
    </div>
  )
}

export default ContactItems;
