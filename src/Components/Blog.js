import React from 'react'
import { blog } from './Data'
const Blog = () => {
    return (
        <>
            <section className='blogs' id='blogs'>
                <h1 className='heading'>
                    <span>our </span>Blogs
                </h1>
                <div className='box-container'>
                    {blog.map((item, index) => (
                        <div className='box' key={index}>
                            <div className='image'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='content'>
                            <a href="#" className='title'>tasty and rerfreshing spices</a>
                            <span>by admin / 20 august 2023</span>
                            <p>
                            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing
                             Elit. Non,
                              Dicta.
                            </p>
                            <a href="#" className='btn'>read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog
