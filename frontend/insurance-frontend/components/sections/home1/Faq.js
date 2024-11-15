'use client'

import { useState } from 'react'

export default function Faq() {
    const [activeKey, setActiveKey] = useState(null)

    const handleToggle = (key) => {
        if (activeKey === key) {
            setActiveKey(null)
        } else {
            setActiveKey(key)
        }
    }

    return (
        <>
            {/* FAQ One Start */}
            <section className="faq-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-one__left">
                                <div className="faq-one__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/faq-one-shape-1.png" alt="" />
                                </div>
                                <div className="faq-one__img-box">
                                    <div className="faq-one__img">
                                        <img src="assets/images/resources/faq-one-img-1.png" alt="" />
                                    </div>
                                    <div className="faq-one__quick-box">
                                        <div className="faq-one__quick-icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <h4 className="faq-one__quick-text">Quick, Easy, and Hassle-Free</h4>
                                    </div>
                                    <div className="faq-one__policy">
                                        <div className="faq-one__policy-icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <h4 className="faq-one__policy-text">Save up to 50% on Premiums</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-one__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">COMMON QUESTIONS</p>
                                    </div>
                                    <h2 className="section-title__title">Your Insurance Questions, Answered</h2>
                                </div>
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={activeKey === 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>Can I customize my insurance policy to suit my needs?</h4>
                                        </div>
                                        {activeKey === 1 && (
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Absolutely! At Simply Insured, we offer customizable insurance plans that allow you to choose the coverage you need. Our experts are here to help tailor a policy that fits your unique requirements.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className={activeKey === 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>How do I get the best deal on my insurance?</h4>
                                        </div>
                                        {activeKey === 2 && (
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>We scan the entire market to find you the best deal available. By comparing a variety of policies and leveraging our expert advice, we ensure that you receive the best coverage at the most affordable price.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className={activeKey === 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>What happens if I need to make a claim?</h4>
                                        </div>
                                        {activeKey === 3 && (
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Filing a claim with Simply Insured is straightforward. Our support team will guide you through every step of the process to ensure your claim is processed quickly and efficiently, providing you with the support you need when it matters most.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className={activeKey === 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>What types of insurance do you provide?</h4>
                                        </div>
                                        {activeKey === 4 && (
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Simply Insured offers a wide range of insurance solutions, including health, life, travel, and income protection. We strive to make insurance simple by offering comprehensive coverage options that meet your needs and give you peace of mind.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ One End */}
        </>
    )
}
