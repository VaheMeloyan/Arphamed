import React, { useEffect, Component } from 'react';

// import closeIcon from "../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import { SideBar } from '../Components/SideBar.js';
import { dynamic } from '../dynamic.js';
function Blog() {
  return (<div>
    <Header />


    <div className="page sidebar-true">
      {/*header start*/}

      {/* page-title */}
      <div className="ttm-page-title-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box ttm-textcolor-white">
                <div className="page-title-heading">
                  <h1 className="title">Блог</h1>
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
                          &nbsp;&nbsp;Домой
                        </a>
                      </span>
                      <span className="ttm-bread-sep">&nbsp; | &nbsp;</span>
                      <span>Блог</span>
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
        <div className="sidebar ttm-sidebar-right ttm-bgcolor-white break-991-colum clearfix">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-9 content-area">

                {/* post */}
                {dynamic['blog'].map((dynamic) =>

                  <article key={dynamic.id} className="post ttm-blog-classic clearfix">
                    {/* post-featured-wrapper */}
                    <div className="ttm-post-featured-wrapper ttm-featured-wrapper">
                      <div className="ttm-post-featured">
                        <img
                          className="img-fluid"
                          src={dynamic.img}
                          alt=""
                        />
                      </div>
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time
                            className="entry-date"
                            dateTime="2019-01-16T07:07:55+00:00"
                          >
                            {dynamic.day}
                            <span className="entry-month">
                              {dynamic.month}<span className="entry-year">{dynamic.year}</span>
                            </span>
                          </time>
                        </span>
                      </div>
                    </div>
                    {/* post-featured-wrapper end */}
                    {/* ttm-blog-classic-content */}
                    <div className="ttm-blog-classic-content">
                      <div className="ttm-post-entry-header">
                        <div className="post-meta">
                          <span className="ttm-meta-line byline">
                            <i className="ti ti-user" />
                            {dynamic.publisher}
                          </span>
                          <span className="ttm-meta-line cat-links">
                            <i className="ti ti-folder" />
                            Cardiac, Medical
                          </span>
                          {/* comment */}
                          {/* <span className="ttm-meta-line comments-link">
                        <i className="fa fa-comment" /> 3 Comments
                      </span> */}
                          {/* tags */}
                          {/* <span className="ttm-meta-line tags-links">
                        <i className="fa fa-tag" />
                        doctor, pain
                      </span> */}
                        </div>
                        <header className="entry-header">
                          <h2 className="entry-title">
                            <Link to="/single-blog"
                              state={{ to: dynamic.to, from: 'Blog' }}
                            >
                              {dynamic.title}
                            </Link>
                          </h2>
                        </header>
                      </div>
                      <div className="entry-content">
                        <div className="ttm-box-desc-text">
                          <p>
                            {dynamic.subtitle}
                          </p>
                        </div>
                        <div className="ttm-blogbox-desc-footer">
                          <div className="ttm-blogbox-footer-readmore">
                            <div className="ttm-blogbox-footer-left">
                              <Link
                                className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-black"
                                to="/single-blog"
                                state={{ to: dynamic.to, from: 'Blog' }}
                              >
                                Читать Далее
                              </Link>
                            </div>
                          </div>
                          <div className="ttm-social-share-wrapper">
                            <div className="ttm-social-share-title">Поделится</div>
                            <div className="social-icons circle">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ttm-blog-classic-content end */}
                  </article>
                )}
                {/* post end */}
                <div className="ttm-pagination">
                  <span className="page-numbers current">1</span>
                  <a className="page-numbers" href="blog.html#">
                    2
                  </a>
                  <a className="next page-numbers" href="blog.html#">
                    <i className="ti ti-arrow-right" />
                  </a>
                </div>
              </div>
              <SideBar />
            </div>
            {/* row end */}
          </div>
        </div>
      </div>
      {/*site-main end*/}

      {/*footer end*/}
      {/*back-to-top start*/}
      <a id="totop" href="blog.html#top">
        <i className="fa fa-angle-up" />
      </a>
      {/*back-to-top end*/}
    </div>

    <Footer />
  </div>);
}

export {
  Blog
};
