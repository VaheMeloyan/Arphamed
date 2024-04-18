import React, { useEffect, Component } from 'react';
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import { dynamic } from '../dynamic.js';
import { ServicesSideBar } from '../Components/ServicesSideBar.js';

function Cardio() {

  return (<>
    <Header />
    {/* page-title */}
    <div className="ttm-page-title-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box ttm-textcolor-white">
              <div className="page-title-heading">
                <h1 className="title">Cardiology Services</h1>
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
                    <span>Cardiology Services</span>
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
    <div className="site-main">
      {/* sidebar */}
      <div className="sidebar ttm-sidebar-left ttm-bgcolor-white clearfix">
        <div className="container">
          {/* row */}
          <div className="row">
            <ServicesSideBar />

            <div className="col-lg-9 content-area">
              {/* ttm-service-single-content-are */}
              <div className="ttm-service-single-content-area">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="ttm_single_image-wrapper mb-35">
                      <img
                        className="img-fluid"
                        src="images/blog/blog-two-1200x800.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ttm-service-description">
                      <div className="mb-20">
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur.
                        </p>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don’t look{" "}
                          <a href="cardiology-services.html#">
                            vitae porta nulla turpis
                          </a>
                          . If you are going to use a passage of Lorem Ipsum,
                          you need to be sure there isn’t anything embarrassing
                          hidden in the middle of text. All the Lorem Ipsum
                          generators
                        </p>
                      </div>
                      <h4>Who should consider a cardiac rehab program?</h4>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia et iusto odio dignissimos ducimus.
                      </p>
                      {/* row */}
                      <div className="row pt-15 pb-15">
                        <div className="col-sm-6">
                          <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                indignation and dislike men pleasure
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                pleasure is to be welcomed annoying
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                pursue pleasure rationally encounter
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                physical exercise, except to obtain
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Easy and Affordable Billing
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                master-builder of human happiness
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Feel like you are at Home Services
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                praising pain was born
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                shrinking from toil and pain
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                annoying consequences
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* row end */}
                      <div className="row pt-15 mb_10">
                        <div className="col-sm-12">
                          <h4>Our Cardiology Specialist</h4>
                          <div className="sep_holder_box width-100 mb-20">
                            <span className="sep_holder">
                              <span className="sep_line" />
                            </span>
                            <span className="sep_holder">
                              <span className="sep_line" />
                            </span>
                          </div>
                          <div className="row ttm-boxes-row-wrapper">
                            {dynamic['team'].slice(0, 3).map((dynamic) =>
                              <div className="col-sm-4 ttm-box-col-wrapper">
                                {/* featured-imagebox-team */}
                                <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
                                  <div className="featured-thumbnail">
                                    <img
                                      className="img-fluid"
                                      src={dynamic.img}
                                      alt="image"
                                    />
                                  </div>
                                  <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">
                                      <a href="team-details">
                                        <i className="ti ti-plus" />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="featured-content featured-content-team">
                                    <div className="ttm-team-position">
                                      {dynamic.content}
                                    </div>
                                    <div className="featured-title">
                                      <h5>
                                        <a href="team-details">
                                          {dynamic.title}
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ttm-service-single-content-are end */}
            </div>
          </div>
          {/* row end */}
        </div>
      </div>
      {/* sidebar end */}
    </div>
    {/*site-main end*/}

    <a id="totop" href="cardiology-services.html#top">
      <i className="fa fa-angle-up" />
    </a>
    {/*back-to-top end*/}

    <Footer />
  </>
  );
}
export {
  Cardio
};
