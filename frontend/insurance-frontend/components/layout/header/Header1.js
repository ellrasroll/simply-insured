import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            {/* Main Header */}
            <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <Link href="/">
                                    <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                                </Link>
                            </div>

                            {/* Centered Menu */}
                            <div className="main-menu__center">
                                <Menu />
                            </div>

                            {/* Mobile Menu Toggle on the left */}
                            <div className="main-menu__mobile-toggle">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                    <i className="fa fa-bars"></i>
                                </Link>
                            </div>

                            {/* Right Side Button */}
                            <div className="main-menu__right">
                                <Link href="contact" className="main-menu__btn thm-btn">GET A QUOTE</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <MobileMenu handleMobileMenu={handleMobileMenu} />

            {/* Sticky Header */}
            <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <Link href="/">
                                        <img src="/assets/images/resources/logo-1.png" alt="Logo" />
                                    </Link>
                                </div>
                                <div className="main-menu__center">
                                    <Menu />
                                </div>
                                <div className="main-menu__mobile-toggle">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars"></i>
                                    </Link>
                                </div>
                                <div className="main-menu__right">
                                    <Link href="contact" className="main-menu__btn thm-btn">GET A QUOTE</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
