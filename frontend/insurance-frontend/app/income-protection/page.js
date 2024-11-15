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
                breadcrumbTitle="The UK's #1 Income Protection Experts"
                backgroundImage="/assets/images/services/income-protection-bg-1.jpg"
                description="Our expert team specializes in providing income protection insurance tailored to your needs. We are here to help you secure your income and protect your financial future."
                ctaText="Get Your Personalized Quote"
                ctaLink="/contact"
                icon="/assets/images/reviews/feefo.png" // Replace with the actual path of the icon
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
                                        Income Protection and Your Financial Security
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Income protection insurance is vital to ensuring your financial stability in the event that you are unable to work due to illness or injury. Our team is here to help you find the best income protection options available to suit your lifestyle.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/income-protection-bg.jpg" alt="Income Protection Insurance" />
                                    </div>
                                    <h3 className="insurance-details__title-2">How Income Protection Works</h3>
                                    <p className="insurance-details__text-2">
                                        Income protection is designed to replace a portion of your lost income if you are unable to work due to illness or injury. It provides a financial safety net to ensure that you can continue to meet your financial commitments during challenging times.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>We help you protect your income, no matter your profession.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Access to a range of income protection policies tailored to your needs.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Get peace of mind with coverage that ensures financial stability during illness or injury.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3 className="insurance-details__title-2">Your Income Protection Options Explained</h3>
                                    <p className="insurance-details__text-2">
                                        Understanding income protection options can be confusing, but we make it simple. We’ll guide you through the different policies available, helping you choose the right one to secure your future, even if you're unable to work.
                                    </p>
                                    
                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>What is income protection insurance?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Income protection insurance replaces a portion of your income if you're unable to work due to illness, injury, or disability, helping you stay financially secure.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How does income protection work?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Once you're unable to work due to illness or injury, income protection insurance replaces part of your lost income. The amount depends on the policy you choose.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>Can I get income protection if I'm self-employed?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, income protection is available for self-employed individuals. We can help you find the best policy for your situation, ensuring you're covered in case of illness or injury.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>How much does income protection insurance cost?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            The cost of income protection insurance varies depending on factors like your age, occupation, and the level of coverage you choose. Our experts can help you find an affordable policy that fits your needs.
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
                                                Need Help Finding the Right Coverage?
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
                    <Cta />
                </section>
                {/* Insurance Details End */}
            </Layout>
        </>
    );
}
