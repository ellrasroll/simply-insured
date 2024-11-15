'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';
import Brand from '@/components/sections/home1/Brand';

export default function TravelInsuranceMedicalConditionsPage() {
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
                breadcrumbTitle="Travel Insurance for Medical Conditions" 
                backgroundImage="/assets/images/services/travel-medical-bg.jpeg" 
                description="Reliable travel insurance solutions tailored for individuals with medical conditions, ensuring peace of mind while traveling abroad."
                ctaText="Get Your Travel Insurance Quote" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Rated 'EXCELLENT' by travelers with medical needs"
            >
                <Brand />
                
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Comprehensive Travel Insurance for Pre-Existing Medical Conditions
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Traveling with a medical condition can be challenging, but finding the right insurance shouldn’t be. Our travel insurance for medical conditions is designed to provide the necessary coverage, allowing you to explore with confidence.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/travel-med-1.jpg" alt="Travel Insurance for Medical Conditions" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Why Choose Medical Condition Travel Insurance?</h3>
                                    <p className="insurance-details__text-2">
                                        Standard travel insurance may not cover pre-existing medical conditions. Our specialized insurance provides coverage for emergency medical treatment, trip cancellations, and more, so you can travel worry-free.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise to You</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Coverage for a wide range of pre-existing medical conditions.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Emergency medical and trip cancellation coverage tailored to your health needs.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>24/7 assistance and support, wherever you travel.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="insurance-details__title-2">Frequently Asked Questions</h3>
                                    <p className="insurance-details__text-2">
                                        Here are some common questions about travel insurance for individuals with medical conditions.
                                    </p>

                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get travel insurance if I have a pre-existing medical condition?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, we offer specialized travel insurance policies that cover a wide range of pre-existing medical conditions. Our team will work with you to find the right coverage for your needs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>Does travel insurance cover emergency medical expenses for my condition?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, our travel insurance for medical conditions includes emergency medical expense coverage. This ensures that you are protected in case of a health emergency related to your condition while traveling.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What if I need to cancel my trip due to my medical condition?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our policy includes trip cancellation coverage for health-related issues, ensuring you don’t suffer financial losses if you have to cancel due to your condition.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>Why choose us for travel insurance with medical conditions?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We have years of experience working with travelers with medical needs. Our specialized policies and expert team make it easy for you to travel safely and confidently, knowing you're fully covered.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="sticky-container">
                                    <div className="insurance-details__right">
                                        <div className="insurance-details__catagories">
                                            <h3 className="insurance-details__catagories-title">Travel Insurance Categories</h3>
                                            <ul className="insurance-details__catagories-list list-unstyled">
                                                <li className="active">
                                                    <Link href="medical-travel-insurance">Medical Travel Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="pre-existing-condition-insurance">Pre-existing Condition Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="emergency-medical-travel-insurance">Emergency Medical Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="senior-travel-insurance">Senior Travel Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="multi-trip-insurance">Multi-Trip Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/travel-insurance-need-help-bg.jpg)' }}>
                                            </div>
                                            <h3 className="insurance-details__need-help-title">
                                                Need Assistance with Medical Travel Insurance?
                                            </h3>
                                            <div className="insurance-details__need-help-btn-box">
                                                <Link href="/contact" className="insurance-details__need-help-btn thm-btn">FIND SOLUTION</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Cta/>
                </section>
                {/* Insurance Details End */}
            </Layout>
        </>
    );
}
