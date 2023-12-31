import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = () => {
    return (
        <>
            <div className="blog-card">
                <div className="card-image">
                    <img src="images/blog-1.jpg" className='img-fluid w-100' alt="" />
                </div>
                <div className="blog-content">
                    <p className="date">07 Aug, 2023</p>
                    <h5 className="title">A beautiful sunday morning renaissance</h5>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus  Lorem ipsum dolor sit amet.
                    </p>
                    <Link to="/blog/:id" className="button">Read More</Link>
                </div>
            </div>
        </>
    )
}

export default BlogCards