import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer className="site-footer">
                <div className="site-footer__shape-1 float-bob-x">
                    <img src="/assets/images/shapes/site-footer-shape-1.png" alt="" />
                </div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="site-footer__top-inner">
                            <div className="row">

                                {/* How this site works & Our Mission */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                    <div className="footer-widget__column footer-widget__mission">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">How this site works...</h3>
                                        </div>
                                        <p className="footer-widget__mission-text">
                                            At Simply Insured, we provide information without selling your data to brokers. Our experts are here to offer the best advice directly, without any hidden interests.
                                        </p>
                                        
                                        <p className="footer-widget__mission-text">
                                            <strong>Our Mission:</strong> We are committed to providing outstanding service, the best protection solutions, and fair pricing for UK households. Simply Insured works for you and ensures your family gets the best and most affordable insurance cover.
                                        </p>
                                    </div>
                                </div>

                                {/* Navigation Section */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="footer-widget__column footer-widget__navigation">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Navigation</h3>
                                        </div>
                                        <ul className="footer-widget__navigation-list list-unstyled">
                                            <li>
                                                <Link href="index">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="about">About</Link>
                                            </li>
                                            <li>
                                                <Link href="life-insurance">Life Insurance</Link>
                                            </li>
                                            <li>
                                                <Link href="income-protection">Income Protection</Link>
                                            </li>
                                            <li>
                                                <Link href="health-insurance">Health Insurance</Link>
                                            </li>
                                            <li>
                                                <Link href="travel-insurance">Travel Insurance</Link>
                                            </li>
                                            <li>
                                                <Link href="news">News</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                {/* Newsletter Section */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                    <div className="footer-widget__column footer-widget__newsletter">
                                        <div className="footer-widget__title-box">
                                            <h3 className="footer-widget__title">Newsletter</h3>
                                        </div>
                                        <p className="footer-widget__newsletter-text">Subscribe to our newsletter to get the latest news & updates</p>
                                        <form className="footer-widget__newsletter-form">
                                            <div className="footer-widget__newsletter-input-box">
                                                <input type="email" placeholder="email@example.com" name="email" />
                                                <button type="submit" className="footer-widget__newsletter-btn">
                                                    <i className="icon-send"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="site-footer__bottom-inner">
                            <p className="site-footer__bottom-text">
                                Copyright © 2024 Simply Insured by <Link href="#">SimplyInsured.com</Link>. All Rights Reserved. | Simply Insured is a trading name of Simply Insured Limited, authorized and regulated by the Financial Conduct Authority (FRN: 123456). Company registered in England and Wales, registration number 98765432.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
