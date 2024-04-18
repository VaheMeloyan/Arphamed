import React, { useEffect, Component } from 'react';
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import { dynamic } from '../dynamic.js';
import { ServicesSideBar } from '../Components/ServicesSideBar.js';


function XRay() {

  return (<>
    <Header />
    {/* page-title */}
    <div className="ttm-page-title-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box ttm-textcolor-white">
              <div className="page-title-heading">
                <h1 className="title">X-Ray &amp; RMI Services</h1>
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
                    <span>X-Ray &amp; RMI Services</span>
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
                  <div className="col-sm-6">
                    <div className="ttm_single_image-wrapper mb-35">
                      <img
                        className="img-fluid"
                        src="images/services/02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="ttm_single_image-wrapper mb-35">
                      <img
                        className="img-fluid"
                        src="images/services/03.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="ttm-service-description">
                      <h4>Why Choose Us</h4>
                      <div className="mb-35">
                        <p>
                          cum soluta nobis est eligendi optio cumque nihil
                          impedit quo minus id quod maxime placeat facere
                          possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="featuredbox-number">
                          {/*featured-icon-box*/}
                          <div className="featured-icon-box left-icon icon-align-top">
                            <div className="featured-icon">
                              <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded">
                                <i className="ttm-num ti-info" />
                              </div>
                            </div>
                            <div className="featured-content">
                              <div className="featured-title">
                                <h5>Based on true care and passion</h5>
                              </div>
                              <div className="featured-desc">
                                <p>
                                  Neque porro quisquam est, qui dolorem ipsum
                                  quia dolor sit amet, consectetur, adipisci
                                  velit, sed quia non numquam eius modi tempora
                                  incidunt ut labore et dolore magnam aliquam.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*featured-icon-box end*/}
                          {/*featured-icon-box*/}
                          <div className="featured-icon-box left-icon icon-align-top">
                            <div className="featured-icon">
                              <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded">
                                <i className="ttm-num ti-info" />
                              </div>
                            </div>
                            <div className="featured-content">
                              <div className="featured-title">
                                <h5>Based on true care and passion</h5>
                              </div>
                              <div className="featured-desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Etiam aliquet odio non porta
                                  laoreet. Vestibulum in dui euismod, molestie
                                  quam porta, sagittis arcu. Pellentesque vitae
                                  pulvinar urna, in dignissim nulla.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*featured-icon-box end*/}
                          {/*featured-icon-box*/}
                          <div className="featured-icon-box left-icon icon-align-top">
                            <div className="featured-icon">
                              <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded">
                                <i className="ttm-num ti-info" />
                              </div>
                            </div>
                            <div className="featured-content">
                              <div className="featured-title">
                                <h5>Based on true care and passion</h5>
                              </div>
                              <div className="featured-desc">
                                <p>
                                  ullam corporis suscipit laboriosam, nisi ut
                                  aliquid ex ea commodi consequatur? Quis autem
                                  vel eum iure reprehenderit qui in ea voluptate
                                  velit esse quam nihil molestiae consequatur,
                                  vel illum qui dolorem eum
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*featured-icon-box end*/}
                        </div>
                        <h4>Our Mission</h4>
                        <div className="mb-10">
                          <p>
                            cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat facere
                            possimus, omnis voluptas assumenda est, omnis dolor
                            repellendus&nbsp;est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat
                            facere&nbsp;cum soluta nobis est eligendi
                          </p>
                        </div>
                        {/* row */}
                        <div className="row pt-15 pb-15">
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
    <Footer />
  </>
  );
}
export {
  XRay
};
