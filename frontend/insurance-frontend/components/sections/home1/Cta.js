import Link from "next/link";

export default function Cta() {
    return (
        <>
            <section className="cta-one cta-five">
                <div className="container">
                    <div className="cta-one__inner">
                        <div className="cta-one__bg"
                            style={{ backgroundImage: 'url(/assets/images/backgrounds/cta-three-bg-shape-2.png)' }}>
                        </div>
                        <div className="cta-one__title-box">
                            <h3>Get an Instant <span>Quote</span> Right Now</h3>
                            <p>Try it risk free - We don’t charge any fees</p>
                        </div>
                        <div className="cta-one__btn-box">
                            <Link href="contact" className="cta-one__btn thm-btn">
                                GET YOUR FREE QUOTE NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
