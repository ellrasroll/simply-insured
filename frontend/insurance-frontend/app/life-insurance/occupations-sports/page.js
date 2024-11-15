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
                breadcrumbTitle="Specialized Insurance for Occupations" 
                backgroundImage="/assets/images/backgrounds/s&o-bg.jpg" 
                description="Our expert team is dedicated to providing tailored insurance solutions for athletes, extreme sports enthusiasts, and professionals in high-risk occupations."
                ctaText="Get Your Quote Today" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers"
            >
                <Brand />
                
                {/* Insurance Details Start */}
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Insurance for Sports Enthusiasts & High-Risk Professionals
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Finding insurance coverage can be challenging if you participate in extreme sports or work in a high-risk occupation. We specialize in providing solutions tailored to individuals facing unique risks, ensuring you have peace of mind.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/sports-insurance.jpg" alt="Sports and Occupation Insurance" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Understanding Coverage for High-Risk Activities</h3>
                                    <p className="insurance-details__text-2">
                                        Insurers evaluate risks based on the type of sport or occupation, which can affect your coverage and premium costs. Whether you're an extreme sports athlete or work in a hazardous field, we collaborate with insurers to find you the best policy options.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Commitment</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Customized coverage for sports and high-risk professions.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access to a wide network of insurers specializing in high-risk policies.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Secure coverage with flexible options to meet your needs.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3 className="insurance-details__title-2">Your Coverage Options</h3>
                                    <p className="insurance-details__text-2">
                                        No matter the risks involved, our team is committed to helping you find reliable insurance solutions. We understand the unique challenges in obtaining coverage for high-risk sports and professions and work to make the process as smooth as possible.
                                    </p>
                                    
                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get life insurance as an extreme sports athlete?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, our team specializes in helping athletes and extreme sports enthusiasts secure life insurance policies that account for the unique risks associated with their activities.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How does my occupation impact my insurance premium?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            High-risk occupations may lead to higher premiums due to increased risk factors. We work with insurers who understand these risks and strive to offer the most competitive rates.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What types of sports and occupations are covered?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We can assist with coverage for a wide range of sports and occupations, including skydiving, scuba diving, construction work, firefighting, and more. Our network includes insurers experienced in handling high-risk policies.
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
                                                            Simply Insured collaborates with various insurers specializing in high-risk coverage. We leverage our experience and connections to help you find the best policy for your unique situation.
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
                                            <h3 className="insurance-details__catagories-title">Categories</h3>
                                            <ul className="insurance-details__catagories-list list-unstyled">
                                                <li className="active">
                                                    <Link href="life-insurance">Life Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="income-protection">Income Protection<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="sports-insurance">Sports Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="high-risk-occupations">High-Risk Occupations<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="travel-insurance">Travel Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/sports-occupations-need-help-bg.jpg)' }}>
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
