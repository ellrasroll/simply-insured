'use client';

import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Quote() {
    // State to track the currently selected insurance type
    const [activeIndex, setActiveIndex] = useState(1);
    // State to store form input values
    const [formData, setFormData] = useState({ name: '', dob: '', email: '', phone: '' });
    // State to store the response message after form submission
    const [message, setMessage] = useState('');

    // Function to handle click events for selecting an insurance type
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    // Function to handle changes in form input fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

    // Regular expression to validate phone number format
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(formData.phone)) {
        setMessage('Please enter a valid 11-digit phone number.');
        return;
    }
          // Regular expression to validate date of birth format (YYYY-MM-DD)
          const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
          if (!dobRegex.test(formData.dob)) {
              setMessage('Please enter a valid date of birth in the format DD/MM/YYYY.');
              return;
          }

        // Determine the selected insurance type based on activeIndex
        const insuranceType = activeIndex === 1 ? "Life Insurance" :
            activeIndex === 2 ? "Income Protection Insurance" :
            activeIndex === 3 ? "Travel Insurance" :
            activeIndex === 4 ? "Business Insurance" :
            "Health Insurance";

        // Prepare email parameters including form data and selected insurance type
        const emailParams = {
            ...formData,
            insurance_type: insuranceType,
        };

        // Use EmailJS to send the form data via email
        emailjs.send('service_simplyinsured', 'template_dmvva9s', emailParams, 'MicOLdxE1vPTo6PW8')
            .then((result) => {
                // Display success message and reset form data
                setMessage('Thank you for your quote request. We will get back to you shortly!');
                setFormData({ name: '', dob: '', email: '', phone: '' });
            }, (error) => {
                // Display error message if the email fails to send
                setMessage('An error occurred, please try again later.');
            });
    };

    return (
        <>
            {/* Get Quote Start */}
            <section className="get-quote">
                <div className="get-quote__shape-4 float-bob-x">
                    <img src="assets/images/shapes/get-quote-shape-4.png" alt="" />
                </div>
                <div className="get-quote__shape-5 float-bob-y">
                    <img src="assets/images/shapes/get-quote-shape-5.png" alt="" />
                </div>
                <div className="get-quote__shape-7 float-bob-y">
                    <img src="assets/images/shapes/get-quote-shape-7.png" alt="" />
                </div>
                <div className="get-quote__shape-8 float-bob-x">
                    <img src="assets/images/shapes/get-quote-shape-8.png" alt="" />
                </div>
                <div className="container">
                    <div className="get-quote__inner">
                        <div className="row tabs-box">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="get-quote__left clearfix">
                                    <div className="get-quote__shape-6 float-bob-y">
                                        <img src="assets/images/shapes/get-quote-shape-6.png" alt="" />
                                    </div>
                                    <div className="get-quote__tab-box clearfix">
                                        <ul className="tab-buttons clearfix list-unstyled">
                                            <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                                <div className="get-quote__tab-btn-content">
                                                    <div className="get-quote__tab-icon">
                                                        <span className="icon-life-insurance-1"></span>
                                                    </div>
                                                    <div className="get-quote__tab-text-box">
                                                        <p className="get-quote__tab-text">Life</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                                <div className="get-quote__tab-btn-content">
                                                    <div className="get-quote__tab-icon">
                                                        <span className="icon-insurance-1"></span>
                                                    </div>
                                                    <div className="get-quote__tab-text-box">
                                                        <p className="get-quote__tab-text">Income Protection</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                                <div className="get-quote__tab-btn-content">
                                                    <div className="get-quote__tab-icon">
                                                        <span className="icon-home-insurance"></span>
                                                    </div>
                                                    <div className="get-quote__tab-text-box">
                                                        <p className="get-quote__tab-text">Travel</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                                <div className="get-quote__tab-btn-content">
                                                    <div className="get-quote__tab-icon">
                                                        <span className="icon-briefcase"></span>
                                                    </div>
                                                    <div className="get-quote__tab-text-box">
                                                        <p className="get-quote__tab-text">Business</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                                <div className="get-quote__tab-btn-content">
                                                    <div className="get-quote__tab-icon">
                                                        <span className="icon-health-insurance"></span>
                                                    </div>
                                                    <div className="get-quote__tab-text-box">
                                                        <p className="get-quote__tab-text">Health</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="get-quote__right">
                                    <div className="tabs-content">
                                        {[1, 2, 3, 4, 5].map((index) => (
                                            <div key={index} className={activeIndex == index ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                                <div className="get-quote__content">
                                                    <p className="get-quote__tagline">GET FREE QUOTE</p>
                                                    <h2 className="get-quote__title">{activeIndex == 1 ? "Life Insurance" : activeIndex == 2 ? "Income Protection Insurance" : activeIndex == 3 ? "Travel Insurance" : activeIndex == 4 ? "Business Insurance" : "Health Insurance"}</h2>
                                                    <form className="get-quote__form" onSubmit={handleSubmit}>
                                                        <div className="get-quote__content-box">
                                                            <div className="get-quote__input-box">
                                                                <input type="text" placeholder="Your Full Name" name="name" value={formData.name} onChange={handleChange} required />
                                                            </div>
                                                            <div className="get-quote__input-box">
                                                                <input type="text" placeholder="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} required />
                                                            </div>
                                                            <div className="get-quote__input-box">
                                                                <input type="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} required />
                                                            </div>
                                                            <div className="get-quote__input-box">
                                                                <input type="text" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                                                            </div>
                                                        </div>
                                                        <div className="get-quote__content-bottom">
                                                            <button type="submit" className="thm-btn get-quote__btn">GET YOUR QUOTE</button>
                                                        </div>
                                                    </form>
                                                    {message && <p className="get-quote__thank-you-message">{message}</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Get Quote End */}
        </>
    );
}
