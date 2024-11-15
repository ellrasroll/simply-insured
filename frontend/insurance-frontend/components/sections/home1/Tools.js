import Link from "next/link";

export default function ToolsAndCalculators() {
    return (
        <section className="tools-and-calculators">
            <div className="container">
                <div className="tools-and-calculators__inner">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">SIMPLY INSURED</p>
                        </div>
                        <h2 className="section-title__title">TOOLS & CALcULATORS</h2>
                    </div>
                    <div className="tools-and-calculators__content">
                        <ul className="tools-and-calculators__list list-unstyled">
                            <li className="tools-and-calculators__item">
                                <Link href="tools/life-insurance-comparison">
                                    <h3>Life Insurance Compare Tool</h3>
                                    <p>Compare life insurance quotes in minutes from the UK’s top life insurance providers with Simply Insured Online. Find the best policy for your needs, hassle-free.</p>
                                </Link>
                            </li>
                            <li className="tools-and-calculators__item">
                                <Link href="tools/life-insurance-tax">
                                    <h3>Life Insurance and Tax Guide</h3>
                                    <p>Get the latest tax guidance for life insurance from our team of personal finance and tax experts. Learn how life insurance may impact your taxes and how to make the most informed decisions.</p>
                                </Link>
                            </li>
                            <li className="tools-and-calculators__item">
                                <Link href="tools/ssp-guide">
                                    <h3>Statutory Sick Pay (SSP) Guide</h3>
                                    <p>Find out how Statutory Sick Pay (SSP) works, including how much you can claim and when it gets paid out. Understand your rights and financial options when you're unwell.</p>
                                </Link>
                            </li>
                            <li className="tools-and-calculators__item">
                                <Link href="tools/life-insurance-trusts">
                                    <h3>Life Insurance Trusts Guide</h3>
                                    <p>Our team of life insurance experts explains how you can save £1,000s in tax and avoid complicated probate issues by placing your life insurance in a trust.</p>
                                </Link>
                            </li>
                            <li className="tools-and-calculators__item">
                                <Link href="tools/life-insurance-calculator">
                                    <h3>Life Insurance Calculator</h3>
                                    <p>Find out how much cover you might need to protect your family and your home if you passed away. Calculate the right coverage to ensure your loved ones are financially secure.</p>
                                </Link>
                            </li>
                            <li className="tools-and-calculators__item">
                                <Link href="tools/health-insurance-calculator">
                                    <h3>Health Insurance Calculator</h3>
                                    <p>Calculate the cost of health insurance monthly for you and your family. Compare the top private medical insurers and determine what plan suits your healthcare needs.</p>
                                </Link>
                            </li>
                            <li className="tools-and-calculators__item">
                                <Link href="tools/private-medical-costs">
                                    <h3>Private Medical Costs</h3>
                                    <p>Find out how much private medical treatments currently cost in the UK, and compare them to health insurance premiums to understand the value of coverage versus out-of-pocket expenses.</p>
                                </Link>
                            </li>
                            <li className="tools-and-calculators__item">
                                <Link href="tools/average-cost-life-insurance">
                                    <h3>Average Cost of Life Insurance</h3>
                                    <p>People often ask what the average cost of life insurance is and how much they should pay for life cover. Get all the details you need to understand pricing and make an informed decision.</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
