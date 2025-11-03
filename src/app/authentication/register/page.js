import RegisterForm from '@/components/authentication/RegisterForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="auth-cover-wrapper">
      <div className="auth-cover-content-inner">
        <div className="auth-cover-content-wrapper" 
          style={{
            position: "relative",
            backgroundImage: `url(/images/auth/civil1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            justifyContent: "center",
          }}
          >
          {/* Background overlay for opacity */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1
          }}></div>
          
          {/* Centered content */}
          <div style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "white",
            textAlign: "center",
            padding: "40px"
          }}>
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
              color: "white"
            }}>
              Welcome to Torque Club
            </h1>
            <p style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              maxWidth: "600px",
              lineHeight: "1.6"
            }}>
              Your complete Barloworld customer portal for equipment management and premium services
            </p>
            <div style={{
              display: "flex",
              gap: "3rem",
              fontSize: "1.1rem",
              fontWeight: "500"
            }}>
              <div>Real-time Monitoring</div>
              <div>24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-cover-sidebar-inner">
        <div className="auth-cover-card-wrapper">
          <div className="auth-cover-card p-sm-5">
            {/* <div className="wd-50 mb-5">
              <img src="/images/logo-abbr.png" alt="img" className="img-fluid" />
            </div> */}
            <RegisterForm path={"/authentication/login"} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page