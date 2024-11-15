'use client';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: '',
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: '',
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="fa fa-times"></i>
                    </span>

                    <div className="logo-box">
                        <Link href="/">
                            <img src="/assets/images/resources/logo-1-BG.png" width="100" alt="Simply Insured" />
                        </Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                {/* Life Insurance Section */}
                                <li className={isActive.key === 'life' ? 'dropdown current' : 'dropdown'}>
                                    <Link href="#">Life Insurance</Link>
                                    <div
                                        className={isActive.key === 'life' ? 'dropdown-btn open' : 'dropdown-btn'}
                                        onClick={() => handleToggle('life')}
                                    >
                                        <span className="fa fa-angle-right"></span>
                                    </div>
                                    <ul
                                        style={{
                                            display: `${isActive.key === 'life' ? 'block' : 'none'}`,
                                        }}
                                    >
                                        <li><Link href="/life-insurance/medical-conditions">Medical Conditions</Link></li>
                                        <li><Link href="/life-insurance/occupations-sports">Occupations & Sports</Link></li>
                                        <li><Link href="/life-insurance/types-of-cover">Types of Cover</Link></li>
                                        <li><Link href="/life-insurance/other-services">Other Services</Link></li>
                                    </ul>
                                </li>

                                {/* Income Protection Section */}
                                <li className={isActive.key === 'incomeProtection' ? 'dropdown current' : 'dropdown'}>
                                    <Link href="#">Income Protection</Link>
                                    <div
                                        className={isActive.key === 'incomeProtection' ? 'dropdown-btn open' : 'dropdown-btn'}
                                        onClick={() => handleToggle('incomeProtection')}
                                    >
                                        <span className="fa fa-angle-right"></span>
                                    </div>
                                    <ul
                                        style={{
                                            display: `${isActive.key === 'incomeProtection' ? 'block' : 'none'}`,
                                        }}
                                    >
                                        <li><Link href="/income-protection/medical-conditions">Medical Conditions</Link></li>
                                        <li><Link href="/income-protection/occupations-sports">Occupations & Sports</Link></li>
                                        <li><Link href="/income-protection/types-of-cover">Types of Cover</Link></li>
                                        <li><Link href="/income-protection/other-services">Other Services</Link></li>
                                    </ul>
                                </li>

                                {/* Health Insurance Section */}
                                <li className={isActive.key === 'healthInsurance' ? 'dropdown current' : 'dropdown'}>
                                    <Link href="#">Health Insurance</Link>
                                    <div
                                        className={isActive.key === 'healthInsurance' ? 'dropdown-btn open' : 'dropdown-btn'}
                                        onClick={() => handleToggle('healthInsurance')}
                                    >
                                        <span className="fa fa-angle-right"></span>
                                    </div>
                                    <ul
                                        style={{
                                            display: `${isActive.key === 'healthInsurance' ? 'block' : 'none'}`,
                                        }}
                                    >
                                        <li><Link href="/health-insurance/top-guides">Top Health Guides</Link></li>
                                        <li><Link href="/health-insurance/reviews">Health Insurance Reviews</Link></li>
                                        <li><Link href="/health-insurance/types">Types of Health Insurance</Link></li>
                                        <li><Link href="/health-insurance/other-services">Other Services</Link></li>
                                    </ul>
                                </li>

                                {/* Travel Insurance Section */}
                                <li className={isActive.key === 'travelInsurance' ? 'dropdown current' : 'dropdown'}>
                                    <Link href="#">Travel Insurance</Link>
                                    <div
                                        className={isActive.key === 'travelInsurance' ? 'dropdown-btn open' : 'dropdown-btn'}
                                        onClick={() => handleToggle('travelInsurance')}
                                    >
                                        <span className="fa fa-angle-right"></span>
                                    </div>
                                    <ul
                                        style={{
                                            display: `${isActive.key === 'travelInsurance' ? 'block' : 'none'}`,
                                        }}
                                    >
                                        <li><Link href="/travel-insurance/medical-conditions">Medical Conditions</Link></li>
                                        <li><Link href="/travel-insurance/activities-sports">Activities & Sports</Link></li>
                                        <li><Link href="/travel-insurance/types-of-cover">Types of Cover</Link></li>
                                        <li><Link href="/travel-insurance/other-services">Other Services</Link></li>
                                        <li><Link href="/travel-insurance/news">News</Link></li>
                                    </ul>
                                </li>

                                {/* News Section */}
                                <li className={isActive.key === 'news' ? 'dropdown current' : 'dropdown'}>
                                    <Link href="#">News</Link>
                                    <div
                                        className={isActive.key === 'news' ? 'dropdown-btn open' : 'dropdown-btn'}
                                        onClick={() => handleToggle('news')}
                                    >
                                        <span className="fa fa-angle-right"></span>
                                    </div>
                                    <ul
                                        style={{
                                            display: `${isActive.key === 'news' ? 'block' : 'none'}`,
                                        }}
                                    >
                                        <li><Link href="/news/guides">Guides</Link></li>
                                        <li><Link href="/news/latest-news">Latest News</Link></li>
                                        <li><Link href="/news/past-news">Past News</Link></li>
                                        <li><Link href="/news/about-us">About Us</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:needhelp@simplyinsured.co.uk">needhelp@simplyinsured.co.uk</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:666-888-0000">666 888 0000</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-facebook-square"></a>
                            <a href="#" className="fab fa-pinterest-p"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
