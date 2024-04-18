import React, { useState, Component } from 'react';

// import closeIcon from "../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import * as ReactDOM from 'react-dom';
import { dynamic } from '../dynamic.js';
import { ServicesSideBar } from '../Components/ServicesSideBar.js';

function Services() {
  return (<div>
    <Header />
    {/*page start*/}
    <div className="page sidebar-true">

      {/* page-title */}
      <div className="ttm-page-title-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box ttm-textcolor-white">
                <div className="page-title-heading">
                  <h1 className="title">Neurology Services</h1>
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
                      <span>Neurology Services</span>
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
        <div className="sidebar ttm-sidebar-left ttm-bgcolor-white break-991-colum clearfix">
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
                          src="images/services/01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ttm-service-description">
                        <h4>Professional medical service of Neurology</h4>
                        <div className="sep_holder_box width-100 mb-20">
                          <span className="sep_holder">
                            <span className="sep_line" />
                          </span>
                          <span className="sep_holder">
                            <span className="sep_line" />
                          </span>
                        </div>
                        <div className="mb-35">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam aliquet odio non porta laoreet. Vestibulum
                            in dui euismod, molestie quam porta, sagittis arcu.
                            Pellentesque vitae pulvinar urna, in dignissim nulla.
                            Mauris iaculis, tortor sed pharetra varius, purus
                            augue feugiat purus,{" "}
                            <a href="neurology-services.html#">
                              vitae porta nulla turpis
                            </a>{" "}
                            pellentesque dolor. Interdum et malesuada fames ac
                            ante ipsum primis in faucibus. Vivamus posuere posuere
                            ex, ac tincidunt turpis porta id. Aenean sed mauris
                            lacus.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam aliquet odio non porta laoreet. Vestibulum
                            in dui euismod, <b>molestie quam porta</b>, sagittis
                            arcu. Pellentesque vitae pulvinar urna.
                          </p>
                        </div>
                        <h4>Our Best Services Included</h4>
                        <div className="sep_holder_box width-100 mb-20">
                          <span className="sep_holder">
                            <span className="sep_line" />
                          </span>
                          <span className="sep_holder">
                            <span className="sep_line" />
                          </span>
                        </div>
                        {/* row */}
                        <div className="row mt-15 mb-15">
                          <div className="col-sm-6">
                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  Lorem ipsum dolor sit amet, consectetur.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  Nemo enim ipsam voluptatem voluptas.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  combined with handful of model sentence.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  accusantium doloremque laudantium.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  expedita distinctio. Nam libero tempore.
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-6">
                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  Lorem ipsum dolor sit amet, consectetur.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  Nemo enim ipsam voluptatem voluptas.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  combined with handful of model sentence.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  accusantium doloremque laudantium.
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-arrow-circle-right" />
                                <span className="ttm-list-li-content">
                                  expedita distinctio. Nam libero tempore.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* row end */}
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="mb-35">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Etiam aliquet odio non porta laoreet.
                                Vestibulum in dui euismod, molestie quam porta,
                                sagittis arcu. Pellentesque vitae pulvinar urna
                                lorem ipsum dolor sit amet, consectetur adipiscing
                                elit..
                              </p>
                            </div>
                            <a
                              className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-icon-btn-right ttm-btn-style-fill ttm-btn-color-skincolor mb-20"
                              href="neurology-services.html#"
                            >
                              {" "}
                              Download PDF
                              <i className="fa fa-file-pdf-o" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-15 mb_10">
                        <div className="col-sm-12">
                          <h4>Our Special Doctors</h4>
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
                              <div key={dynamic.id} className="col-sm-4 ttm-box-col-wrapper">
                                {/* featured-imagebox-team */}
                                <div className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
                                  <div style={{ height: '300px' }} className="featured-thumbnail">
                                    <img

                                      className="img-fluid"
                                      src={dynamic.img}
                                      alt="image"
                                    />
                                  </div>
                                  <div className="ttm-box-view-overlay">
                                    <div className="featured-iconbox ttm-media-link">
                                      <Link to="/team-details">
                                        <i className="ti ti-plus" />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="featured-content featured-content-team">
                                    <div className="ttm-team-position">
                                      {dynamic.content}
                                    </div>
                                    <div className="featured-title">
                                      <h5>
                                        <Link to="/team-details">
                                          {dynamic.title}
                                        </Link>
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
            {/* row end */}
          </div>
        </div>
        {/* sidebar end */}
      </div>
      {/*site-main end*/}
      {/*footer start*/}

      {/*footer end*/}
      {/*back-to-top start*/}
      <a id="totop" href="neurology-services.html#top">
        <i className="fa fa-angle-up" />
      </a>
      {/*back-to-top end*/}
    </div>
    {/* page end */}
    {/* Javascript */}
    {/* Javascript end*/}

    <Footer />
  </div>);
}

export {
  Services
};
