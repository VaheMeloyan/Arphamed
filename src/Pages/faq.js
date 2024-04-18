import React, { useState } from 'react';

// import closeIcon from "../assets/icons/close.svg";

import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import { GetForFaq, dynamic } from '../dynamic.js';


function Faq() {

  const [loading, setLoading] = useState(true);

  GetForFaq(setLoading);

  if (!loading) return (<div>
    <Header />
    <div className="ttm-page-title-row">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-box ttm-textcolor-white">
              <div className="page-title-heading">
                <h1 className="title">Часто Задаваемые Вопросы</h1>
              </div>
              {/* /.page-title-captions */}
              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="breadcrumb-wrapper-inner">
                    <span>
                      <a title="Go to Delmont." href="index.html" className="home">
                        <i className="themifyicon ti-home" />
                        &nbsp;&nbsp;Home
                      </a>
                    </span>
                    <span className="ttm-bread-sep">&nbsp; | &nbsp;</span>
                    <span>FAQ</span>
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
    <div className="faqContainer">
      <p className="faqPrimTxt">Часто Задаваемые Вопросы</p>
      <p className="faqSecTxt">Тут вы найдете ответы на наиболее распространенные вопросы, которые могут возникнуть. В этом разделе можно найти информацию о продуктах или услугах, процедурах заказа, доставке, оплате, возврате товаров, гарантийном обслуживании и других важных вопросах.</p>
      <div className="accordion">
        {
          Object.values(dynamic['questions']).map((dynamic) => <div key={dynamic.id} className={'toggle ' + dynamic.toggle}>
            <div key={dynamic.id} className="toggle-title">
              <a data-toggle="collapse" data-parent="#accordion" href="aboutus-1.html#collapseOne" dangerouslySetInnerHTML={{ __html: dynamic.title }}>
              </a>
            </div>
            <div className="toggle-content">
              {/* проверяет есть ли картинка в DB и в зависмости от этого меняет строение */}
              {dynamic.img == null && <div className="row">

                <div className="col-sm-12">
                  <p dangerouslySetInnerHTML={{ __html: dynamic.body }}></p>
                </div>
              </div>
              }
              {
                dynamic.img != null && <div className="row">
                  <div className="col-sm-3">
                    <div className="toggle-figure res-991-mb-15">
                      <img className="img-fluid" src={dynamic.img} alt="image" />
                    </div>
                  </div>

                  <div className="col-sm-9">
                    <p dangerouslySetInnerHTML={{ __html: dynamic.body }}></p>
                  </div>
                </div>
              }
              {/* проверка кончается тут */}
            </div>
          </div>)
        }
      </div>
    </div>
    <Footer />
  </div>);
}

export {
  Faq
};
