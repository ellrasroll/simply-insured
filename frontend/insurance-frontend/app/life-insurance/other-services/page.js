'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Other Services" 
                backgroundImage="/assets/images/services/types-of-cover-bg-2.jpg" // Update with a suitable background image path
                description="Discover our wide range of insurance options designed to cover unique needs and ensure comprehensive protection for every aspect of your life."
                ctaText="Explore Your Options" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers"
            
            >
                {/* Insurance Page Start */}
                <section className="insurance-page">
                    <div className="container">
                        <div className="row">
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title">
                                            <Link href="life-insurance">Life Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/services/insurence-1-2.jpg" alt="Life Insurance" />
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="life-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            
                            {/* Repeat similar blocks for each insurance type */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title">
                                            <Link href="health-insurance">Health Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/services/insurence-1-4.jpg" alt="Health Insurance" />
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="health-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Services */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title">
                                            <Link href="business-insurance">Business Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/services/insurence-1-3.jpg" alt="Business Insurance" />
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="business-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Car Insurance */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title">
                                            <Link href="income-protection">Income Protection</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/services/insurence-1-1.jpg" alt="Income Protection" />
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-car-1"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="car-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Home Insurance */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title">
                                            <Link href="travel-insurance">Travel Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/services/insurence-1-8.jpg" alt="Travel Insurance" />
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-home-security"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="home-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Family Insurance */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title">
                                            <Link href="family-insurance">Family Insurance</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/services/insurence-1-5.jpg" alt="Family Insurance" />
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="family-insurance">READ MORE<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Insurance Page End */}

                {/* CTA Section */}
                <section className="cta-one cta-five">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__bg"
                                style={{ backgroundImage: 'url(/assets/images/shapes/cta-three-bg-shape-2.png)' }} >
                            </div>
                            <div className="cta-one__title-box">
                                <h3>Get an Instant <span>Quote</span> Right Now</h3>
                                <p>Try it risk-free - We don’t charge cancellation fees</p>
                            </div>
                            <div className="cta-one__btn-box">
                                <Link href="contact" className="cta-one__btn thm-btn">GET YOUR FREE QUOTE NOW</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Section End */}
            </Layout>
        </>
    );
}
