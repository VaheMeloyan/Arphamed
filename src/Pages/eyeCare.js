import React, {useEffect,Component} from 'react';
import {Link} from "react-router-dom";
import {Footer} from '../Components/Footer.js'
import {Header} from '../Components/Header.js'
import {dynamic} from '../dynamic.js'
import {ServicesSideBar} from '../Components/ServicesSideBar.js'


function EyeCare() {


  return (<>
    <Header/>

    {/* page-title */}
    <div className="ttm-page-title-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box ttm-textcolor-white">
              <div className="page-title-heading">
                <h1 className="title">Eye Care Services</h1>
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
                    <span>Eye Care Services</span>
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
            <ServicesSideBar/>

            <div className="col-lg-9 content-area">
              {/* ttm-service-single-content-are */}
              <div className="ttm-service-single-content-area">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="ttm_single_image-wrapper mb-35">
                      <img
                        className="img-fluid"
                        src="images/services/06.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ttm-service-description">
                      <h4>Omnis voluptas assumenda est, omnis</h4>
                      <div className="mb-30">
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power of choice
                          is untrammelled and when nothing prevents our being
                          able to do what we like best, every pleasure is to be
                          welcomed and every pain avoided. But in certain
                          circumstances and owing to the claims of duty.
                        </p>
                        <p>
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxim laceat facere possimus, omnis voluptas assumenda
                          est, omnis dolor repellendus. Temporibus autem
                          quibusdam et aut officiis debitis.
                        </p>
                      </div>
                      <h4>Finibus Bonorum et Malorum</h4>
                      <div className="mb-30">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing elit
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. But I must explain to you how all this
                          mistaken idea of denouncing pleasure and praising pain
                          was born and I will give you a complete account.
                        </p>
                      </div>
                      {/* row */}
                      <div className="row pt-10">
                        <div className="col-md-6 col-sm-12">
                          {/*featured-icon-box*/}
                          <div className="featured-icon-box style2 iconalign-before-heading ttm-bgcolor-grey">
                            <div className="featured-content mb-15">
                              <div className="featured-icon">
                                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                  <i className="flaticon-report" />
                                </div>
                              </div>
                              <div className="featured-title">
                                <h5>Blanditiis praestium volupta</h5>
                              </div>
                            </div>
                            <div className="featured-desc">
                              <p>
                                Uuntrammelled and when nothing prevents our
                                being able to do what we like best fficia
                                deserunt mollitia.
                              </p>
                              <p>
                                molestiae non recusandae. Itaque prevents our
                                being able earum rerum.
                              </p>
                              <a
                                className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-skincolor mb-20 mt-15"
                                href="eye-care-services.html#"
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                          {/* featured-icon-box end*/}
                        </div>
                        <div className="col-md-6 col-sm-12">
                          {/*featured-icon-box*/}
                          <div className="featured-icon-box style2 iconalign-before-heading ttm-bgcolor-grey">
                            <div className="featured-content mb-15">
                              <div className="featured-icon">
                                <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                  <i className="fa fa-user-md" />
                                </div>
                              </div>
                              <div className="featured-title">
                                <h5>Epudiated and annoyances</h5>
                              </div>
                            </div>
                            <div className="featured-desc">
                              <p>
                                Lorem ipsum dolor sit ametcon sectetur
                                adipiscing elit sed do deserunt mollitia eiusmod
                                tempor incididunt.
                              </p>
                              <p>
                                culpa qui officia deserunt mollitia animi, id
                                est laborum dolor sit .
                              </p>
                              <a
                                className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-skincolor mb-20 mt-15"
                                href="eye-care-services.html#"
                              >
                                Read More
                              </a>
                            </div>
                          </div>
                          {/* featured-icon-box end*/}
                        </div>
                      </div>
                      {/* row end */}
                      <div className="row pt-15">
                        <div className="col-sm-12">
                          <h4>Denouncing pleasure costs</h4>
                          <div className="row">
                            <div className="col-sm-6">
                              <ul className="ttm-timelistbox-block">
                                <li>
                                  <strong>beguiled and demoralized</strong>
                                  <span className="service-time">
                                    <strong>$250</strong>
                                  </span>
                                </li>
                                <li>
                                  <strong>voluptates repudiandae</strong>
                                  <span className="service-time">
                                    <strong>$340</strong>
                                  </span>
                                </li>
                                <li>
                                  <strong>untrammelled</strong>
                                  <span className="service-time">
                                    <strong>$200</strong>
                                  </span>
                                </li>
                                <li>
                                  <strong>reiciendis voluptatibus</strong>
                                  <span className="service-time">
                                    <strong>$500</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-6">
                              <ul className="ttm-timelistbox-block">
                                <li>
                                  <strong>beguiled and demoralized</strong>
                                  <span className="service-time">
                                    <strong>$250</strong>
                                  </span>
                                </li>
                                <li>
                                  <strong>voluptates repudiandae</strong>
                                  <span className="service-time">
                                    <strong>$340</strong>
                                  </span>
                                </li>
                                <li>
                                  <strong>untrammelled</strong>
                                  <span className="service-time">
                                    <strong>$200</strong>
                                  </span>
                                </li>
                                <li>
                                  <strong>reiciendis voluptatibus</strong>
                                  <span className="service-time">
                                    <strong>$500</strong>
                                  </span>
                                </li>
                              </ul>
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
    <Footer/>
  </>
    )
    }
    export {
      EyeCare
    };
