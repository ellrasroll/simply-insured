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
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Income Protection for Occupations & Sports" 
                backgroundImage="/assets/images/services/occupations-sports-1.jpg"
                description="Our dedicated team of Income Protection Specialists is the top-rated in the UK, with over 30 years of experience providing tailored cover for professionals, athletes, and those in high-risk occupations. We’re here to help secure the best protection for your income and future."
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" // Replace with the actual path of the icon
                iconDescription="Rated 'EXCELLENT' 5 out of 5 Stars by our Customers"

                
            >
                <Brand></Brand>
                {/* Income Protection Details Start */}
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Income Protection for High-Risk Occupations and Sports
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        For those working in high-risk occupations or participating in extreme sports, income protection insurance is a valuable safety net. It ensures that you have a steady source of income if an illness or injury prevents you from working, providing financial stability in challenging times.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/income-protection-occupations-sports.jpg" alt="Income Protection for Occupations and Sports" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Why Occupations and Sports Impact Income Protection</h3>
                                    <p className="insurance-details__text-2">
                                        Working in high-risk fields such as construction, aviation, or engaging in extreme sports like racing and mountaineering increases the likelihood of injuries. Insurers assess these risks carefully when determining income protection policies, as these factors can affect eligibility, coverage, and premiums. However, we partner with providers who offer tailored policies for individuals in these unique situations.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Commitment</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Customized income protection solutions for high-risk occupations and extreme sports.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access to insurers specializing in unique coverage needs for risky lifestyles.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Financial security with coverage tailored to your occupation or sport.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3 className="insurance-details__title-2">Understanding Your Income Protection Options</h3>
                                    <p className="insurance-details__text-2">
                                        Our goal is to ensure that individuals in high-risk professions or with adventurous lifestyles are not left without financial protection. We understand the complexities involved and work with a range of insurers to provide solutions that suit your unique circumstances.
                                    </p>
                                    
                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key === 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get income protection if I work in a high-risk occupation?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, you can. Many insurers offer policies specifically tailored for high-risk professions. Our team can guide you in finding coverage that considers the unique challenges and risks of your occupation.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key === 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How does my occupation or sport affect my income protection premium?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            High-risk occupations or extreme sports typically lead to higher premiums due to the increased likelihood of injury. However, we work with providers who offer competitive rates for individuals with these risks.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key === 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>What types of high-risk occupations and sports are covered?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We cover a variety of high-risk occupations, such as construction, aviation, and offshore work, as well as extreme sports like rock climbing, racing, and scuba diving. Our specialists can help you find a plan that aligns with your unique activities.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key === 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>How can we assist in securing income protection?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We collaborate with insurers specializing in high-risk cases, offering personalized services to help you secure income protection. Our experience and network allow us to connect you with insurers who understand and accommodate your unique needs.
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
