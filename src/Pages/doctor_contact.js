import React, {useEffect,Component} from 'react';

// import closeIcon from "../assets/icons/close.svg";
import {Link} from "react-router-dom";
import {Footer} from '../Components/Footer.js'
import {Header} from '../Components/Header.js'
import {dynamic} from '../dynamic.js'

import * as ReactDOM from 'react-dom';
import {aasdsa} from './OurDoctors.js'
function click1(event) {
  event.currentTarget.classList.toggle('docEducationMenuElemClicked');

}
function DocCont() {
  return (<body>
    <Header/>
      <div className="page">
        {/*header start*/}

        {/* page-title */}
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box ttm-textcolor-white">
                  <div className="page-title-heading">
                    <h1 className="title">Dr. Metthew Wood</h1>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumb-wrapper">
                    <div className="container">
                      <div className="breadcrumb-wrapper-inner">
                        <span>
                          <a
                            title="Go to Delmont."
                            href="index.html"
                            className="home"
                          >
                            <i className="themifyicon ti-home" />
                            &nbsp;&nbsp;Home
                          </a>
                        </span>
                        <span className="ttm-bread-sep">&nbsp; | &nbsp;</span>
                        <span>Dr. Metthew Wood</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.col-md-12 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* page-title end*/}
        {/*site-main start*/}
        <div className="site-main single">
          <section className="ttm-row overview-section clearfix">
            <div className="ttm-team-member-single-content-wrapper ttm-team-member-view-default">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ttm-team-member-single-content">
                      <div className="ttm-social-links-wrapper">
                        <ul className="social-icons">
                          <li className="social-facebook">
                            <a
                              className="tooltip-top"
                              target="_blank"
                              href="team-details#"
                              data-tooltip="Facebook"
                            >
                              <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="social-twitter">
                            <a
                              className="tooltip-top"
                              target="_blank"
                              href="team-details#"
                              data-tooltip="Twitter"
                            >
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="social-gplus">
                            <a
                              className="tooltip-top"
                              target="_blank"
                              href="team-details#"
                              data-tooltip="Instagram"
                            >
                              <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="row">
                        <div className="col-lg-5 col-md-12">
                          {/* ttm-featured-wrapper */}
                          <div className="ttm-featured-wrapper">
                            <div className="featured-thumbnail">
                              <img
                                className="img-fluid"
                                src="images/team-member/team-details-img01.jpg"
                                alt="image"
                              />
                            </div>
                          </div>
                          {/* ttm-featured-wrapper end*/}
                        </div>
                        <div className="ttm-team-member-single-content-area col-md-12 col-lg-7">
                          <div className="ttm-team-member-content shadow-box">
                            <div className="ttm-team-member-single-list">
                              <h2 className="ttm-team-member-single-title">
                                Dr. Metthew Wood
                              </h2>
                              <h5 className="ttm-team-member-single-position">
                                Senior Dr. at Delmont
                              </h5>
                              <div className="ttm-team-member-appointment-btn-wrapper">
                                <a
                                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mb-20"
                                  href="team-details#"
                                >
                                  MAKE AN APPOINTMENT
                                </a>
                              </div>
                              <div className="ttm-team-data">
                                <div className="ttm-team-details-wrapper">
                                  <ul className="ttm-team-details-list clearfix">
                                    <li>
                                      <div className="ttm-team-list-title">
                                        <i className="fa fa-phone" /> Phone :
                                      </div>
                                      <div className="ttm-team-list-value">
                                        <a href="tel:(123)456-7890">
                                          {" "}
                                          (123) 456-7890
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="ttm-team-list-title">
                                        <i className="ti ti-email" /> Email :
                                      </div>
                                      <div className="ttm-team-list-value">
                                        <a
                                          href="mailto:info@example.com"
                                          tabIndex={0}
                                        >
                                          {" "}
                                          info@example.com
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="ttm-team-list-title">
                                        <i className="ti ti-location-pin" /> Address
                                        Info :
                                      </div>
                                      <div className="ttm-team-list-value">
                                        {" "}
                                        Los Angeles, USA, Los Angeles, USA
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ttm-team-member-single-content">
                      <div className="ttm-team-member-content">
                        <h2>Overview</h2>
                        <div className="pt-5 row">
                          <div className="col-sm-8">
                            <div className="pr-20">
                              <p>
                                Lorem Ipsum is simply dummy text of the{" "}
                                <strong>printing and typesetting industry.</strong>{" "}
                                Lorem Ipsum has been the industry’s standard dummy
                                text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a
                                type specimen book.
                              </p>
                              <p>
                                Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium, totam
                                rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto.
                              </p>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="col-md-12">
                              {/* ttm-client */}
                              <div
                                className="ttm-client clients-slide owl-carousel owl-theme owl-loaded"
                                data-item={2}
                                data-nav="false"
                                data-dots="false"
                                data-auto="false"
                              >
                              {Object.values(dynamic['global']['clients']).map((dynamic)=>  <div className="">
                                <img
                                  className="img-fluid"
                                  src="images/certf.jpg"
                                  alt=""
                                />
                                </div>
                              )}
                              </div>
                              {/* ttm-client end */}
                            </div>
                            {/* ttm_single_image-wrapper end */}
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* expertise-section */}
          <section className="ttm-row expertise-section ttm-bgcolor-grey clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-40">
                    <h3>Honors and Awards</h3>
                  </div>
                  {/*featured-icon-box*/}
                  <div className="featured-icon-box left-icon icon-align-top">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded">
                        <i className="fa fa-trophy" />
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>2018 World Health Oraganized Award</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end*/}
                  {/*featured-icon-box*/}
                  <div className="featured-icon-box left-icon icon-align-top">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-background-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded">
                        <i className="fa fa-medkit" />
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>2016 Doctor's Choice Award</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia non numquam
                          modi tempora incidunt ut labore et dolore.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end*/}
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="ttm-tabs ttm-tab-color-grey ttm-tab-style-classic res-991-mt-30 clearfix">
                    {/* tabs */}
                    <ul className="tabs">
                      <li className="tab active">
                        <a href="team-details#">Education</a>
                      </li>
                      <li className="tab">
                        <a href="team-details#">Skills</a>
                      </li>
                      <li className="tab">
                        <a href="team-details#">Experience</a>
                      </li>
                    </ul>
                    <div className="content-tab">
                      <div className="content-inner">
                        <h5>Practical Degree From NY</h5>
                        <span className="ttm-textcolor-skincolor">2016-2018</span>
                        <div className="mb-25">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni.
                          </p>
                        </div>
                        <h5>Medical University of South Carolina</h5>
                        <span className="ttm-textcolor-skincolor">2016-2018</span>
                        <div className="mb-25">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni.
                          </p>
                        </div>
                      </div>
                      <div className="content-inner">
                        {/* ttm-progress-bar */}
                        <div className="ttm-progress-bar ttm-icon-left-true">
                          <div className="ttm-icon_element-color-skincolor">
                            <i className="flaticon-dentist" />
                          </div>
                          <h4>Teeth Whitening</h4>
                          <div className="progress" data-value="90%">
                            <div className="progress-bar progress-bar-color-bar_skincolor">
                              <div className="progress-parcent">
                                <span>90</span>%
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ttm-progress-bar end */}
                        {/* ttm-progress-bar */}
                        <div className="ttm-progress-bar ttm-icon-left-true">
                          <div className="ttm-icon_element-color-skincolor">
                            <i className="flaticon-doctor-2" />
                          </div>
                          <h4>Quality Brackets</h4>
                          <div className="progress" data-value="80%">
                            <div className="progress-bar progress-bar-color-bar_skincolor">
                              <div className="progress-parcent">
                                <span>80</span>%
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ttm-progress-bar end */}
                        {/* ttm-progress-bar */}
                        <div className="ttm-progress-bar ttm-icon-left-true">
                          <div className="ttm-icon_element-color-skincolor">
                            <i className="fa fa-user-md" />
                          </div>
                          <h4>Teeth Cleaning</h4>
                          <div className="progress" data-value="90%">
                            <div className="progress-bar progress-bar-color-bar_skincolor">
                              <div className="progress-parcent">
                                <span>90</span>%
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ttm-progress-bar end */}
                      </div>
                      <div className="content-inner">
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                          aut odit aut fugit, sed quia consequuntur magni dolores
                          eos qui ratione voluptatem sequi nesciunt. Neque porro
                          quisquam est, qui dolorem ipsum.
                        </p>
                        <p>
                          quisquam est, qui dolorem ipsum quia dolor sit amet,
                          consectetur, adipisci velit, aliquam quaerat voluptatem.It
                          has survived not only five centuries, but also the leap
                          into. Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* expertise-section end */}
          {/* cta-form-section */}
          <section className="ttm-row cta-form-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pb-10">
                    <h3>Contact Me</h3>
                  </div>
                  <form
                    className="wrap-form clearfix"
                    method="post"
                    action="team-details#"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <label>
                          <span className="text-input">
                            <input
                              name="your-name"
                              type="text"
                              defaultValue=""
                              placeholder="Name*:"
                              required="required"
                            />
                          </span>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label>
                          <span className="text-input">
                            <input
                              name="your-email"
                              type="text"
                              defaultValue=""
                              placeholder="Email*:"
                              required="required"
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <label>
                          <span className="text-input">
                            <input
                              name="your-subject"
                              type="text"
                              defaultValue=""
                              placeholder="Subject*:"
                              required="required"
                            />
                          </span>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label>
                          <span className="text-input">
                            <input
                              name="your-phone"
                              type="text"
                              defaultValue=""
                              placeholder="Phone:"
                              required="required"
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <label>
                          <span className="text-input">
                            <textarea
                              name="your-message"
                              cols={40}
                              rows={3}
                              placeholder="Message*:"
                              aria-required="true"
                              defaultValue={""}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <input
                      name="submit"
                      type="submit"
                      id="submit"
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-bgcolor-skincolor mt-10"
                      defaultValue="SEND MESSAGE"
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* cta-form-section end */}
        </div>
        {/*site-main end*/}

        {/*back-to-top start*/}
        <a id="totop" href="team-details#top">
          <i className="fa fa-angle-up" />
        </a>
        {/*back-to-top end*/}
      </div>
      {/* page end */}
      {/* Javascript */}
      {/* Javascript end*/}

    <Footer/>

  </body>)

}
export {
  DocCont
};
