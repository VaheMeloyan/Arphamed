import React, { useEffect, Component, useState } from 'react';

// import closeIcon from "../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import { SideBar } from '../Components/SideBar.js';
import { GetForSingleBlog, dynamic } from '../dynamic.js';
import { useLocation } from 'react-router-dom';


function SingleBlog() {
  const location = useLocation();
  console.log(location);
  const from = location.state.from;
  console.log('from----' + JSON.stringify(location));
  const blogTo = location.state.to;

  return (
    <>

      <div className="page sidebar-true">
        {/*header start*/}
        <Header />
        {/*header end*/}
        {/* page-title */}
        <div className="ttm-page-title-row">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box ttm-textcolor-white">
                  <div className="page-title-heading">
                    {
                      Object.values(dynamic['blog']).map((dynamic) =>
                        dynamic.to == blogTo ? <h1 className="title" key={dynamic.id}>{dynamic.title}</h1> : null
                      )
                    }
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
                            &nbsp;&nbsp;Главная
                          </a>
                        </span>
                        <span className="ttm-bread-sep">&nbsp; | &nbsp;</span>
                        {
                          Object.values(dynamic['blog']).map((dynamic) =>
                            dynamic.to == blogTo ? <span key={dynamic.id}>{dynamic.title}</span> : null
                          )
                        }
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
          {/* sidebar */}
          <div className="sidebar ttm-sidebar-right ttm-bgcolor-white break-991-colum clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-9 content-area">
                  {/* post */}
                  <article className="post ttm-blog-classic clearfix">
                    {/* post-featured-wrapper */}
                    {
                      Object.values(dynamic['blog']).map((dynamic) =>
                        dynamic.to == blogTo ? <div key={dynamic.id} className="ttm-post-featured-wrapper ttm-featured-wrapper">
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
                        </div> : null
                      )
                    }
                    {/* post-featured-wrapper end */}
                    {/* ttm-blog-classic-content */}
                    <div className="ttm-blog-classic-content">
                      <div className="post-meta">
                        <span className="ttm-meta-line byline">
                          <i className="ti ti-user" />
                          Alex
                        </span>
                        <span className="ttm-meta-line cat-links">
                          <i className="ti ti-folder" />
                          Cardiac, Medical
                        </span>
                        {/* Comments and tags */}
                        {/* <span className="ttm-meta-line comments-link">
                      <i className="fa fa-comment" /> 3 Comments
                    </span>
                    <span className="ttm-meta-line tags-links">
                      <i className="fa fa-tag" />
                      doctor, pain
                    </span> */}
                      </div>
                      <div className="entry-content">
                        {
                          Object.values(dynamic['blog']).map((dynamic) =>
                            dynamic.to == blogTo ? <div key={dynamic.id} dangerouslySetInnerHTML={{ __html: dynamic.single }}>
                            </div> : null
                          )
                        }
                        <div className="ttm-blogbox-desc-footer">
                          <div className="ttm-social-share-wrapper">
                            <div className="ttm-social-share-title">Поделиться</div>
                            <div className="social-icons circle">
                              <ul>
                                <li>
                                  <a href="javascript:void(0)">
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)">
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)">
                                    <i className="fa fa-google-plus" />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)">
                                    <i className="fa fa-linkedin" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="ttm-post-prev-next-buttons">
                            <Link to={`/${from}`}
                              className="ttm-btn ttm-btn-size-sm ttm-btn-shape-square ttm-icon-btn-left ttm-btn-style-fill ttm-btn-color-skincolor mb-10"
                              href="single-blog#"
                            >
                              <i className="ti ti-angle-double-left" />
                              Назад
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ttm-blog-classic-content end */}
                  </article>
                  {/* post end */}
                </div>
                <SideBar />
              </div>
              {/* row end */}
            </div>
          </div>
          {/* sidebar end */}
        </div>
        {/*site-main end*/}
        {/*footer start*/}
        <Footer />
        {/*footer end*/}
        {/*back-to-top start*/}
        <a id="totop" href="single-blog#top">
          <i className="fa fa-angle-up" />
        </a>
        {/*back-to-top end*/}
      </div>
    </>

  );
}

export {
  SingleBlog
};
