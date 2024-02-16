import React from 'react'
import { product } from '../Components/Data'
const Product = () => {
    return (
        <>
            <section className='product' id='product'>
                <h1 className='heading'>
                    <span>our </span>product
                </h1>
                <div className='box-container'>
                    {product.map((item, index) => (
                        <div className='box'>
                            <div className='icons'>
                                <a href="#" className='fa fa-shopping-cart'></a>
                                <a href="#" className='fa fa-heart'></a>
                                <a href="#" className='fa fa-eye'></a>
                            </div>
                            <div className='image'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='content'>
                                <h3>Fresh food</h3>
                                <div className='stars'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-half'></i>
                                </div>
                                <div className='price'>
                                $15.99 <span>$20.99</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Product
