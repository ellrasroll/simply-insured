'use client';
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Cta from '@/components/sections/home1/Cta';
import Brand from '@/components/sections/home1/Brand';

export default function OccupationsSportsHealthInsurancePage() {
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
                breadcrumbTitle="Health Insurance for High-Risk Occupations and Sports" 
                backgroundImage="/assets/images/services/health-sports-bg.jpg" 
                description="Our dedicated team provides specialized health insurance solutions for individuals in high-risk occupations and those involved in extreme sports."
                ctaText="Get Your Specialized Quote" 
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" 
                iconDescription="Trusted by athletes and professionals in high-risk fields"
            >
                <Brand />
                
                <section className="insurance-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="insurance-details__left">
                                    <h3 className="insurance-details__title-1">
                                        Health Insurance for High-Risk Occupations and Sports
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Whether you're in a high-risk occupation or involved in extreme sports, securing the right health insurance can be essential. Our tailored policies are designed to meet the specific risks associated with physically demanding or adventurous activities.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/health-occupation-1.jpg" alt="Health Insurance for High-Risk Occupations and Sports" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Why Choose Specialized Health Insurance?</h3>
                                    <p className="insurance-details__text-2">
                                        Regular health insurance policies may not cover injuries or conditions related to high-risk jobs or extreme sports. Our specialized plans offer peace of mind and comprehensive protection for those who face higher risks in their professions or hobbies.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise to You</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Coverage designed for high-risk professions and activities.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Flexible policies tailored to your specific occupation or sport.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Experienced support team dedicated to high-risk coverage needs.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="insurance-details__title-2">Frequently Asked Questions</h3>
                                    <p className="insurance-details__text-2">
                                        Here are some answers to common questions regarding health insurance for those in high-risk occupations and sports.
                                    </p>

                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get health insurance if I'm in a high-risk occupation?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, we provide health insurance policies specifically for individuals in high-risk occupations. Our team understands the unique needs of your job and can recommend suitable coverage options.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>What types of sports are covered under specialized health insurance?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            We offer health insurance for a variety of sports, including extreme activities such as rock climbing, skiing, surfing, and more. Reach out to learn more about specific sports coverage.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>Does this coverage include accidental injuries on the job?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, our policies are designed to include coverage for accidents and injuries that may occur on the job or during sports activities, depending on the specific policy.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>Why choose our insurance team for high-risk coverage?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Our team specializes in high-risk insurance solutions. We work closely with top insurers to find policies that offer comprehensive coverage, and our expertise ensures you get the best advice for your unique needs.
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
                                            <h3 className="insurance-details__catagories-title">Insurance Categories</h3>
                                            <ul className="insurance-details__catagories-list list-unstyled">
                                                <li className="active">
                                                    <Link href="occupational-health-insurance">Occupational Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="sports-health-insurance">Sports Health Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="income-protection">Income Protection<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="critical-illness-cover">Critical Illness Cover<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="family-insurance">Family Insurance<span className="icon-next"></span></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="insurance-details__need-help">
                                            <div className="insurance-details__need-help-bg"
                                                style={{ backgroundImage: 'url(/assets/images/backgrounds/insurance-details-need-help-bg.jpg)' }}>
                                            </div>
                                            <h3 className="insurance-details__need-help-title">
                                                Need Help with High-Risk Health Insurance?
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
