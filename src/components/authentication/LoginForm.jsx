'use client'
import Link from 'next/link'
import React from 'react'
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const LoginForm = ({ registerPath, resetPath }) => {
    const router = useRouter()
    return (
        <>
            <h2 className="fs-20 fw-bolder mb-2">Barloworld Torque Club</h2>
            <h4 className="fs-13 fw-bold mb-2">Sign in to your account</h4>
            <form onSubmit={(e) => { e.preventDefault(); router.push('/'); }} className="w-100 mt-4 pt-2">
                <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Email or Username" defaultValue="welcomeinfo@gmail.com" required />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" defaultValue="123456" required />
                </div>
                {/* <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="rememberMe" />
                            <label className="custom-control-label c-pointer" htmlFor="rememberMe">Remember Me</label>
                        </div>
                    </div>
                    <div>
                        <Link href={resetPath} className="fs-11 text-primary">Forget password?</Link>
                    </div>
                </div> */}
                <div className="mt-5">
                    <button type="submit" className="btn btn-lg btn-primary w-100">Sign in</button>
                </div>
            </form>
            <div className="w-100 mt-4 text-center mx-auto">
                <div className="mb-4 border-bottom position-relative">
                    <span className="small py-1 px-3 text-uppercase text-muted bg-white position-absolute translate-middle">or</span>
                </div>
                <button type="submit" className="btn btn-lg btn-light-brand w-100">Sign In With OTP</button>
            </div>
            <div className="mt-3 text-muted">
                <span> Don't have an account?</span>
                <Link href={registerPath} className="fw-bold"> Create an Account</Link>
                <p className='mt-4 fs-12 fw-medium text-muted'>Need help? Contact support at support@barloworld.com</p>
            </div>
        </>
    )
}

export default LoginForm