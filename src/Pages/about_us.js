// import closeIcon from "../assets/icons/close.svg";
import React, { useEffect, Component } from 'react';
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import { dynamic } from '../dynamic.js';

// var sliderJs = document.getElementById('external1')
// if(window.location.pathname !== '/' && document.getElementById('external1') !== null){
//   document.getElementById('external1').remove()
// }
function AboutUs() {

  return (
    <> <Header />
      <div className="page">
        {/* header start */}

        {/* header end */}
        {/* page-title */}
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box ttm-textcolor-white">
                  <div className="page-title-heading">
                    <h1 className="title">About Us</h1>
                    <span>About Our Hospital</span>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumb-wrapper">
                    <div className="container">
                      <div className="breadcrumb-wrapper-inner">
                        <span>
                          <a title="Go to Delmont." href="index.html" className="home">
                            <i className="themifyicon ti-home" />
                            &nbsp;&nbsp;Home
                          </a>
                        </span>
                        <span className="ttm-bread-sep">&nbsp; | &nbsp;</span>
                        <span>About Us</span>
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
        {/* page-title end */}
        {/* site-main start */}
        <div className="site-main">
          {/* experiance-section */}
          <section className="ttm-row experiance-section bg-layer break-1199-colum clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-12">
                  {/* ttm_single_image-wrapper */}
                  <div className="ttm-col-bgcolor-yes ttm-bg ttm-left-span pt-95 pb-100 res-991-pt-50 res-991-pb-50">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer ttm-bgcolor-grey" />
                    <div className="layer-content">
                      <div className="ttm_single_image-wrapper mr_240 res-1199-mr-0">
                        <img className="img-fluid" src="images/single-img-four_client.png" alt="" />
                      </div>
                      {/* ttm_single_image-wrapper end */}
                    </div>
                  </div>
                  {/* about-img end */}
                </div>
                <div className="col-lg-10 col-md-12">
                  <div className="row">
                    <div className="col-lg-3" />
                    <div className="col-lg-9">
                      <div className="pt-105 pb-30 res-1199-plr-15 res-991-pt-50">
                        {/* section title */}
                        <div className="section-title with-desc clearfix">
                          <div className="title-header">
                            <h5>WHAT WE DO</h5>
                            <h2 className="title">We Have 25 Years Experience</h2>
                          </div>
                          <div className="title-desc">
                            We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience
                          </div>
                          <div className="ttm_single_image-wrapper res-1199-mr-0 col-lg-6">
                            <img className="img-fluid" src="images/Sign.png" alt="" />
                          </div>
                          <div className='row'>
                            {
                              [...Array(3)].map((e, i) => <div key={i} className="d-flex flex-column align-items-center col-lg-3 h3">
                                <div className=" fa fa-hospital-o mb-1"></div>
                                <div className="d-flex flex-column align-items-center h5">
                                  <span>Online</span>
                                  <span>Appointment!</span>
                                </div>
                              </div>)
                            }
                          </div>
                        </div>
                        {/* section title end */}
                        {/* acardion */}
                        {/* <div className="accordion">
                        {Object.values(dynamic['aboutUs']['accordion']).map((dynamic) =>
                        <div className={'toggle '+dynamic.toggle}>
                          <div className="toggle-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="aboutus-1.html#collapseOne"
                            >
                              {dynamic.title}
                            </a>
                          </div>
                          <div className="toggle-content">
                            <div className="row">
                              <div className="col-sm-3">
                                <div className="toggle-figure res-991-mb-15">
                                  <img
                                    className="img-fluid"
                                    src={dynamic.img}
                                    alt="image"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-9">
                                <p>
{dynamic.body}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                      }
                      </div> */
                        }
                        {/* acadion end */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* row end */}
            </div>
          </section>
          {/* experiance-section end */}
          {/* fid-section */}
          <section className="ttm-row fid-section ttm-bg ttm-bgcolor-skincolor clearfix">
            <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
            <div className="container">
              <div className="row ttm-facts-colum-sep">
                <div className="col-md-3 col-sm-3 co-xs-12">
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="themifyicon ti-user" />
                    </div>
                    <div className="ttm-fid-contents">
                      <h4>
                        <span data-appear-animation="animateDigits" data-from={0} data-to={3215} data-interval={10} data-before="" data-before-style="sup" data-after="" data-after-style="sub">
                          3215
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">
                        <span>
                          Clients
                          <br />
                        </span>
                      </h3>
                    </div>
                    {/* ttm-fid-contents end */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 co-xs-12">
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="themifyicon ti-envelope" />
                    </div>
                    <div className="ttm-fid-contents">
                      <h4>
                        <span data-appear-animation="animateDigits" data-from={0} data-to={152} data-interval={5} data-before="" data-before-style="sup" data-after="" data-after-style="sub">
                          152
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">
                        <span>
                          Hospitals Rooms
                          <br />
                        </span>
                      </h3>
                    </div>
                    {/* ttm-fid-contents end */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 co-xs-12">
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="themifyicon ti-heart-broken" />
                    </div>
                    <div className="ttm-fid-contents">
                      <h4>
                        <span data-appear-animation="animateDigits" data-from={0} data-to={30} data-interval={10} data-before="" data-before-style="sup" data-after="" data-after-style="sub">
                          30
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">
                        <span>
                          Years of Experiance
                          <br />
                        </span>
                      </h3>
                    </div>
                    {/* ttm-fid-contents end */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 co-xs-12">
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="themifyicon ti-thumb-up" />
                    </div>
                    <div className="ttm-fid-contents">
                      <h4>
                        <span data-appear-animation="animateDigits" data-from={0} data-to={124} data-interval={10} data-before="" data-before-style="sup" data-after="" data-after-style="sub">
                          124
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">
                        <span>
                          Qualified Staffs
                          <br />
                        </span>
                      </h3>
                    </div>
                    {/* ttm-fid-contents end */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* fid-section end */}
          {/* team-section */}
          <section className="ttm-row team-section clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-10 col-md-10">
                  {/* section-title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>MEET OUR EXPERIENCED TEAM</h5>
                      <h2 className="title">Our Dedicated Doctors Team</h2>
                    </div>
                    <div className="title-desc">
                      We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery
                    </div>
                  </div>
                  {/* section-title end */}
                </div>
                <div className="col-lg-2 col-md-2" />
              </div>
              {/* row end */}
              {/* row */}
              <div className="row">
                <div className="wrap-team team-slide owl-carousel" data-item={4} data-nav="true" data-dots="false" data-auto="false">
                  {
                    dynamic['team'].map((dynamic) => <div key={dynamic.id} className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
                      <div style={{ height: '300px' }} className="featured-thumbnail">
                        <img className="img-fluid" src={dynamic.img} alt="image" />
                      </div>
                      <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                          <a className="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="spring-renovation" href={dynamic.img} data-rel="prettyPhoto">
                            <i className="ti ti-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="featured-content featured-content-team">
                        <div className="ttm-team-position">{dynamic.content}</div>
                        <div className="featured-title">
                          <h5>
                            <Link to="/team-details">{dynamic.title}</Link>
                          </h5>
                        </div>
                      </div>
                    </div>)
                  }
                </div>
              </div>
              {/* row end */}
            </div>
          </section>
          {/* team-section end */}
          {/* testimonial-section */}
          <section className="ttm-row broken-section bg-layer break-991-colum clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-md-5">
                  <div className="ttm-col-bgcolor-yes ttm-bg ttm-left-span ttm-bgcolor-skincolor spacing-5">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                    <div className="layer-content">
                      {/* section title */}
                      <div className="section-title with-desc clearfix">
                        <div className="title-header">
                          <h5>CLIENTS</h5>
                          <h2 className="title">Happy Patients &amp; Clients</h2>
                        </div>
                        <div className="title-desc">
                          If you need any industrial solution we are available for you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                      </div>
                      {/* section title end */}
                      <a className="ttm-btn ttm-btn-size-sm ttm-icon-btn-right ttm-btn-color-white btn-inline mt_25" href="aboutus-1.html#">
                        VIEW MORE DETAILS
                        <i className="ti ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  {/* testimonial-box */}
                  <div className="testimonial-box">
                    <div className="ttm-col-bgcolor-yes ttm-right-span ttm-bg ttm-bgcolor-darkgrey spacing-6">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                      <div className="layer-content">
                        {/* wrap-testimonial */}
                        <div className="testimonial-slide owl-carousel" data-item={1} data-nav="true" data-dots="false" data-auto="true">
                          {/* testimonials */}
                          {
                            dynamic['testimonial'].map((dynamic) => <div key={dynamic.id} className="testimonials ttm-testimonial-box-view-style1">
                              <div className="testimonial-avatar">
                                <div className="testimonial-img">
                                  <img className="img-fluid" src={dynamic.img} alt="testimonial-img" />
                                </div>
                                <div className="testimonial-caption">
                                  <h5>{dynamic.name}</h5>
                                  <label>{dynamic.subtitle}</label>
                                </div>
                              </div>
                              <div className="testimonial-content">
                                <blockquote className="ttm-testimonial-text">
                                  {dynamic.body}
                                </blockquote>
                                <div className="star-ratings">
                                  <ul className="rating">
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                    <li>
                                      <i className="fa fa-star" />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>)
                          }
                        </div>
                        {/* wrap-testimonial end */}
                      </div>
                    </div>
                  </div>
                  {/* testimonial-box end */}
                </div>
              </div>
              {/* row end */}
            </div>
          </section>
          {/* testimonial-section end */}
          {/* clientbox-section */}
          <div className="ttm-row clientbox-section ttm-bgcolor-grey mt_70 res-991-mt-0 clearfix">
            <div className="container">
              {/* row */}
              <div className="row text-center">
                <div className="col-md-12">
                  {/* ttm-client */}
                  <div className="ttm-client clients-slide owl-carousel owl-theme owl-loaded mt-5" data-item={5} data-nav="false" data-dots="false" data-auto="false">
                    {
                      dynamic['clients'].map((dynamic) => <div key={dynamic.id} className="client-box ttm-box-view-logo">
                        <div className="ttm-client-logo-tooltip" data-tooltip={dynamic.hover}>
                          <div className="client-thumbnail">
                            <img src={dynamic.img} alt="image" />
                          </div>
                        </div>
                      </div>)
                    }
                  </div>
                  {/* ttm-client end */}
                </div>
              </div>
              {/* row end */}
            </div>
          </div>
          {/* clientbox-section end */}
        </div>
        {/* site-main end */}
        <Footer />
        {/* back-to-top end */}
      </div>
      {/* page end */
      } {/* Javascript */
      } {/* Javascript end */
      } {/* <Footer/> */
      } </>
  );
}
export {
  AboutUs
};
