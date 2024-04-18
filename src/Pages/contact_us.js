import React, { useEffect, Component, useState } from 'react';

// import closeIcon from "../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import * as ReactDOM from 'react-dom';
import { GetForDeviceContuctUs, dynamic } from '../dynamic.js';
function ContactUs() {

  const [loading, setLoading] = useState('true');

  GetForDeviceContuctUs(setLoading);


  const [formData, setFormData] = useState({

    email: '',


  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  function handleSubmit(e) {

    e.preventDefault();



    fetch('http://192.168.1.10:9000/contact_us/post/message/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json();
      })
      .then((responseData) => {

      })
      .catch((error) => {
        console.error('Error sending request to backend:', error.message);
      });
  }

  if (!loading) return (<div>
    <Header />
    <div className="ttm-page-title-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box ttm-textcolor-white">
              <div className="page-title-heading">
                <h1 className="title">Contact Us</h1>
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
                    <span>Contacts</span>
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
    {/* <div className="contactContainer">
      <div className="contactGreenBar col-lg-6">
        <div className="contactGreenBarTxt">
          <p className="contPrimTxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, ut. Et quis odit distinctio</p>
          <p className="contSecTxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore fugiat, quam maiores ad consectetur maxime quidem iste</p>
        </div>
        <div className="contactCardsContainer row">
          {Object.values(dynamic['contactUs']['card']).map((dynamic)=>
          <div className="contactCard col-lg">
            <div className="header-icon">
              <i className="fa fa-hospital-o"/>
            </div>
              <div className="contactCardTxt">
                <p className="cardsTxtPrim">{dynamic.title}</p>
                <span className="cardsTxtSec">{dynamic.subtitle}</span>
              </div>
            </div>)
          }
        </div>
        <div className="contactSocial"></div>
      </div>
      <div className="contactRegister col-lg-9">
        <div className="contRegInfo">
          <p className="RegTxtSec">What We Do</p>
          <p className="RegTxtPrim">Get In Touch</p>
          <p className="RegTxtSec">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odit magni placeat facilis odio commodi, iure provident perferendis laudantium explicabo, alias. Consequatur autem iusto, nobis quas reiciendis enim nulla unde.</p>
        </div>
        <div className="RegForm">
          {
            Object.values(dynamic['contactUs']['form']).map((dynamic) => <div className="inpWrapper">
              <input type="text" placeholder={dynamic.title} className="RegFormInput"/>
              <div className="inputIcon"></div>
            </div>)
          }
        </div>
        <input type="submit" className="btnSubmit"/>
      </div>
    </div> */}
    <section className="ttm-row bg-layer bg-layer-equal-height res-991-p-0 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            {/* testimonial-box */}
            <div className="ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-skincolor ttm-textcolor-white spacing-8">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
              <div className="layer-content">
                <h3>Do You want to Reach at the next Level of business Success?</h3>
                <p>Book a Complimentary Appointment by Visiting or calling Us!</p>
                <div className="sep_holder_box width-100 pt-20 mb-35">
                  <span className="sep_holder">
                    <span className="sep_line" />
                  </span>
                  <span className="sep_holder">
                    <span className="sep_line" />
                  </span>
                </div>
                {/*featured-icon-box*/}
                {Object.values(dynamic['card']).map((dynamic) =>

                  <div key={dynamic.id} className="featured-icon-box iconalign-before-heading mb-25">
                    <div className="featured-content">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-border ttm-icon_element-color-white ttm-icon_element-size-sm ttm-icon_element-style-square">
                          <i className={dynamic.icon} />
                        </div>
                      </div>
                      <div className="featured-title">
                        <h5>{dynamic.title}</h5>
                        <h4>{dynamic.subtitle}</h4>
                      </div>
                    </div>
                  </div>
                )}
                {/* featured-icon-box end*/}

                <div className="sep_holder_box width-100 pt-20 mb-30">
                  <span className="sep_holder">
                    <span className="sep_line" />
                  </span>
                  <span className="sep_holder">
                    <span className="sep_line" />
                  </span>
                </div>
                <div className="social-icons circle social-hover">
                  <ul className="list-inline">
                    <li className="social-facebook">
                      <a
                        className="tooltip-top"
                        target="_blank"
                        href="contact-us.html#"
                        data-tooltip="Facebook"
                      >
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social-twitter">
                      <a
                        className="tooltip-top"
                        target="_blank"
                        href="contact-us.html#"
                        data-tooltip="Twitter"
                      >
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social-gplus">
                      <a
                        className=" tooltip-top"
                        target="_blank"
                        href="contact-us.html#"
                        data-tooltip="Google+"
                      >
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social-linkedin">
                      <a
                        className=" tooltip-top"
                        target="_blank"
                        href="contact-us.html"
                        data-tooltip="LinkedIn"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-grey spacing-8">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
              {/* section title */}
              <div className="section-title with-desc clearfix">
                <div className="title-header">
                  <h5>WHAT WE DO</h5>
                  <h2 className="title">Get In Touch</h2>
                </div>
                <div className="title-desc">
                  We offer extensive medical procedures to outbound and inbound
                  patients what it is and we are very proud of achievpatients for
                  recovery
                </div>
              </div>
              {/* section title end */}
              <form
                id="ttm-contactform"
                className="ttm-contactform wrap-form clearfix"
                method="post"
                action="contact-us.html#"
                onSubmit={handleSubmit}
              >
                {Object.values(dynamic['form']).map((dynamic) =>

                  <label key={dynamic.id}>
                    <span className="text-input">
                      <i className="ttm-textcolor-skincolor ti-user" />
                      {dynamic.name !== "message" &&
                        <input
                          name={dynamic.name}
                          type={dynamic.type}
                          defaultValue=""
                          placeholder={dynamic.title}
                          required="required"
                          onChange={handleChange}
                        />
                      }

                      {dynamic.name == "message" &&
                        <textarea
                          name={dynamic.name}
                          cols={40}
                          rows={3}
                          placeholder={dynamic.title}
                          required="required"
                          defaultValue=""
                          onChange={handleChange}


                        />
                      }
                    </span>
                  </label>
                )}
                <input
                  name="submit"
                  type="submit"
                  id="submit"
                  className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black"
                  defaultValue="SEND MESSAGE"
                />
              </form>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </section>

    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe width="100%" height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
        <a href="https://fmovies-online.net">fmovies</a>
        <br />
        <style dangerouslySetInnerHTML={{
          __html: ".mapouter{position:relative;text-align:right;height:500px;width:100%;}"
        }} />
        <a href="https://www.embedgooglemap.net" />
        <style dangerouslySetInnerHTML={{
          __html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}"
        }} />
      </div>
    </div>

    <Footer />
  </div>);
}

export {
  ContactUs
};
