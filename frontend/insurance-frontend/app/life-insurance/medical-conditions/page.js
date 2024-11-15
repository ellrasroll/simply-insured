'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';
import Brand from '@/components/sections/home1/Brand';

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
    breadcrumbTitle="The UK's #1 Medical Conditions Insurance Experts" 
    backgroundImage="/assets/images/services/insurance-details-img-4.jpg" 
    description="Our independent team of Medical Insurance Specialists are the top rated in the UK with over 30 years of expertise to get you the best cover for your Family, Home, Income and Health."
    ctaText="Get a Quote in Minutes" 
    ctaLink="/contact"
    icon="/assets/images/reviews/feefo.png" // Replace with the actual path of the icon
    iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers"
>
    <Brand/>
                {/* Insurance Details Start */}
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Medical Conditions and Your Life Insurance Options
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Getting life insurance can sometimes be challenging, especially if you have a pre-existing medical condition. However, having a medical condition doesn’t mean you can’t get the right insurance coverage. We specialize in providing solutions tailored to each individual's unique circumstances, regardless of their medical history.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/doctor-1.jpg" alt="Medical Conditions and Life Insurance" />
                                    </div>
                                    <h3 className="insurance-details__title-2">How Medical Conditions Can Affect Your Options</h3>
                                    <p className="insurance-details__text-2">
                                        Medical conditions can impact the type of life insurance you qualify for, the coverage amount, and the premium costs. Insurers may assess conditions such as heart disease, diabetes, asthma, or other health issues differently, which can affect your policy options. However, it's important to remember that we work with a wide range of insurers to help find the best option for you.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>We can help you regardless of your medical condition.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access a wide range of insurance providers to get the best deal.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Get peace of mind with coverage tailored to your needs.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                        <h3 className="insurance-details__title-2">Your Options Explained</h3>
                                    <p className="insurance-details__text-2">
                                                We believe that everyone deserves the chance to protect their loved ones. 
                                                Even if you have struggled to get life insurance in the past, our team of experts are ready to help. We specialize in covering those with medical conditions and understand how to navigate the complexities to find the right insurer for you.
                                    </p>
                                    
                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get life insurance if I have a medical condition?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, you can. Having a medical condition doesn't disqualify you from getting life insurance. Our team is experienced in helping individuals with various health issues, and we work closely with many providers to find you a suitable policy.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How does my medical condition affect my premium?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Your medical condition may impact the cost of your life insurance premium. Insurers evaluate the risk associated with your health and lifestyle. However, we are committed to helping you find the most competitive rates possible by working with a variety of providers.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What types of medical conditions can we cover?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We can help with a wide range of medical conditions, including but not limited to heart disease, diabetes, asthma, cancer, and mental health conditions. No matter your medical history, we strive to find coverage options that suit your needs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>How can Simply Insured help me?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Simply Insured works with numerous insurers that specialize in covering people with health conditions. Our experience and network allow us to provide personalized service and help you get the coverage you deserve.
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
                    </div>
                    <Cta/>
                </section>
                
                {/* Insurance Details End */}
            </Layout>
        </>
    );
}
