'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';
import Brand from '@/components/sections/home1/Brand';

export default function HealthInsuranceConditionsPage() {
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
                breadcrumbTitle="Health Insurance for Medical Conditions" 
                backgroundImage="/assets/images/services/health-med-bg.jpg" 
                description="Our experienced team of Health Insurance Specialists helps individuals with medical conditions find the right coverage for their needs."
                ctaText="Get a Health Insurance Quote" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers"
            >
                <Brand />
                
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Health Insurance Options for Pre-Existing Conditions
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Finding the right health insurance can be challenging if you have a pre-existing medical condition. However, our team specializes in helping people with various medical backgrounds secure the coverage they need. No matter your condition, we're here to guide you through the process.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/health-med-1.jpeg" alt="Health Insurance for Medical Conditions" />
                                    </div>
                                    <h3 className="insurance-details__title-2">How Medical Conditions Impact Health Insurance Options</h3>
                                    <p className="insurance-details__text-2">
                                        Pre-existing conditions such as diabetes, asthma, heart disease, and mental health concerns may influence the type of health insurance coverage you can access. However, we collaborate with numerous insurers who offer customized policies that cater to individual health needs.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Assistance regardless of your medical condition.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access to a broad network of health insurers for the best deals.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Custom health coverage options tailored to individual needs.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="insurance-details__title-2">Frequently Asked Questions</h3>
                                    <p className="insurance-details__text-2">
                                        We understand that health insurance can be confusing, especially if you have specific medical needs. Here are answers to common questions about getting health insurance with pre-existing conditions.
                                    </p>

                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get health insurance if I have a pre-existing medical condition?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, many health insurance providers offer policies for individuals with pre-existing conditions. Some policies may include a waiting period, but our specialists can help you navigate your options.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>Will my condition affect my premium?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Premiums may be affected based on the level of risk associated with your condition. Our team is dedicated to finding you competitive rates while considering your health requirements.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What types of medical conditions are covered?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We assist clients with a range of conditions including but not limited to diabetes, heart disease, asthma, cancer, and mental health issues. Our goal is to provide coverage that aligns with your specific health needs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>How can our team help you find coverage?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We work with a network of insurance providers specializing in covering people with medical conditions. Our team’s experience ensures that you get a policy that meets your health and budget needs.
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
                                                    <Link href="business-health-insurance">Business Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="pre-existing-conditions">Pre-Existing Conditions<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="mental-health-insurance">Mental Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/insurance-details-need-help-bg.jpg)' }}>
                                            </div>
                                            <h3 className="insurance-details__need-help-title">
                                                Need Help Finding the Right Health Insurance?
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
