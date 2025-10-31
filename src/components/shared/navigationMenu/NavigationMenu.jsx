'use client'
import React, { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PerfectScrollbar from "react-perfect-scrollbar";
import { FiSunrise } from "react-icons/fi";
import Menus from './Menus';
import { NavigationContext } from '@/contentApi/navigationProvider';

const NavigationManu = () => {
    const { navigationOpen, setNavigationOpen } = useContext(NavigationContext)
    const pathName = usePathname()
    useEffect(() => {
        setNavigationOpen(false)
    }, [pathName])
    return (
        <nav className={`nxl-navigation ${navigationOpen ? "mob-navigation-active" : ""}`}>
            <div className="navbar-wrapper">
                <div className="m-header">
                    <Link href="/" className="b-brand">
                        {/* <!-- ========   change your logo hear   ============ --> */}
                        {/* <Image width={140} height={30} src="/images/logo-full.png" alt="logo" className="logo logo-lg" />
                        <Image width={140} height={30} src="/images/logo-abbr.png" alt="logo" className="logo logo-sm" /> */}
                        <h3>Torque Club</h3>
                    </Link>
                </div>

                <div className={`navbar-content`}>
                    <PerfectScrollbar>
                        <ul className="nxl-navbar">
                            {/* <li className="nxl-item nxl-caption">
                                <label>Navigation</label>
                            </li> */}
                            <Menus />
                        </ul>
                        <div style={{ height: "18px" }}></div>
                                        {/* Bottom Navigation Links */}
                <div className="navbar-footer border-top">
                    <ul className="nxl-navbar">
                        <li className="nxl-item">
                            <Link href="/settings/ganeral" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-settings"></i>
                                </span>
                                <span className="nxl-mtext">Settings</span>
                            </Link>
                        </li>
                        <li className="nxl-item">
                            <Link href="/authentication/login" className="nxl-link">
                                <span className="nxl-micon">
                                    <i className="feather-log-out"></i>
                                </span>
                                <span className="nxl-mtext">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                    </PerfectScrollbar>
                </div>
                

            </div>
            <div onClick={() => setNavigationOpen(false)} className={`${navigationOpen ? "nxl-menu-overlay" : ""}`}></div>
        </nav>
    )
}

export default NavigationManu