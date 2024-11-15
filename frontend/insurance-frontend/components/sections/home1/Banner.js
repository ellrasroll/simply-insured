'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
            <section className="main-slider">
                <Swiper {...swiperOptions} className="banner-carousel">
                    {/* Slide 1 */}
                    <SwiperSlide className="slide-item">
                        <div className="item main-slider__slide-1">
                            <div className="main-slider__shape-1 img-bounce">
                                <img src="/assets/images/shapes/main-slider-shape-1.png" alt="" />
                            </div>
                            <div className="main-slider__shape-2 img-bounce">
                                <img src="/assets/images/shapes/main-slider-shape-2.png" alt="" />
                            </div>
                            <div className="main-slider__shape-3 float-bob-y">
                                <img src="/assets/images/shapes/main-slider-shape-3.png" alt="" />
                            </div>
                            <div className="main-slider__img">
                                <img src="/assets/images/resources/slider-1-1a.png" alt="Protect Your Future" />
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__section-and-text">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <p className="section-title__tagline">SECURE. TRUSTED. COMPREHENSIVE.</p>
                                            </div>
                                            <h2 className="section-title__title">Protecting What Matters
                                               </h2>
                                        </div>
                                        <p className="main-slider__text">
                                            We offer a range of health insurance plans 
                                            designed to provide the care you deserve 
                                            <br /> whenever you need it.
                                        </p>
                                    </div>
                                    <div className="main-slider__btn-and-ratting-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="/contact" className="main-slider__btn thm-btn">Get a Quote</Link>
                                        </div>
                                        <div className="main-slider__ratting">
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <span>Rated 5/5 by Our Clients</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    {/* Slide 2 */}
                    <SwiperSlide className="slide-item">
                        <div className="item main-slider__slide-2">
                            <div className="main-slider__shape-1 img-bounce">
                                <img src="/assets/images/shapes/main-slider-shape-1.png" alt="" />
                            </div>
                            <div className="main-slider__shape-2 img-bounce">
                                <img src="/assets/images/shapes/main-slider-shape-2.png" alt="" />
                            </div>
                            <div className="main-slider__shape-3 float-bob-y">
                                <img src="/assets/images/shapes/main-slider-shape-3.png" alt="" />
                            </div>
                            <div className="main-slider__img">
                                <img src="/assets/images/resources/slider-1-1a.png" alt="Health & Happiness" />
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__section-and-text">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <p className="section-title__tagline">YOUR HEALTH. OUR PRIORITY.</p>
                                            
                                            <h2 className="section-title__title">Insurance Made
                                                <br />Simple</h2>
                                                </div>
                                               
                                        </div>
                                        <p className="main-slider__text">
                                                    At Simply Insured, we provide tailored insurance solutions 
                                            to help you safeguard your future 
                                            <br /> and protect your loved ones.
                                        </p>
                                    </div>
                                    <div className="main-slider__btn-and-ratting-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="/contact" className="main-slider__btn thm-btn">Get a Quote</Link>
                                        </div>
                                        <div className="main-slider__ratting">
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <span>Trusted by Thousands</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    {/* Slide 3 */}
                    <SwiperSlide className="slide-item">
                        <div className="item main-slider__slide-3">
                            <div className="main-slider__shape-1 img-bounce">
                                <img src="/assets/images/shapes/main-slider-shape-1.png" alt="" />
                            </div>
                            <div className="main-slider__shape-2 img-bounce">
                                <img src="/assets/images/shapes/main-slider-shape-2.png" alt="" />
                            </div>
                            <div className="main-slider__shape-3 float-bob-y">
                                <img src="/assets/images/shapes/main-slider-shape-3.png" alt="" />
                            </div>
                            <div className="main-slider__img">
                                <img src="/assets/images/resources/slider-1-1a.png" alt="Secure Your Future" />
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__section-and-text">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <p className="section-title__tagline">FUTURE-READY COVERAGE</p>
                                            </div>
                                            <h2 className="section-title__title">Building a Safer 
                                                <br /> Future</h2>
                                        </div>
                                        <p className="main-slider__text">From life insurance to critical illness cover, 
                                            we ensure that you and your loved ones are 
                                            <br /> protected every step of the way.
                                        </p>
                                    </div>
                                    <div className="main-slider__btn-and-ratting-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="/contact" className="main-slider__btn thm-btn">Get a Quote</Link>
                                        </div>
                                        <div className="main-slider__ratting">
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <span>We're Here for You</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
            <div className="purple-banner">
            <img src="/assets/images/icon/green-tick.png" alt="Green Tick" className="tick-icon" />

                    PROTECTION PROMISE - 100% Conditions Covered
                </div>
                

        </>
    )
}
