import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container'
import CustomInput from '../components/CustomInput';

const SignUp = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="SignUp" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
               
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Create Account</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <CustomInput type="text" name='Name' placeholder='Name' className="form-control" />
                                    <CustomInput type="tel" name='mobile' placeholder='Mobile Number' className="form-control" />
                                    <CustomInput type="text" name='email' placeholder='Email' className="form-control" />
                                    <CustomInput type="password" name='password' placeholder='password' className="form-control" />
                                    <div>
                                        <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className="button border-0">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                   
                </div>
            </Container>
        </>
    )
}

export default SignUp