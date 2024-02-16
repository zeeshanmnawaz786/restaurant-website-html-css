import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='contact' id='contact'>
        <h1 className='heading'>
            contact <span>us</span>
        </h1>
        <div className='row'>
          <iframe  className='map'
           src="https://maps.google.com/maps?q=burgerking&t=&z=10&ie=UTF8&iwloc=&output=embed" >
           </iframe>
           <form>
            <h3>get in touch</h3>
            <div className='inputBox'>
              <span className='fa fa-user'></span>
              <input type='text' placeholder='Name'/>
            </div>
            <div className='inputBox'>
              <span className='fa fa-envelope'></span>
              <input type='email' placeholder='Email'/>
            </div>
            <div className='inputBox'>
              <span className='fa fa-phone'></span>
              <input type='text' placeholder='Phone number'/>
            </div>
            <input type='submit' value='contact now' className='btn'/>
           </form>
        </div>
      </section>
    </>
  )
}

export default Contact
