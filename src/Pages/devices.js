import React, { useEffect, Component, useState } from 'react';

// import closeIcon from "../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import * as ReactDOM from 'react-dom';
import { dynamic, GetForDeviceProduct } from '../dynamic.js';
import '../revolution/css/layers.css';
import '../revolution/css/settings.css';
import { useNavigate } from 'react-router-dom';
function Devices() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState('true');

  GetForDeviceProduct(setLoading);

  if (!loading) return (
    <div>
      <Header />
      {/*page start*/}
      <div className="page">
        {/* preloader start */}
        {/*<div id="preloader">
      <div id="status">&nbsp;</div>
    </div>*/}
        {/* preloader end */}
        {/*header start*/}

        <div
          id="rev_slider_4_1_wrapper"
          className="rev_slider_wrapper fullwidthbanner-container"
          data-source="gallery"
        >
          {/* START REVOLUTION SLIDER */}
          <div
            id="rev_slider_4_1"
            className="rev_slider fullwidthabanner"
            data-version="5.4.8"
          >
            <ul>
              <li
                data-index="rs-14"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed={300}
                data-thumb="images/slides/slider-mainbg-009.jpg"
                data-rotate={0}
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                <img
                  src="images/slides/slider-mainbg-009.jpg"
                  alt=""
                  title="mainslider-bg007"
                  width={1920}
                  height={750}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                  data-no-retina=""
                />
                <div
                  className="tp-caption tp-shape tp-shapewrapper ttm-bgcolor-darkgrey tp-resizeme"
                  id="slide-14-layer-8"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-2517','-2432','-2426','-2791']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','3','-1']"
                  data-width={5000}
                  data-height="['475','475','350','260']"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="shape"
                  data-responsive_offset="on"
                  data-frames='[{"delay":90,"speed":500,"frame":"0","from":"x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                ></div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-14-layer-9"
                  data-x="['left','left','left','center']"
                  data-hoffset="['52','40','30','0']"
                  data-y="['top','top','middle','middle']"
                  data-voffset="['184','164','-109','-88']"
                  data-fontsize="['90','90','80','50']"
                  data-lineheight="['120','120','90','60']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":350,"speed":800,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <strong className="ttm-textcolor-skincolor">Medical</strong>
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-14-layer-10"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','middle','middle']"
                  data-voffset="['268','250','-32','-39']"
                  data-fontsize="['90','90','80','50']"
                  data-lineheight="['120','120','90','60']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":770,"speed":800,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Equipment
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-14-layer-11"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','middle','middle']"
                  data-voffset="['395','373','43','14']"
                  data-fontsize="['32','32','25','20']"
                  data-lineheight="['40','40','30','25']"
                  data-fontweight="['300','400','400','400']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1130,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  The Best Quality &amp; Price
                </div>
                <a
                  className="tp-caption skin-flat-button tp-resizeme"
                  href="home-shop.html#"
                  target="_self"
                  id="slide-14-layer-6"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['137','124','115','76']"
                  data-fontsize="['13','13','13','12']"
                  data-lineheight="['16','16','16','12']"
                  data-fontweight="['600','600','600','600']"
                  data-letterspacing="['1','1','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1290,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[17,17,17,15]"
                  data-paddingright="[30,30,23,20]"
                  data-paddingbottom="[17,17,17,15]"
                  data-paddingleft="[30,30,23,20]"
                >
                  SHOP NOW!
                </a>
              </li>
              <li
                data-index="rs-21"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed={300}
                data-thumb="images/slides/slider-mainbg-010.jpg"
                data-rotate={0}
                data-saveperformance="off"
                data-title="Slide"
                data-param1=""
                data-param2=""
                data-param3=""
                data-param4=""
                data-param5=""
                data-param6=""
                data-param7=""
                data-param8=""
                data-param9=""
                data-param10=""
                data-description=""
              >
                <img
                  src="images/slides/slider-mainbg-010.jpg"
                  alt=""
                  title="mainslider-bg008"
                  width={1920}
                  height={750}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                  data-no-retina=""
                />
                <div
                  className="tp-caption tp-shape tp-shapewrapper ttm-bgcolor-darkgrey tp-resizeme"
                  id="slide-21-layer-8"
                  data-x="['center','center','center','center']"
                  data-hoffset="['-2517','-2432','-2426','-2791']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['0','0','3','-1']"
                  data-width={5000}
                  data-height="['475','475','350','260']"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="shape"
                  data-responsive_offset="on"
                  data-frames='[{"delay":90,"speed":500,"frame":"0","from":"x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                ></div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-21-layer-9"
                  data-x="['left','left','left','center']"
                  data-hoffset="['52','40','30','0']"
                  data-y="['top','top','middle','middle']"
                  data-voffset="['184','164','-109','-88']"
                  data-fontsize="['90','90','80','50']"
                  data-lineheight="['120','120','90','60']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":350,"speed":800,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <strong className="ttm-textcolor-skincolor">Medical</strong>
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-21-layer-10"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','middle','middle']"
                  data-voffset="['268','250','-32','-39']"
                  data-fontsize="['90','90','80','50']"
                  data-lineheight="['120','120','90','60']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":770,"speed":800,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Equipment
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-21-layer-11"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','middle','middle']"
                  data-voffset="['395','373','43','14']"
                  data-fontsize="['32','32','25','20']"
                  data-lineheight="['40','40','30','25']"
                  data-fontweight="['300','400','400','400']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1130,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  The Best Quality &amp; Price
                </div>
                <a
                  className="tp-caption skin-flat-button tp-resizeme"
                  href="home-shop.html#"
                  target="_self"
                  id="slide-21-layer-6"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['137','124','115','76']"
                  data-fontsize="['13','13','13','12']"
                  data-lineheight="['16','16','16','12']"
                  data-fontweight="['600','600','600','600']"
                  data-letterspacing="['1','1','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1290,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[17,17,17,15]"
                  data-paddingright="[30,30,23,20]"
                  data-paddingbottom="[17,17,17,15]"
                  data-paddingleft="[30,30,23,20]"
                >
                  SHOP NOW!
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* END REVOLUTION SLIDER */}
        {/*site-main start*/}
        <div className="site-main">
          {/*banner-box-section*/}
          <div className="ttm-row banner-box-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  {/* banner-image */}
                  <div className="banner-image">
                    <figure className="ttm-figure mb-30">
                      <a href="home-shop.html#">
                        <img
                          className="img-fluid"
                          src="images/banner-one.jpg"
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  {/* banner-image end */}
                </div>
                <div className="col-sm-4">
                  {/* banner-image */}
                  <div className="banner-image">
                    <figure className="ttm-figure mb-30">
                      <a href="home-shop.html#">
                        <img
                          className="img-fluid"
                          src="images/banner-two.jpg"
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  {/* banner-image end */}
                  {/* banner-image */}
                  <div className="banner-image">
                    <figure className="ttm-figure mb-30">
                      <a href="home-shop.html#">
                        <img
                          className="img-fluid"
                          src="images/banner-three.jpg"
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  {/* banner-image end */}
                </div>
                <div className="col-sm-4">
                  {/* banner-image */}
                  <div className="banner-image">
                    <figure className="ttm-figure mb-30">
                      <a href="home-shop.html#">
                        <img
                          className="img-fluid"
                          src="images/banner-four.jpg"
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  {/* banner-image end */}
                </div>
              </div>
            </div>
          </div>
          {/*banner-box-section end*/}
          {/*only-title-section*/}
          <section className="ttm-row only-title-section ttm-bgcolor-darkgrey clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  {/* section-title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h2 className="title">Our Latest Products</h2>
                    </div>
                    <div className="title-desc">
                      Since its founding Delmont has been providing its patients
                      with the full medical care, encompassing outpatients services,
                      is neurology, laboratory, imaging diagnostics and more.
                    </div>
                  </div>
                  {/* section-title end */}
                </div>
                <div className="col-lg-3 col-md-12">
                  <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white mb-30 mt-45 res-991-mt-0 float-right"
                    href="home-shop.html#"
                  >
                    MORE PRODUCTS
                  </a>
                </div>
              </div>
              {/* row end */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="sep_holder_box width-100 mt_15 mb-50 res-991-mt-0">
                    <span className="sep_holder">
                      <span className="sep_line" />
                    </span>
                    <span className="sep_holder">
                      <span className="sep_line" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*only-title-section*/}
          {/* product-section */}
          <section className="ttm-row product-section mt_90">
            <div className="container">
              <div className="products row">
                {/* product */}
                {dynamic['product'].slice(0, 8).map((dynamic) =>

                  <div key={dynamic.id} className="product col-md-3 col-sm-6 col-xs-12">
                    <div className="ttm-product-box">
                      {/* ttm-product-box-inner */}
                      <div className="ttm-product-box-inner" style={{ height: '250px', cursor: 'pointer' }} onClick={() => {
                        navigate('/product-details', {
                          state: { id: dynamic.id, src: dynamic.img }
                        });
                      }}>
                        <div className="ttm-shop-icon" >
                          <div className="product-btn">
                            <a href="home-shop.html#" className="add-to-cart-btn">
                              <i className="ti ti-shopping-cart" />
                            </a>
                          </div>
                          <div className="product-btn">
                            <a href="home-shop.html#" className="search-btn">
                              <i className="ti ti-search" />
                            </a>
                          </div>
                          <div className="product-btn">
                            <a href="home-shop.html#" className="wishlist-btn">
                              <i className="ti ti-heart" />
                            </a>
                          </div>
                        </div>
                        <div className="ttm-product-image-box">
                          {dynamic.discount > 0 &&

                            <div className="onsale">Sale!</div>
                          }

                          <img
                            className="img-fluid"
                            src={dynamic.img}
                            alt=""
                          />
                        </div>
                      </div>
                      {/* ttm-product-box-inner end */}
                      <div className="ttm-product-content">
                        <Link className="ttm-product-title" to="/product-details">
                          <h2>{dynamic.title}</h2>
                        </Link>
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
                        <span className="price">
                          {dynamic.discount > 0 &&
                            <del>
                              <span className="product-Price-amount">
                                <span className="product-Price-currencySymbol">$</span>
                                {dynamic.discount}
                              </span>
                            </del>
                          }
                          <ins>
                            <span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>
                              {dynamic.price}
                            </span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          {/* product-section end*/}
          {/* testimonial-section */}
          <section className="ttm-row broken-section bg-layer clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-5">
                  {/* col-img-img-seven */}
                  <div className="col-bg-img-seven ttm-col-bgimage-yes ttm-bg ttm-left-span mt_60 res-991-mt-0 res-991-ptb-200 ttm-reset-content-center-991">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                    <div className="layer-content">
                      <div className="ttm-video-icon ttm-center-video-icon mt_30">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-white ttm-icon_element-background-skincolor ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <i className="fa fa-play" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* col-img-bg-img-seven end*/}
                </div>
                <div className="col-lg-7">
                  {/* testimonial-box */}
                  <div className="testimonial-box">
                    <div className="ttm-col-bgcolor-yes ttm-right-span ttm-bg ttm-bgcolor-skincolor spacing-3">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                      <div className="layer-content">
                        {/* section title */}
                        <div className="section-title clearfix">
                          <div className="title-header">
                            <h5>HAPPY CLIENTS</h5>
                            <h2 className="title">Our Customers &amp; Clients</h2>
                          </div>
                        </div>
                        {/* section title end */}
                        {/* wrap-testimonial */}
                        <div
                          className="testimonial-slide owl-carousel pt-20"
                          data-item={1}
                          data-nav="true"
                          data-dots="false"
                          data-auto="true"
                        >
                          {/* testimonials */}
                          {dynamic['testimonial'].map((dynamic) =>
                            <div key={dynamic.id} className="testimonials ttm-testimonial-box-view-style1">
                              <div className="testimonial-avatar">
                                <div className="testimonial-img">
                                  <img
                                    className="img-fluid"
                                    src={dynamic.img}
                                    alt="testimonial-img"
                                  />
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
                            </div>
                          )}
                        </div>
                        {/* wrap-testimonial end*/}
                      </div>
                    </div>
                  </div>
                  {/* testimonial-box end*/}
                </div>
              </div>
              {/* row end*/}
            </div>
          </section>
          {/* testimonial-section end*/}
          {/*client-section*/}
          <div className="ttm-row client-section ttm-bgcolor-grey mt_70 res-991-mt-0 clearfix">
            <div className="container">
              {/* row */}
              <div className="row text-center">
                <div className="col-md-12">
                  {/* ttm-client */}
                  <div
                    className="ttm-client clients-slide owl-carousel owl-theme owl-loaded mt-5"
                    data-item={5}
                    data-nav="false"
                    data-dots="false"
                    data-auto="false"
                  >
                    {dynamic['clients'].map((dynamic) =>
                      <div key={dynamic.id} className="client-box ttm-box-view-separator-logo">
                        <div
                          className="ttm-client-logo-tooltip"
                          data-tooltip={dynamic.hover}
                        >
                          <div className="client-thumbnail">
                            <img src={dynamic.img} alt="image" />
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                  {/* ttm-client end */}
                </div>
              </div>
              {/* row end */}
            </div>
          </div>
          {/*client-section end*/}
          <div className="ttm-row pb-60 clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8 col-md-12">
                  {/* section-title */}
                  <div className="section-title with-desc text-center clearfix">
                    <div className="title-header">
                      <h2 className="title">Featured Products</h2>
                    </div>
                    <div className="title-desc">
                      Since its founding Delmont has been providing its patients
                      with the full medical care, encompassing outpatients services,
                      is neurology, laboratory, imaging diagnostics and more.
                    </div>
                  </div>
                  {/* section-title end */}
                </div>
                <div className="col-lg-2" />
              </div>
              {/* row end */}
              <div className="mb-5 products row">
                {/* product */}
                {dynamic['product'].slice(0, 4).map((dynamic) =>

                  <div key={dynamic.id} className="product col-md-3 col-sm-6 col-xs-12">
                    <div className="ttm-product-box">
                      {/* ttm-product-box-inner */}
                      <div className="ttm-product-box-inner" style={{ cursor: 'pointer' }} onClick={() => { window.location.pathname = '/product-details'; }}>
                        <div className="ttm-shop-icon">
                          <div className="product-btn">
                            <a href="home-shop.html#" className="add-to-cart-btn">
                              <i className="ti ti-shopping-cart" />
                            </a>
                          </div>
                          <div className="product-btn">
                            <a href="home-shop.html#" className="search-btn">
                              <i className="ti ti-search" />
                            </a>
                          </div>
                          <div className="product-btn">
                            <a href="home-shop.html#" className="wishlist-btn">
                              <i className="ti ti-heart" />
                            </a>
                          </div>
                        </div>
                        <div className="ttm-product-image-box">
                          {dynamic.discount > 0 &&

                            <div className="onsale">Sale!</div>
                          }

                          <img
                            className="img-fluid"
                            src={dynamic.img}
                            alt=""
                          />
                        </div>
                      </div>
                      {/* ttm-product-box-inner end */}
                      <div className="ttm-product-content">
                        <Link className="ttm-product-title" to="/product-details">
                          <h2>{dynamic.title}</h2>
                        </Link>
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
                        <span className="price">
                          {dynamic.discount > 0 &&
                            <del>
                              <span className="product-Price-amount">
                                <span className="product-Price-currencySymbol">$</span>
                                {dynamic.discount}
                              </span>
                            </del>
                          }
                          <ins>
                            <span className="product-Price-amount">
                              <span className="product-Price-currencySymbol">$</span>
                              {dynamic.price}
                            </span>
                          </ins>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* blog-section */}
          <section className="ttm-row blog-section ttm-bgcolor-grey clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-9 col-md-9">
                  {/* section-title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>OUR BLOG</h5>
                      <h2 className="title">Recent Articles and News</h2>
                    </div>
                    <div className="title-desc">
                      Since its founding Delmont has been providing its patients
                      with the full medical care, encompassing outpatients services,
                      is neurology, laboratory, imaging diagnostics and more.
                    </div>
                  </div>
                  {/* section-title end */}
                </div>
                <div className="col-lg-3 col-md-3"> </div>
              </div>
              {/* row end */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="sep_holder_box width-100 mt_15 mb-35">
                    <span className="sep_holder">
                      <span className="sep_line" />
                    </span>
                    <span className="sep_holder">
                      <span className="sep_line" />
                    </span>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="row">
                {/* post-slide */}
                <div
                  className="post-slide owl-carousel owl-theme owl-loaded"
                  data-item={2}
                  data-nav="true"
                  data-dots="false"
                  data-auto="false"
                >
                  {dynamic['blog'].map((dynamic) =>
                    <div key={dynamic.id} className="featured-imagebox featured-imagebox-post ttm-box-view-left-image row box-shadow">
                      <div className="col-lg-5 col-md-12 ttm-featured-img-left">
                        <div className="ttm-post-thumbnail featured-thumbnail">
                          <img
                            className="img-fluid"
                            src={dynamic.img}
                            alt="image"
                          />
                          <div className="ttm-box-post-date">
                            <span className="ttm-entry-date">
                              <time
                                className="entry-date"
                                dateTime={dynamic.timeAttr}
                              >
                                {dynamic.day}
                                <span className="entry-month">
                                  {dynamic.month}<span className="entry-year">{dynamic.year}</span>
                                </span>
                              </time>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 featured-content featured-content-post">
                        <div className="post-title featured-title">
                          <h5>
                            <Link to="/single-blog">
                              {dynamic.title}
                            </Link>
                          </h5>
                        </div>
                        <div className="post-meta">
                          <span className="ttm-meta-line comments-link">
                            <i className="fa fa-comment" /> {dynamic.commCount} Comments
                          </span>
                          <span className="ttm-meta-line byline">
                            <i className="fa fa-user" /> {dynamic.publisher}
                          </span>
                        </div>
                        <div className="post-desc featured-desc">
                          <p>
                            {dynamic.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* row end*/}
            </div>
          </section>
          {/* multi-section end */}
        </div>
        {/*site-main end*/}
        {/*footer start*/}

        {/*back-to-top start*/}
        <a id="totop" href="home-shop.html#top">
          <i className="fa fa-angle-up" />
        </a>;
        {/*back-to-top end*/}
      </div >

      <Footer />
    </div >);
}
export {
  Devices
};
