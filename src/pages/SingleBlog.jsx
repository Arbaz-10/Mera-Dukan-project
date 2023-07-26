import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi'
import blog from "../images/blog-1.jpg";
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog"} />
            <BreadCrumb title="Dynamic Blog" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-15'> <HiOutlineArrowLeft className='fs-4'/>  Go back to Blogs</Link>
                            <h3 className="title">
                                A Beautiful Sunday Morning Renaisance
                            </h3>
                            <img src={blog} alt="blog" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus placeat quidem inventore ex iure non laborum reprehenderit perspiciatis error ipsa omnis commodi aliquam, quod delectus eius quas. Neque perspiciatis consequatur quisquam repellat, ad iusto? Maiores consectetur voluptas quae adipisci doloremque! Cumque possimus quisquam quo.</p>
                            </div>
                        </div>
                    </div>
               
            </Container>
        </>
    )
}

export default SingleBlog