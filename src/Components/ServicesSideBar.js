import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";

// import closeIcon from "../assets/icons/close.svg";
import * as ReactDOM from 'react-dom';
import { GetForService, dynamic } from '../dynamic.js';
function ServicesSideBar() {

  const [loading, setLoading] = useState('true');

  GetForService(setLoading);

  if (!loading) return (
    <div className="col-lg-3 widget-area sidebar-left ttm-col-bgcolor-yes ttm-bg ttm-left-span ttm-bgcolor-grey">
      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
      <aside className="widget widget-nav-menu">
        <ul className="widget-menu box-shadow">

          {dynamic['navbar'].map((dynamic) =>
            <li key={dynamic.id} className={(dynamic.link == window.location.pathname.split('/')[1] && "active").toString()}>
              <Link to={'/' + dynamic.link}>{dynamic.title}</Link>
            </li>)}
        </ul>
      </aside>
      {/*                        <aside class="widget calender-widget">*/}
      {/*                            <div id="calendar" class="calendar small"></div>*/}
      {/*                        </aside>*/}
      <aside className="widget widget-text">
        <div className="ttm_info_widget">
          <div className="icon">
            <i className="themifyicon ti-headphone" />
          </div>
          <div className="title">
            <h3>Let's Help You!</h3>
          </div>
          <div className="content">
            14 Tottenham Court Road
            <br />
            Bulls Stadium, Califorina <br />
            1234, USA <br />
            <a href="mailto:info@example.com.com">info@example.com</a>
          </div>
          <br />
          <a className="view_more" href="neurology-services.html#">
            View More
          </a>
        </div>
      </aside>
      <div className="widget widget-recent-post">
        <h3 className="widget-title">Our Latest News</h3>
        <ul className="widget-post ttm-recent-post-list">
          {dynamic['blog'].slice(0, 3).map((dynamic) =>
            <li key={dynamic.id}>
              <Link to="/single-blog" state={{ to: dynamic.to, from: 'services' }}>
                <img src={dynamic.img} alt="post-img" />
              </Link>
              <span className="post-date">{dynamic.month + ' ' + dynamic.day + ' ' + dynamic.year}</span>
              <Link to="/single-blog" state={{ to: dynamic.to, from: 'services' }}>
                {dynamic.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export { ServicesSideBar };
