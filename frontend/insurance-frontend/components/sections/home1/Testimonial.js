'use client'

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}

export default function Testimonial() {
    return (
        <>
            {/* Testimonial One Start */}
            <section className="testimonial-one">
                <div className="testimonial-one__shape-1 img-bounce">
                    <img src="assets/images/shapes/testimonial-one-shape-1.png" alt="" />
                </div>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">OUR CLIENTS' AMAZING REVIEWS</p>
                        </div>
                        <h2 className="section-title__title">Why Customers Love
                            <br /> Working With Us</h2>
                    </div>
                    <div className="testimonial-one__bottom">
                        <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel thm-owl__carousel">
                            {/* Testimonial One Single Start */}
                            <SwiperSlide>
                                <div className="item">
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__quote">
                                            <img src="assets/images/icon/quote-icon-1.png" alt="" />
                                        </div>
                                        <div className="testimonial-one__text-box">
                                            <p className="testimonial-one__text">"I had been struggling to find an insurance company willing to offer me coverage due to my unique circumstances. Simply Insured not only accepted me, but they also provided a plan that was affordable and covered all my needs. I finally feel secure knowing I have the coverage I need."</p>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-img">
                                                <img src="assets/images/testimonial/testimonial-1-1.jpg" alt="" />
                                            </div>
                                            <h3 className="testimonial-one__client-name"><Link href="testimonial">Maria Johnson</Link></h3>
                                            <p className="testimonial-one__client-sub-title">Freelancer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Testimonial One Single End */}
                            
                            {/* Testimonial Two Single Start */}
                            <SwiperSlide>
                                <div className="item">
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__quote">
                                            <img src="assets/images/icon/quote-icon-1.png" alt="" />
                                        </div>
                                        <div className="testimonial-one__text-box">
                                            <p className="testimonial-one__text">"I was overwhelmed with the number of insurance options available, but Simply Insured made it simple. They compared multiple plans and provided me with better coverage options that I hadn't even considered. Their customer service was also top-notch, and I am so relieved to have the right plan now."</p>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-img">
                                                <img src="assets/images/testimonial/testimonial-1-2.jpg" alt="" />
                                            </div>
                                            <h3 className="testimonial-one__client-name"><Link href="testimonial">John Smith</Link></h3>
                                            <p className="testimonial-one__client-sub-title">Small Business Owner</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Testimonial Two Single End */}
                            
                            {/* Testimonial Three Single Start */}
                            <SwiperSlide>
                                <div className="item">
                                    <div className="testimonial-one__single">
                                        <div className="testimonial-one__quote">
                                            <img src="assets/images/icon/quote-icon-1.png" alt="" />
                                        </div>
                                        <div className="testimonial-one__text-box">
                                            <p className="testimonial-one__text">"When I needed health insurance, Oliver from Simply Insured was amazing. He took the time to explain all the options in detail and made sure I understood everything before making a decision.I now have health insurance that I am confident in, and the entire process was smooth and stress-free. Thank you"</p>
                                        </div>
                                        <div className="testimonial-one__client-info">
                                            <div className="testimonial-one__client-img">
                                                <img src="assets/images/testimonial/testimonial-1-3.jpg" alt="" />
                                            </div>
                                            <h3 className="testimonial-one__client-name"><Link href="testimonial">Alisha Martin</Link></h3>
                                            <p className="testimonial-one__client-sub-title">Consultant</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Testimonial Three Single End */}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* Testimonial One End */}
        </>
    )
}
