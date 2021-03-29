import React, { useState, useEffect } from 'react'
import './contacts.css';
import ContactItems from './ContactItems/ContactItems';
import TextField from '@material-ui/core/TextField';

interface ContactsType {
  title: string;
  phone: string;
  email: string;
  image: string;
}

type MocksType = {
  title: string,
  phone: string,
  email: string,
  image: string,
}

const MOCKS = [
  {
    title: "Police",
    phone: "55-56-62-32",
    email: "police@popos.com",
    image: "https://static.wikia.nocookie.net/spongebob/images/f/f7/Orange_P.png/revision/latest?cb=20190731195008",
  },
  {
    title: "Ambulance",
    phone: "44-55-66-23",
    email: "ambo@ambos.com",
    image: "https://www.askideas.com/media/32/Grim-Reaper-Ambulance-Funny-Death-Race-Image.jpeg",
  },
  {
    title: "Some Guy",
    phone: "44-44-44-44",
    email: "imarealperson@someguy.com",
    image: "https://www.hpcismart.com/images/website/ManChemNews/DIR_169/F_92035.jpg",
  },
];

const Contacts:React.FC<ContactsType> = () => {
  const [ contacts, setContacts ] = useState<MocksType[]>();

  // useEffect(() => {
  //   MOCKS.forEach(element => {
  //     setContacts({ ...contacts, element })
  //   });
  // })

  return (
    <div>
      <h1>Contacts</h1>
      <div>
        <form>
        <div>
          <TextField
              className="titleInput"
              required
              id="standard-basic"
              label="Title"
              name="title"
            />
          </div><div>
          <TextField
              className="phoneInput"
              required
              id="standard-basic"
              label="Phone"
              name="phone"
            />
          </div><div>
          <TextField
              className="emailInput"
              required
              id="standard-basic"
              label="Email"
              name="email"
            />
          </div>
          <div>Image</div>
          <input
            name="image"
            type="text"
          ></input>
        </form>
      </div>
      {/* <div>
        {contacts ? contacts.map((contact: ContactsType) => (
          <ContactItems contact={contact} />
        )) : null}
      </div> */}
    </div>
  )
}

export default Contacts
