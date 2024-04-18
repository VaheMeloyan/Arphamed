import React, { useEffect, Component } from 'react';
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import { dynamic } from '../dynamic.js';
import { ServicesSideBar } from '../Components/ServicesSideBar.js';

function Orthopaed() {

  return (<>
    <Header />
    {/* page-title */}
    <div className="ttm-page-title-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box ttm-textcolor-white">
              <div className="page-title-heading">
                <h1 className="title">Orthopaedics Services</h1>
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
                    <span>Orthopaedics Services</span>
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
                        src="images/services/05.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ttm-service-description">
                      <h4>Variations of passages of Lorem Ipsum</h4>
                      <div className="mb-35">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam aliquet odio non porta laoreet. Vestibulum
                          in dui euismod, molestie quam porta, sagittis arcu.
                          Pellentesque vitae pulvinar urna, in dignissim nulla.
                          Mauris iaculis, tortor sed pharetra varius, purus
                          augue feugiat purus,{" "}
                          <a href="orthopaedics-services.html#">
                            vitae porta nulla turpis
                          </a>{" "}
                          pellentesque dolor. Interdum et malesuada fames ac
                          ante ipsum primis in faucibus. Vivamus posuere posuere
                          ex, ac tincidunt turpis porta id. Aenean sed mauris
                          lacus.
                        </p>
                      </div>
                      <h4>Orthopaedic Conditions</h4>
                      {/* row */}
                      <div className="row pt-15 pb-15">
                        <div className="col-sm-4">
                          <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Knee replacement
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Shoulder pain
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Neck pain
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Knee replacement
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Carpal tunnel syndrome
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                DuPuytren’s disease
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Knee replacement
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Shoulder pain
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-arrow-circle-right" />
                              <span className="ttm-list-li-content">
                                Neck pain
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* row end */}
                      <div className="row pt-10">
                        <div className="col-sm-12">
                          <h4>How to access the Service ?</h4>
                          <div className="mb-35">
                            <p>
                              <img
                                className="alignright"
                                src="images/single-img-ten-300x200.jpg"
                                alt=""
                              />
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Etiam aliquet odio non porta laoreet.
                              Vestibulum in dui euismod, molestie quam porta,
                              sagittis arcu. Pellentesque vitae pulvinar urna,
                              in dignissim nulla. Mauris iaculis, tortor sed
                              pharetra varius, purus augue feugiat purus,{" "}
                              <a href="orthopaedics-services.html#">
                                vitae porta nulla turpis
                              </a>{" "}
                              pellentesque dolor. Interdum et malesuada fames ac
                              ante ipsum primis in faucibus. Vivamus posuere
                              posuere ex, ac tincidunt turpis porta id. Aenean
                              sed mauris lacus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb_10">
                      <div className="col-sm-12">
                        <h4>Meet our Specialist</h4>
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
          {/* row end */}
        </div>
      </div>
      {/* sidebar end */}
    </div>
    {/*site-main end*/}

    <Footer />
  </>
  );
}
export {
  Orthopaed
};