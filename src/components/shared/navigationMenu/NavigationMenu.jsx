'use client'
import React, { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PerfectScrollbar from "react-perfect-scrollbar";
import { FiSunrise } from "react-icons/fi";
import Menus from './Menus';
import { NavigationContext } from '@/contentApi/navigationProvider';
import getIcon from '@/utils/getIcon';

import bweTorqueLogo from '/public/images/logo/bwe_torque_club_logo.png';
import bweTorqueLogoWhite from '/public/images/logo/bwe_torque_club_logo_white.png';
import bweTorqueLogoIcon from '/public/images/logo/bwe_torque_club_icon.png';

const NavigationManu = () => {
    const { navigationOpen, setNavigationOpen } = useContext(NavigationContext)
    const pathName = usePathname()
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        setNavigationOpen(false)
    }, [pathName])

    useEffect(() => {
        // Check theme from document class
        const checkTheme = () => {
            const hasDarkClass = document.documentElement.classList.contains('app-skin-dark');
            setTheme(hasDarkClass ? 'dark' : 'light');
        }

        // Initial check
        checkTheme();

        // Watch for class changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, [])

    const logoSrc = theme === 'light' ? bweTorqueLogoWhite : bweTorqueLogo;

    return (
        <nav className={`nxl-navigation ${navigationOpen ? "mob-navigation-active" : ""}`}>
            <div className="navbar-wrapper">
                <div className="m-header">
                    <Link href="/" className="b-brand">
                        {/* <!-- ========   change your logo hear   ============ --> */}
                        <Image width={180} height={60} src={logoSrc} alt="logo" className="h-auto logo logo-lg" style={{width: '100%'}} />
                        <Image width={140} height={42} src={bweTorqueLogoIcon} alt="logo" className="h-auto logo logo-sm" style={{width: '100%'}} />
                        {/* <h3 className='logo-lg mb-0'>Torque Club</h3>
                        <h3 className='logo-sm mb-0'>TC</h3> */}
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
                        <div className="border-top pt-3 mt-3">
                            <ul className="nxl-navbar">
                                <li className={`nxl-item ${pathName.startsWith('/settings') ? 'active' : ''}`}>
                                    <Link href="/settings/ganeral" className="nxl-link">
                                        <span className="nxl-micon">
                                            {getIcon('feather-settings')}
                                        </span>
                                        <span className="nxl-mtext" style={{ paddingLeft: "2.5px" }}>Settings</span>
                                    </Link>
                                </li>
                                <li className="nxl-item">
                                    <Link href="/authentication/login" className="nxl-link">
                                        <span className="nxl-micon">
                                            {getIcon('feather-log-out')}
                                        </span>
                                        <span className="nxl-mtext" style={{ paddingLeft: "2.5px" }}>Logout</span>
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