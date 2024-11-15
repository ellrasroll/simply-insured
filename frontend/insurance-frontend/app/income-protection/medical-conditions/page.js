'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';

export default function Home() {
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
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Medical Conditions for Income Protection" 
                backgroundImage="/assets/images/services/income-protection-bg.jpg"
                description="Our independent team of Medical Insurance Specialists are the top rated in the UK with over 30 years of expertise to get you the best cover for your Family, Home, Income and Health."
                ctaText="Get a Quote in Minutes" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" // Replace with the actual path of the icon
                iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers"
            >
                {/* Income Protection Details Start */}
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Medical Conditions and Your Income Protection Options
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Securing income protection insurance can be essential if you have a pre-existing medical condition. This type of coverage is designed to replace a portion of your income if you’re unable to work due to illness or injury. We provide tailored solutions that take your health history into account, so you can have peace of mind knowing your finances are protected.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/income-protection-img.jpg" alt="Medical Conditions and Income Protection" />
                                    </div>
                                    <h3 className="insurance-details__title-2">How Medical Conditions Affect Income Protection</h3>
                                    <p className="insurance-details__text-2">
                                        Medical conditions can impact the coverage options available to you for income protection insurance, including benefit amounts and premiums. Conditions like diabetes, heart disease, and chronic illnesses may lead insurers to assess risk differently. However, we work with providers that offer competitive options for people with various medical histories.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Commitment</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Comprehensive support regardless of your medical history.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access to a variety of income protection options tailored to your needs.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Peace of mind knowing your income is protected.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3 className="insurance-details__title-2">Your Income Protection Options Explained</h3>
                                    <p className="insurance-details__text-2">
                                        We believe everyone deserves financial security, even if health conditions make it more challenging. Our team specializes in finding income protection solutions for individuals with medical conditions, working with insurers who understand these complexities.
                                    </p>
                                    
                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key === 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get income protection with a pre-existing medical condition?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, you can. Although some medical conditions may affect the terms of your coverage, we work with insurers who can provide options tailored to your health needs, helping ensure you’re financially protected.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key === 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How does my medical condition affect my income protection premium?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Medical conditions may impact the cost of your income protection premium. Insurers assess risk based on health history, but our team strives to help you find the most competitive rates by working with specialized providers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key === 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What types of medical conditions can we cover for income protection?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We cover a wide range of medical conditions, including diabetes, asthma, heart conditions, and even some mental health conditions. No matter your health history, we aim to find options that suit your specific needs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key === 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>How can we assist you in securing income protection?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our experience and network of providers enable us to offer personalized services for income protection. We connect you with insurers who are willing to provide coverage, even with medical conditions, ensuring you have financial security when it matters most.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
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
                                                <li>
                                                    <Link href="life-insurance">Life Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li className="active">
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
                    </div>
                    <Cta/>
                </section>
                
                {/* Income Protection Details End */}
            </Layout>
        </>
    );
}
