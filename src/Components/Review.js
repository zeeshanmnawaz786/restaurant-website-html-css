import React from 'react'
import quoteimg from '../assests/quote.png'
import { review } from '../Components/Data'
const Review = () => {
    return (
        <>
            <section className='review' id='review'>
                <h1 className='heading'>
                    CUSTOMER'S <span>REVIEW</span>
                </h1>
                <div className='box-container'>
                    {review.map((item, index) => (
                        <div className='box'>
                            <img src={quoteimg} alt='' className='quote' />
                            <p>
                            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                             Animi 
                             Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus 
                             Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex 
                             Aliquam 
                             Minus Vel? Nemo.
                            </p>
                            <img src={item.img} alt='' className='user'/>
                            <h3>Customer</h3>
                            <div className='stars'>
                            <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star-half'></i>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Review
