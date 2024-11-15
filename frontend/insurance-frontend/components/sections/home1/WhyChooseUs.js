'use client'
import Link from "next/link"

export default function WhyChooseUs() {
    return (
        <>

     {/* Why Choose One Start  */}
        <section className="why-choose-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="why-choose-one__img-box">
                                <div className="why-choose-one__img">
                                    <img src="assets/images/resources/why-choose-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="why-choose-one__img-2">
                                    <img src="assets/images/resources/why-choose-one-img-2.jpg" alt=""/>
                                    <div className="why-choose-one__experience-box">
                                        <div className="why-choose-one__count count-box">
                                            <h3 className="count-text">24</h3>
                                        </div>
                                        <p>YEARS
                                            <br/> WORKING
                                            <br/> EXPERIENCE</p>
                                    </div>
                                </div>
                                <div className="why-choose-one__img-3">
                                    <img src="assets/images/resources/why-choose-one-img-3.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">WHY CHOOSE SIMPLY INSURED</p>
                                </div>
                                <h2 className="section-title__title">What Makes Us Different From Others</h2>
                            </div>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-easy-process"></span>
                                    </div>
                                    <div className="content">
                                        <h3>We Make Insurance Simple</h3>
                                        <p>We cut through the jargon to provide you with straightforward insurance options that are easy to understand and apply for. No more confusion or stress.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-free-advice"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Free Expert Advice</h3>
                                        <p>Our team of experienced insurance experts are here to guide you, offering unbiased advice to help you find the right plan without any cost or pressure.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-best-deal"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Finding You the Best Deal</h3>
                                        <p>We scan the entire market to ensure you get the best value for your money. We compare all available options and present the ones that fit your needs perfectly.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose One End  */}
           
        </>
    )
}
