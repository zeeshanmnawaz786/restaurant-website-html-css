import React from 'react'
import { menu } from '../Components/Data'
const Menu = () => {
    return (
        <>
            <section className='menu' id='menu'>
                <h1 className='heading'>
                    <span>our</span> menu
                </h1>
                <div className='box-container'>
                    {menu.map((item, index) => (
                        <div className='box'>
                            <img src={item.img} alt="" />
                            <h3>tasty and healty</h3>
                            <div className='price'>
                                $15.99  <span>20.99</span>
                            </div>
                            <a href='#' className='btn'>Add to Cart</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Menu
