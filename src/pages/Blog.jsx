import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import BlogCards from "../components/BlogCards"
import Container from "../components/Container"

const Blog = () => {
  return ( 
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title"> Find by Categories </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Laptop</li>
                    <li>Camera</li>
                    <li>Watch</li>
                    <li>TV</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <BlogCards />
                </div>
                <div className="col-6 mb-3">
                  <BlogCards />
                </div>
                <div className="col-6 mb-3">
                  <BlogCards />
                </div>
                <div className="col-6 mb-3">
                  <BlogCards />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Blog
