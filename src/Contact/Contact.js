import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material';
import { Facebook,Instagram,LinkedIn } from '@mui/icons-material'
import "./Contact.css"
const Contact = () => {
  return (
    <Element className="Contact" id ="contact">
<h1>Contact </h1>
<div className='Contact_info'>

    <p>
        Email : <span> snithishkumarsuresh0808@gmail.com</span>
    </p>
    <p>
        Github UserName :<span>  SNithishkumar0808</span>
    </p>
    <div className='icon'>
<a href="https://www.linkedin.com/in/nithishkumar-suresh-b42a3b23a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
<IconButton>
    <LinkedIn/>

</IconButton>
</a>
<a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1">
<IconButton>
    <Instagram/>

</IconButton>
</a>
<a href="">
<IconButton>
    <Facebook/>

</IconButton>
</a>
    </div>
</div>
    </Element>
  )
}

export default Contact
