import React, { Component } from 'react';
// import closeIcon from "../assets/icons/close.svg";
import * as ReactDOM from 'react-dom';
import { dynamic, GetForSideBar } from '../dynamic.js';
import { useState } from 'react';
// суммирует кол-во статей и добавляет в All Categories

// закончивается суммирование
function SideBar() {

  const [loading, setLoading] = useState(true);

  GetForSideBar(setLoading);

  if (!loading) {

    let categories = dynamic.categories;

    categories.at(-1).number = categories.map((categories) => categories.number).reduce((partialSum, a) => partialSum + a, 0);
  }
  if (!loading) return (
    <div key={dynamic.id} className="col-lg-3 widget-area sidebar-right ttm-col-bgcolor-yes ttm-bg ttm-right-span ttm-bgcolor-grey">
      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
      <aside className="widget widget-search">
        <form
          role="search"
          method="get"
          className="search-form  box-shadow"
          action="single-blog.html#"
        >
          <label>
            <span className="screen-reader-text">Search for:</span>
            <input
              type="search"
              className="input-text"
              placeholder="Поиск …"
              defaultValue=""
              name="s"
            />
          </label>
          <input
            type="submit"
            className="search-submit"
            defaultValue="Search"
          />
        </form>
      </aside>
      <aside className="widget widget-categories">
        <h3 className="widget-title">Категории</h3>
        <ul>
          {Object.values(dynamic['categories']).map((dynamic) =>

            <li key={dynamic.id}>
              <a href="single-blog#">{dynamic.text}</a>
              <span>{dynamic.number}</span>
            </li>
          )}
        </ul>
      </aside>
      <aside className="widget widget-recent-post">
        <h3 className="widget-title">Популярные Новости</h3>
        <ul className="widget-post ttm-recent-post-list">
          {Object.values(dynamic['blog']).slice(0, 3).map((dynamic) =>

            <li key={dynamic.id}>
              <a href="single-blog">
                <img src={dynamic.img} alt="post-img" />
              </a>
              <span className="post-date">{dynamic.month + ' ' + dynamic.day + ', ' + dynamic.year}</span>
              <a href="single-blog">
                {dynamic.title}
              </a>
            </li>
          )}
        </ul>
      </aside>


      <aside className="widget widget-text">
        <div className="ttm_info_widget">
          <div className="icon">
            <i className="themifyicon ti-headphone" />
          </div>
          <div className="title">
            <h3>Мы Вам Поможем!</h3>
          </div>
          <div className="content">
            14 Tottenham Court Road
            <br />
            Bulls Stadium, Califorina <br />
            1234, USA <br />
            <a href="mailto:info@example.com.com">info@example.com</a>
          </div>
          <br />
          <a className="view_more" href="single-blog.html#">
            Показать Больше
          </a>
        </div>
      </aside>

    </div>
  );
}
export { SideBar };
