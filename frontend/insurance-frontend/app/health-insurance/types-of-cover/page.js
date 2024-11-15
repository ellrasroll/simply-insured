'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';
import Brand from '@/components/sections/home1/Brand';

export default function HealthInsuranceTypesPage() {
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
                breadcrumbTitle="Comprehensive Health Insurance Options" 
                backgroundImage="/assets/images/services/health-insurance-bg.jpg" 
                description="Explore our top-rated health insurance plans designed to provide comprehensive coverage for individuals, families, and businesses."
                ctaText="Get Your Health Insurance Quote Today" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Trusted by thousands of clients for outstanding health coverage"
            >
                <Brand />
                
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Types of Health Insurance Plans
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Health insurance comes in various types to meet different needs. Whether you're looking for individual, family, or business coverage, we provide a range of options tailored to ensure you and your loved ones are protected.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/types-of-health-bg.jpg" alt="Health Insurance Plans" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Why Choose Comprehensive Health Insurance?</h3>
                                    <p className="insurance-details__text-2">
                                        A comprehensive health insurance plan covers more than just basic medical expenses. It can include preventive care, emergency services, and support for chronic conditions. Our team works with top providers to find plans that fit your needs and budget.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Commitment to You</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access to a wide network of healthcare providers and hospitals.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Customized health plans to suit individual, family, and business needs.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>24/7 support for any health-related inquiries and claims assistance.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="insurance-details__title-2">Common Health Insurance Questions</h3>
                                    <p className="insurance-details__text-2">
                                        We understand that choosing the right health insurance can be confusing. Here are answers to some of the most frequently asked questions about health insurance coverage.
                                    </p>

                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>What types of health insurance plans are available?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We offer a variety of plans including individual health insurance, family health plans, group insurance for businesses, and critical illness coverage. Each plan can be tailored to meet specific health requirements.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>Does health insurance cover pre-existing conditions?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Many of our health insurance providers offer plans that cover pre-existing conditions after a waiting period. Our experts can help you find the best options based on your specific health needs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>How can I choose the best health insurance for my family?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our specialists can guide you through the process, taking into account your family's medical history, preferred healthcare providers, and budget to select the best plan for comprehensive family health coverage.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>What are the benefits of group health insurance for businesses?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Group health insurance is an excellent way to provide valuable benefits to your employees. It often includes competitive rates and additional coverage options, making it an attractive feature for businesses looking to support their team's health and wellness.
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
                                            <h3 className="insurance-details__catagories-title">Health Insurance Categories</h3>
                                            <ul className="insurance-details__catagories-list list-unstyled">
                                                <li>
                                                    <Link href="individual-health-insurance">Individual Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="family-health-insurance">Family Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="couples-health-insurance">Couples Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="contractors-health-insurance">Contractors Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="self-employed-health-insurance">Self-Employed Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="business-health-insurance">Business Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="pre-existing-conditions">Pre-Existing Conditions<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="over-50s-health-insurance">Over 50s Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="rewards-health-insurance">Rewards Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/insurance-details-need-help-bg.jpg)' }}>
                                            </div>
                                            <h3 className="insurance-details__need-help-title">
                                                Need Assistance Choosing Your Health Plan?
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
