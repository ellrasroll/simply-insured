'use client';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function Page() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Anxiety">
        <section className="insurance-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="insurance-details__left">
                  <h3 className="insurance-details__title-1">
                    All About Anxiety Insurance
                  </h3>
                  <p className="insurance-details__text-1">
                    Here at Simply Insured, we provide specialized insurance coverage for individuals dealing with anxiety. Our aim is to support you with the best coverage options available.
                  </p>
                  <div className="insurance-details__img-1">
                    <img src="assets/images/services/insurance-details-img-6.jpg" alt="" />
                  </div>
                  <h3 className="insurance-details__title-2">Benefits of Anxiety Insurance</h3>
                  <p className="insurance-details__text-2">
                    Anxiety can make daily living a challenge. We at Simply Insured understand these difficulties and are here to provide the necessary financial support through tailored insurance plans.
                  </p>

                  {/* FAQ Section */}
                  <div className="insurance-details__faq">
                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                      <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                        <div className="accrodion-title">
                          <h4>What is Anxiety Insurance?</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Anxiety Insurance is specifically designed to cover medical, financial, or other costs associated with managing anxiety. Simply Insured is dedicated to helping clients face anxiety challenges with financial protection.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="insurance-details__right">
                  <div className="insurance-details__catagories">
                    <h3 className="insurance-details__catagories-title">Categories</h3>
                    <ul className="insurance-details__catagories-list list-unstyled">
                      <li>
                        <Link href="/life-insurance/types-of-cover/life-insurance">
                          Life Insurance<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/health-insurance">
                          Health Insurance<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/income-protection/medical-conditions/asthma">
                          Asthma<span className="icon-next"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/income-protection/medical-conditions/depression">
                          Depression<span className="icon-next"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="insurance-details__contact">
                    <div className="insurance-details__contact-icon">
                      <span className="icon-telephone-1"></span>
                    </div>
                    <div className="insurance-details__contact-content">
                      <span>You can call anytime</span>
                      <p>
                        Free<Link href="tel:+997868765">+99 (786) 8765</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
