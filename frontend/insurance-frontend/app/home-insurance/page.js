'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Brand from '@/components/sections/home1/Brand';
import Cta from '@/components/sections/home1/Cta';

export default function Home() {
    return (
        <>
            <Layout
                breadcrumbTitle="Your Trusted Home Insurance Experts"
                backgroundImage="/assets/images/services/home-insurance-bg.jpg"
                description="Protect your home with comprehensive coverage from leading home insurance providers. Our team helps you find the perfect plan for your property, contents, and more."
                ctaText="Get Your Home Insurance Quote"
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
                                        Comprehensive Home Insurance Plans for Your Peace of Mind
                                    </h3>
                                    <p className="insurance-details__text-1">
                                        Home insurance provides you with the protection you need in case of unexpected events like fires, break-ins, or natural disasters. Whether you own or rent, our team can help you find the right coverage that suits your needs and budget.
                                    </p>
                                    <div className="insurance-details__img-1">
                                        <img src="/assets/images/services/home-insurance-1.jpg" alt="Home Insurance" />
                                    </div>
                                    <h3 className="insurance-details__title-2">Why Home Insurance is Essential</h3>
                                    <p className="insurance-details__text-2">
                                        Home insurance protects your property, belongings, and personal liability in case of accidents or disasters. It provides peace of mind, knowing that you're financially protected from potential risks.
                                    </p>
                                    <div className="insurance-details__points-and-text-box">
                                        <div className="insurance-details__points-box">
                                            <h3 className="insurance-details__points-title">Our Promise</h3>
                                            <ul className="insurance-details__points list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Comprehensive coverage to protect your home and belongings.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Tailored policies based on your home type, location, and needs.</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-check-mark-1"></span>
                                                    </div>
                                                    <p>Affordable rates with the option to add extra coverage for valuables.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3 className="insurance-details__title-2">Your Home Insurance Options Explained</h3>
                                    <p className="insurance-details__text-2">
                                        There are various options available for home insurance, from basic coverage to more comprehensive plans that protect against natural disasters, theft, and damage. Our experts will help you understand your options and select the best coverage for your home.
                                    </p>

                                    {/* FAQ Section */}
                                    <div className="insurance-details__faq">
                                        <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className="accrodion" onClick={() => handleToggle(1)}>
                                                <div className="accrodion-title">
                                                    <h4>What does home insurance cover?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Home insurance generally covers damage to your property and belongings, personal liability, and additional living expenses if you are displaced due to a disaster. It may also offer protection for accidents that occur on your property.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion" onClick={() => handleToggle(2)}>
                                                <div className="accrodion-title">
                                                    <h4>How much does home insurance cost?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            The cost of home insurance depends on several factors, including the size and value of your property, the location, your coverage needs, and any additional coverage you choose to include.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion" onClick={() => handleToggle(3)}>
                                                <div className="accrodion-title">
                                                    <h4>Do I need home insurance if I'm renting?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Yes, if you're renting, it's highly recommended to get renters' insurance. This protects your personal belongings and provides liability coverage in case of accidents that occur inside the rental property.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion" onClick={() => handleToggle(4)}>
                                                <div className="accrodion-title">
                                                    <h4>How can Simply Insured help with my home insurance?</h4>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <p>
                                                            Simply Insured works with multiple home insurance providers, offering you a wide range of policies to compare. We will help you find the best plan to meet your needs and budget, ensuring your home is properly protected.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (Call to Action Button) */}
                            <div className="col-xl-4 col-lg-5">
                                <div className="sticky-container">
                                    <div className="insurance-details__right">
                                        <div className="insurance-details__catagories">
                                            <h3 className="insurance-details__catagories-title">Categories</h3>
                                            <ul className="insurance-details__catagories-list list-unstyled">
                                                <li className="active">
                                                    <Link href="home-insurance">Home Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="life-insurance">Life Insurance<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="income-protection">Income Protection<span className="icon-next"></span></Link>
                                                </li>
                                                <li>
                                                    <Link href="health-insurance">Health Insurance<span className="icon-next"></span></Link>
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
