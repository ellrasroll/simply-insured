'use client';

import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import DataBg from "../elements/DataBg";
import Breadcrumb from './Breadcrumb';
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Footer1 from './footer/Footer1';
import Header1 from "./header/Header1";

export default function Layout({ 
    headTitle, 
    breadcrumbTitle, 
    children, 
    wrapperCls, 
    backgroundImage, 
    description, 
    ctaText, 
    ctaLink, 
    icon,
    iconDescription
}) {
    const [scroll, setScroll] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };

    // Popup
    const [isPopup, setPopup] = useState(false);
    const handlePopup = () => setPopup(!isPopup);

    // Sidebar
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({ live: false });
        window.wow.init();

        // Scroll event listener for sticky header and scroll state
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScroll(scrollY);
            setIsSticky(scrollY > 100); // Set sticky if scroll is greater than 100px
        };

        document.addEventListener("scroll", handleScroll);
        
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header1
                    scroll={scroll}
                    isSticky={isSticky}
                    isMobileMenu={isMobileMenu}
                    handleMobileMenu={handleMobileMenu}
                    handlePopup={handlePopup}
                    isSidebar={isSidebar}
                    handleSidebar={handleSidebar}
                />

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && (
                    <Breadcrumb
                        breadcrumbTitle={breadcrumbTitle}
                        backgroundImage={backgroundImage}
                        description={description}       // Pass description to Breadcrumb
                        ctaText={ctaText}               // Pass CTA text to Breadcrumb
                        ctaLink={ctaLink}               // Pass CTA link to Breadcrumb
                        icon={icon}                     // Pass icon to Breadcrumb
                        iconDescription={iconDescription}
                    />
                )}

                {children}

                <Footer1 />
            </div>
            <BackToTop scroll={scroll} />
        </>
    );
}
