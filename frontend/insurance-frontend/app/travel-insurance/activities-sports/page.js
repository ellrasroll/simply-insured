'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';
import Brand from '@/components/sections/home1/Brand';

export default function TravelInsuranceActivitiesSportsPage() {
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
                breadcrumbTitle="Travel Insurance for Activities & Sports" 
                backgroundImage="/assets/images/services/travel-sports-bg.jpg" 
                description="Comprehensive travel insurance solutions tailored for adventurers, sports enthusiasts, and those engaging in high-risk activities."
                ctaText="Get Your Adventure Insurance Quote" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Rated 'EXCELLENT' by active travelers worldwide"
            >
                <Brand />
                
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Travel Insurance for Adventurous Activities & Sports
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        For those who enjoy adventure travel or extreme sports, standard travel insurance may not provide the necessary coverage. Our specialized travel insurance for activities and sports is designed to protect you while you pursue thrilling experiences worldwide.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/travel-sports-1.jpg" alt="Travel Insurance for Activities and Sports" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Why Choose Specialized Travel Insurance?</h3>
                                    <p className="insurance-details__text-2">
                                        Regular travel insurance policies may exclude coverage for high-risk sports and adventure activities. Our specialized insurance plans ensure you're covered for medical expenses, equipment loss, and emergency evacuations tailored to the risks of your chosen activity.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise to You</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Comprehensive coverage for a range of adventurous sports and activities.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Protection against unexpected medical costs and evacuations.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Assistance and support, wherever your travels take you.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="insurance-details__title-2">Frequently Asked Questions</h3>
                                    <p className="insurance-details__text-2">
                                        Here are answers to some of the most common questions about our travel insurance for activities and sports.
                                    </p>

                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>What activities are covered under adventure travel insurance?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our travel insurance covers a wide range of activities, including but not limited to skiing, snowboarding, scuba diving, rock climbing, and mountain biking. Contact us for specific details on your chosen activity.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>Will this insurance cover medical expenses related to sports injuries?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, our specialized travel insurance provides coverage for medical expenses resulting from sports-related injuries, as well as emergency medical evacuation if necessary.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>Is my sports equipment covered under this policy?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, we offer coverage options for loss, theft, or damage to your sports equipment. Please check specific policy details to understand the extent of coverage for equipment.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>Why choose us for adventure travel insurance?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our experience in providing specialized travel insurance for adventure sports means we understand the unique risks involved. We work with top providers to ensure you get the best protection while pursuing your passions.
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
                                                    <Link href="standard-travel-insurance">Standard Travel Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="adventure-travel-insurance">Adventure Travel Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="extreme-sports-insurance">Extreme Sports Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="winter-sports-insurance">Winter Sports Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="medical-travel-insurance">Medical Travel Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/travel-insurance-need-help-bg.jpg)' }}>
                                            </div>
                                            <h3 className="insurance-details__need-help-title">
                                                Need Help Choosing Your Travel Insurance?
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
