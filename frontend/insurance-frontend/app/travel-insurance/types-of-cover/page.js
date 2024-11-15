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
                backgroundImage="/assets/images/services/travel-insurance-activities-bg.jpg" 
                description="Specialized travel insurance plans designed to cover a wide range of activities and sports, ensuring your adventure is safe and secure."
                ctaText="Get Your Travel Insurance Quote Today" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Trusted by thousands of adventurous travelers for sports and activities insurance"
            >
                <Brand />
                
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Coverage for Activities & Sports While Traveling
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        For those with an adventurous spirit, engaging in sports and activities during travel requires specialized insurance. We offer comprehensive travel insurance plans that cover various activities, ensuring you’re protected every step of the way.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/travel-insurance-sports.jpg" alt="Travel Insurance for Activities & Sports" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Why Choose Travel Insurance for Sports & Activities?</h3>
                                    <p className="insurance-details__text-2">
                                        Standard travel insurance may not cover all sports and activities. Our plans include coverage for high-risk activities, giving you the confidence to explore and experience new adventures safely.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise to Adventure Seekers</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Comprehensive coverage for a wide range of sports and activities.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Protection against accidents, injuries, and equipment loss.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>24/7 support and assistance during your adventures.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="insurance-details__title-2">Common Questions About Sports & Activities Coverage</h3>
                                    <p className="insurance-details__text-2">
                                        We know that engaging in activities can come with uncertainties. Here are some of the most frequently asked questions about our travel insurance coverage for sports and activities.
                                    </p>

                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>What activities and sports are covered under this insurance?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our travel insurance covers a variety of activities, including skiing, snowboarding, hiking, water sports, and more. High-risk activities may require additional coverage.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>Does this insurance cover sports injuries?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, our insurance includes coverage for injuries resulting from sports and activities. It ensures you have access to emergency medical care if an accident occurs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What if my sports equipment gets lost or damaged?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our policy covers loss or damage to sports equipment, ensuring you don’t face financial loss if something happens to your gear during your travels.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>How do I make a claim if something goes wrong?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Making a claim is straightforward. Contact our 24/7 support team, and they will guide you through the claims process to ensure a smooth experience.
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
                                                    <Link href="water-sports-insurance">Water Sports Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="mountaineering-insurance">Mountaineering Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/travel-insurance-need-help-bg.jpg)' }}>
                                            </div>
                                            <h3 className="insurance-details__need-help-title">
                                                Need Help with Travel Insurance for Sports?
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
