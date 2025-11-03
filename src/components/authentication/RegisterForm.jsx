import Link from 'next/link'
import React from 'react'
import { FiEye, FiHash } from 'react-icons/fi'

const RegisterForm = ({path}) => {
    return (
        <>
            <h2 className="fs-20 fw-bolder mb-2">Barloworld Torque Club</h2>
            <h4 className="fs-13 fw-bold mb-2">Create your account here</h4>
            <form action="index.html" className="w-100 mt-4 pt-2">
                <div className="mb-4">
                    <input type="text" className="form-control" placeholder="First Name" required />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control" placeholder="Last Name" required />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control" placeholder="Company" required />
                </div>
                <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-4">
                    <input type="tel" className="form-control" placeholder="Phone Number" required />
                </div>
                 <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">Create Account</button>
                </div>
            </form>
            <div className="mt-3 text-muted">
                <span>Already have an account?</span>
                <Link href={path} className="fw-bold"> Login</Link>
            </div>
            <p className='mt-4 fs-12 fw-medium text-muted'>Need help? Contact support at support@barloworld.com</p>
        </>
    )
}

export default RegisterForm