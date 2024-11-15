'use client'
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'

export default function Video() {
    const [isVideoOpen, setVideoOpen] = useState(false)

    return (
        <>
            {/* Video One Start */}
            <section className="video-one">
                <div className="video-one__bg"
                    style={{ backgroundImage: 'url(assets/images/backgrounds/video-one__bg.jpg)' }} >
                </div>
                <div className="video-one__shape-1">
                    <img src="assets/images/shapes/video-one__shape-1.png" alt="" />
                </div>
                <div className="video-one__shape-2">
                    <img src="assets/images/shapes/video-one__shape-2.png" alt="" />
                </div>
                <div className="video-one__shape-3">
                    <img src="assets/images/shapes/video-one__shape-3.png" alt="" />
                </div>
                <div className="video-one__shape-4">
                    <img src="assets/images/shapes/video-one__shape-4.png" alt="" />
                </div>
                <div className="video-one__shape-5">
                    <img src="assets/images/shapes/video-one__shape-5.png" alt="" />
                </div>
                <div className="container">
                    <div className="video-one__inner">
                        <div className="video-one__icon-box">
                            <a onClick={() => setVideoOpen(true)} className="video-one__icon"><span
                                className="icon-play-2"></span></a>
                            <a onClick={() => setVideoOpen(true)} className="video-one__curved-circle-box">
                                <div className="curved-circle">
                                    <span className="curved-circle--item">
                                        <ReactCurvedText width='240'
                                            height='240'
                                            cx='120'
                                            cy='120'
                                            rx='90'
                                            ry='90'
                                            startOffset='0'
                                            reversed={true}
                                            text='QUALITY INSURANCE SERVICE COMPANY FOR YOUR FUTURE'
                                            textProps={{ "style": { "fontSize": "20" } }}
                                            textPathProps={{ "fill": "#ffffff" }}
                                            tspanProps={null}
                                            ellipseProps={null}
                                            svgProps={null}
                                        />
                                    </span>
                                </div>{/* /.curved-circle */}
                            </a>
                        </div>
                    </div>
                    {isVideoOpen && (
                        <div className="video-overlay">
                            <div className="video-container">
                                <video controls autoPlay width="100%" onEnded={() => setVideoOpen(false)}>
                                    <source src="/assets/videos/insurancevideo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <button className="close-btn" onClick={() => setVideoOpen(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* Video One End */}
        </>
    )
}
