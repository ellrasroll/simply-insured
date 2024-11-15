'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';
import Brand from '@/components/sections/home1/Brand';
import About from '@/components/sections/home1/About';

export default function AboutUs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
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
            <Layout 
                breadcrumbTitle="About Simply Insured" 
                backgroundImage="/assets/images/backgrounds/about-us-bg.jpg" 
                description="Learn more about Simply Insured and our commitment to providing top-rated insurance solutions tailored to every individual's unique needs."
                ctaText="Get a Quote in Minutes" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png"
                iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers"
            >
                <Brand/>
                <About/>

                {/* About Us Section */}
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                   
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/resources/about-us-1.jpg" alt="Simply Insured Team" />
                                    </div>

                                    <h3 className="insurance-details__title-2">Why Choose Us?</h3>
                                    <p className="insurance-details__text-2">
                                        Simply Insured is built on a foundation of integrity, transparency, and a commitment to providing peace of mind. We aim to be more than an insurance provider; we want to be a trusted partner, helping you protect what matters most.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Dedicated to providing customer-centric service and support.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access to top-rated insurance providers for the best deals.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Flexible coverage options tailored to individual needs.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5">
                                <div className="sticky-container">
                                    <div className="insurance-details__right">
                                        <div className="insurance-details__catagories">
                                            <h3 className="insurance-details__catagories-title">Categories</h3>
                                            <ul className="insurance-details__catagories-list list-unstyled">
                                                <li className="active">
                                                    <Link href="life-insurance">Life Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="income-protection">Income Protection<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="health-insurance">Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="travel-insurance">Travel Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="family-insurance">Family Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="business-insurance">Business Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/insurance-details-need-help-bg.jpg)' }}>
                                            </div>
                                            <h3 className="insurance-details__need-help-title">
                                                Need Help Finding
                                                <br /> the Right Coverage?
                                            </h3>
                                            <div className="insurance-details__need-help-btn-box">
                                                <Link href="contact" className="insurance-details__need-help-btn thm-btn">FIND SOLUTION</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Full-width FAQ Section */}
                        <div className="insurance-details__faq">
                            <h3 className="insurance-details__title-2">Frequently Asked Questions</h3>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What makes Simply Insured different?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                We provide personalized insurance solutions with a commitment to transparency, ensuring every client gets the right protection for their specific needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Who are Simply Insured's insurance partners?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                We work with a wide network of top-rated insurance providers, ensuring our clients have access to competitive rates and coverage options that best fit their requirements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What types of insurance does Simply Insured offer?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>
                                                We specialize in a variety of insurance solutions including life, health, income protection, and business insurance, with expertise in covering pre-existing conditions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Cta/>
                </section>
            </Layout>
        </>
    );
}
