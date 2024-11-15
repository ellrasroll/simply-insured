'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* About One Start */}
        <section className="about-one">
            <div className="about-one__shape-2 float-bob-y">
                <img src="/assets/images/shapes/about-one-shape-2.png" alt=""/>
            </div>
            <div className="about-one__shape-3 float-bob-x">
                <img src="/assets/images/shapes/about-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <img src="/assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src="/assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-one__client-box">
                                    <div className="about-one__client-box-bg"
                                        style={{ backgroundImage: 'url(/assets/images/shapes/about-one-client-box-bg-shape.png)' }} >
                                    </div>
                                    <div className="about-one__client-img">
                                        <img src="/assets/images/resources/about-one-client-img.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__client-content">
                                        <div className="about-one__count count-box">
                                            <h3 className="count-text">5.0</h3>
                                            <span>K</span>
                                        </div>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                                <div className="about-one__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="about-one__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="about-one__shape-1 float-bob-x">
                                    <img src="/assets/images/shapes/about-one-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">KNOW ABOUT SIMPLY INSURED</p>
                                </div>
                                <h2 className="section-title__title">Comprehensive Insurance Solutions Made Simple</h2>
                            </div>
                            <p className="about-one__text-1">At Simply Insured, we believe that getting insurance shouldn't be complicated.
                            That's why we scan the entire market to find you the best deal, providing a wide range of insurance plans that cater to your unique needs, all while keeping the process straightforward and stress-free.</p>
                        <div className="about-one__text-box">
                            <div className="about-one__text-box-shape">
                                <img src="/assets/images/shapes/about-one-text-box-shape.png" alt=""/>
                            </div>
                            <div className="about-one__text-box-icon">
                                <span className="icon-file-1"></span>
                            </div>
                            <p className="about-one__text-box-text">Our mission is to make sure you feel protected, all with a team dedicated to making insurance simple and accessible.</p>

                            </div>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Free, No-Obligation Insurance Quotes</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Experienced & Qualified Insurance Experts</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Wide Variety of Coverage Options</p>
                                </li>
                            </ul>
                            <div className="about-one__btn-and-contact">
                                <div className="about-one__btn-box">
                                    <Link href="contact" className="about-one__btn thm-btn">Free Quote</Link>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> 
        {/* About One End */}
        </>
    )
}
