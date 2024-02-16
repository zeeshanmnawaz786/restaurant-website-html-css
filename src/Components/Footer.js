import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='footer' id='footer'>
        <div className='share'>
            <a href="#" className='fa fa-facebook'></a>
            <a href="#" className='fa fa-twitter'></a>
            <a href="#" className='fa fa-instagram'></a>
            <a href="#" className='fa fa-pinterest'></a>
            <a href="#" className='fa fa-youtube'></a>
        </div>
        <div className='links'>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#product">product</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
        </div>
        <div className='credit'>
            created by <span>khadija tul kubra</span>| All Rights Reserved
        </div>
    </section>
      
    </>
  )
}

export default Footer
