import React, { useEffect, Component, useState } from 'react';
// import closeIcon from "../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { Footer } from '../Components/Footer.js';
import { Header } from '../Components/Header.js';
import '../revolution/css/layers.css';
import '../revolution/css/settings.css';
import { dynamic } from '../dynamic.js';



function Home() {

  return (
    <>

      <Header />

      <div className="page">
        {/* <div id="preloader">
          <div id="status">&nbsp;</div>
        </div> */}


        <div
          id="rev_slider_4_1_wrapper"
          className="rev_slider_wrapper fullwidthbanner-container slide-overlay"
          data-alias="classic4export"
          data-source="gallery"
        >
          {/* START REVOLUTION SLIDER 5.4.8 auto mode */}
          <div
            id="rev_slider_4_1"
            className="rev_slider fullwidthabanner"
            data-version="5.4.8.1"
          >
            <ul>
              <li
                data-index="rs-6"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed={300}
                data-thumb="images/slides/slider-mainbg-001.jpg"
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
                  src="images/slides/slider-mainbg-001.jpg"
                  alt=""
                  title="mainslider-bg001"
                  width={1920}
                  height={750}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                  data-no-retina=""
                />
                <div
                  className="tp-caption tp-resizeme"
                  id="slide-6-layer-1"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','40','-220','-220']"
                  data-y="['top','top','top','top']"
                  data-voffset="['160','158','63','63']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','off','off']"
                  data-type="image"
                  data-responsive_offset="on"
                  data-frames='[{"delay":180,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <img
                    src="images/slides/slider-icon001.png"
                    alt=""
                    data-ww="['113px','113px','113px','113px']"
                    data-hh="['45px','45px','45px','45px']"
                    width={113}
                    height={45}
                    data-no-retina=""
                  />
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-6-layer-2"
                  data-x="['left','left','left','center']"
                  data-hoffset="['175','163','30','0']"
                  data-y="['top','top','top','middle']"
                  data-voffset="['178','175','76','-90']"
                  data-fontsize="['16','16','15','13']"
                  data-lineheight="['16','16','15','13']"
                  data-fontweight="['400','400','400','300']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-letterspacing={1}
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":330,"speed":500,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  WE GIVE YOU THE BEST!
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-6-layer-3"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','top','middle']"
                  data-voffset="['213','211','106','-45']"
                  data-fontsize="['75','80','60','40']"
                  data-lineheight="['80','80','55','40']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":470,"speed":800,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <strong className="ttm-textcolor-skincolor">Medical</strong>{" "}
                  Services
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-6-layer-4"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','top','middle']"
                  data-voffset="['286','286','167','-3']"
                  data-fontsize="['75','80','60','40']"
                  data-lineheight="['80','80','60','40']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":900,"speed":800,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  That You Can{" "}
                  <strong className="ttm-textcolor-skincolor">Trust</strong>
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme "
                  id="slide-6-layer-5"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','-603','-603']"
                  data-y="['top','top','top','middle']"
                  data-voffset="['373','382','236','19']"
                  data-fontsize="['16','16','15','12']"
                  data-lineheight="['25','25','26','18']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(237, 237, 237)','rgb(237, 237, 237)','rgb(237, 237, 237)','rgb(237, 237, 237)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','off','off']"
                  data-type="text"
                  data-responsive_offset="['on','on','on','off']"
                  data-frames='[{"delay":1100,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Need professional help? Our support staff will answer your
                  questions.
                  <br /> Visit us Now or Make an Appointment!
                </div>
                <div
                  className="tp-caption shape-rounded tp-resizeme"
                  id="slide-6-layer-7"
                  data-x="['center','center','center','center']"
                  data-hoffset="['544','446','332','332']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['219','240','140','150']"
                  data-width={50}
                  data-height={48}
                  data-fontsize="['23','23','23','23']"
                  data-lineheight="['48','48','48','48']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1240,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <span className=" fa fa-user-md" />
                </div>
                <div
                  className="tp-caption icon-text tp-resizeme"
                  id="slide-6-layer-8"
                  data-x="['center','center','center','center']"
                  data-hoffset="['444','349','235','442']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['207','227','128','95']"
                  data-fontsize="['19','19','19','18']"
                  data-lineheight="['21','21','21','20']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1350,"speed":500,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Dr. Alex Murry
                </div>
                <div
                  className="tp-caption icon-desc tp-resizeme"
                  id="slide-6-layer-9"
                  data-x="['center','center','center','center']"
                  data-hoffset="['352','259','152','360']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['231','251','152','125']"
                  data-fontsize="['15','15','14','13']"
                  data-lineheight="['15','15','15','13']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1570,"speed":300,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Get an Appointment
                </div>
                <a
                  className="tp-caption icon-btn tp-resizeme"
                  href="index.html#"
                  target="_self"
                  id="slide-6-layer-10"
                  data-x="['center','center','center','center']"
                  data-hoffset="['466','373','259','465']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['230','250','151','123']"
                  data-fontsize="['15','15','14','13']"
                  data-lineheight="['15','15','14','13']"
                  data-fontweight="['400','400','400','600']"
                  data-color="['rgb(0, 214, 163)','rgb(0, 214, 163)','rgb(0, 214, 163)','rgb(0, 214, 163)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1570,"speed":300,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <u>Learn More</u>
                </a>
                <a
                  className="tp-caption white-flatborder-button tp-resizeme appointment"
                  href="index.html#"
                  target="_self"
                  id="slide-6-layer-6"
                  data-x="['left','left','left','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','top','middle']"
                  data-voffset="['467','482','265','59']"
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
                  data-frames='[{"delay":1480,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[17,17,17,15]"
                  data-paddingright="[30,30,23,20]"
                  data-paddingbottom="[17,17,17,15]"
                  data-paddingleft="[30,30,23,20]"
                >
                  MAKE AN APPOINTMENT!{" "}
                </a>
              </li>
              <li
                data-index="rs-7"
                data-transition="fade"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed={300}
                data-thumb="images/slides/slider-mainbg-002.jpg"
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
                  src="images/slides/slider-mainbg-002.jpg"
                  alt=""
                  title="mainslider-bg002"
                  width={1920}
                  height={750}
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                  data-no-retina=""
                />
                <div
                  className="tp-caption"
                  id="slide-7-layer-11"
                  data-x="['right','right','right','center']"
                  data-hoffset="['50','40','30','334']"
                  data-y="['middle','middle','middle','top']"
                  data-voffset="['-149','-134','-136','48']"
                  data-fontsize="['65','65','50','55']"
                  data-lineheight="['60','60','50','55']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(0,214,163)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":170,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <i className="fa fa-hospital-o" />
                </div>
                <div
                  className="tp-caption slide-main-text"
                  id="slide-7-layer-3"
                  data-x="['right','right','right','center']"
                  data-hoffset="['120','110','80','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['191','181','61','65']"
                  data-fontsize="['75','75','60','45']"
                  data-lineheight="['80','80','60','40']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":230,"speed":600,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  We Make
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-7-layer-4"
                  data-x="['right','right','right','center']"
                  data-hoffset="['50','40','30','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['265','254','121','109']"
                  data-fontsize="['75','75','60','45']"
                  data-lineheight="['80','80','60','45']"
                  data-fontweight="['600','600','600','600']"
                  data-color="['rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":400,"speed":800,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Quality{" "}
                  <strong className="ttm-textcolor-skincolor">Healthcare</strong>
                </div>
                <div
                  className="tp-caption slide-main-text tp-resizeme"
                  id="slide-7-layer-5"
                  data-x="['right','center','right','right']"
                  data-hoffset="['50','273','-320','-320']"
                  data-y="['top','top','top','top']"
                  data-voffset="['362','354','187','149']"
                  data-fontsize="['23','23','18','15']"
                  data-lineheight="['25','25','18','15']"
                  data-fontweight="['200','200','200','200']"
                  data-color="['rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','off','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":870,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Same-Day Emergency Appointments!
                </div>
                <div
                  className="tp-caption shape-round-border tp-resizeme"
                  id="slide-7-layer-7"
                  data-x="['left','left','left','left']"
                  data-hoffset="['50','40','30','-439']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['215','240','130','108']"
                  data-width="['64','64','64','70']"
                  data-height="['64','64','64','70']"
                  data-fontsize="['20','20','20','20']"
                  data-lineheight="['70','70','70','70']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgba(255, 255, 255,0)','rgba(255, 255, 255,0)','rgba(255, 255, 255,0)','rgba(255, 255, 255,0)']"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":980,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <i className="fa fa-play" />
                </div>
                <a
                  className="tp-caption shape-round tp-resizeme ttm_prettyphoto"
                  href="https://youtu.be/e13TGGccvT4"
                  target="_self"
                  id="slide-7-layer-15"
                  data-x="['left','left','left','left']"
                  data-hoffset="['55','45','35','-436']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['215','240','130','107']"
                  data-width="['54','54','54','60']"
                  data-height="['54','54','54','60']"
                  data-fontsize="['20','20','20','20']"
                  data-lineheight="['54','54','54','54']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)']"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1080,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['center','center','center','center']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <i className="fa fa-play" />{" "}
                </a>
                <div
                  className="tp-caption icon-text tp-resizeme"
                  id="slide-7-layer-8"
                  data-x="['left','left','left','left']"
                  data-hoffset="['131','118','107','-303']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['203','227','117','96']"
                  data-fontsize="['19','19','18','20']"
                  data-lineheight="['21','21','21','20']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1180,"speed":500,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Play Video
                </div>
                <div
                  className="tp-caption icon-desc tp-resizeme"
                  id="slide-7-layer-9"
                  data-x="['left','left','left','left']"
                  data-hoffset="['129','116','106','-309']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['228','251','139','128']"
                  data-fontsize="['15','15','14','15']"
                  data-lineheight="['15','15','16','16']"
                  data-fontweight="['400','400','400','400']"
                  data-color="['rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)','rgb(255, 255, 255)']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-responsive_offset="on"
                  data-frames='[{"delay":1400,"speed":300,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  Schedule Today
                </div>
                <a
                  className="tp-caption icon-btn tp-resizeme"
                  href="index.html#"
                  target="_self"
                  id="slide-7-layer-10"
                  data-x="['left','left','left','left']"
                  data-hoffset="['240','226','210','-193']"
                  data-y="['middle','middle','middle','middle']"
                  data-voffset="['227','251','140','130']"
                  data-fontsize="['15','15','14','15']"
                  data-lineheight="['15','15','14','15']"
                  data-fontweight="['400','400','400','600']"
                  data-color="['rgb(0, 214, 163)','rgb(0, 214, 163)','rgb(0, 214, 163)','rgb(0, 214, 163)']"
                  data-textdecoration="underline"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-visibility="['on','on','on','off']"
                  data-type="text"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1400,"speed":300,"frame":"0","from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[0,0,0,0]"
                  data-paddingright="[0,0,0,0]"
                  data-paddingbottom="[0,0,0,0]"
                  data-paddingleft="[0,0,0,0]"
                >
                  <u>Contact! </u>
                </a>
                <a
                  className="tp-caption skin-flat-button tp-resizeme appointment"
                  href="index.html#"
                  target="_self"
                  id="slide-7-layer-6"
                  data-x="['center','center','center','center']"
                  data-hoffset="['449','361','256','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['432','425','226','235']"
                  data-fontsize="['13','13','13','12']"
                  data-lineheight="['18','18','16','12']"
                  data-fontweight="['600','600','600','600']"
                  data-letterspacing="['1','1','0','0']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-type="text"
                  data-actions=""
                  data-responsive_offset="on"
                  data-frames='[{"delay":1270,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[17,17,17,15]"
                  data-paddingright="[30,30,23,20]"
                  data-paddingbottom="[17,17,17,15]"
                  data-paddingleft="[30,30,23,20]"
                >
                  MAKE AN APPOINTMENT!{" "}
                </a>
                <a
                  className="tp-caption white-flatborder-button tp-resizeme"
                  href="index.html#"
                  target="_self"
                  id="slide-7-layer-13"
                  data-x="['center','center','center','center']"
                  data-hoffset="['195','125','36','0']"
                  data-y="['top','top','top','top']"
                  data-voffset="['432','425','225','180']"
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
                  data-frames='[{"delay":1330,"speed":500,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power0.easeIn"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                  data-textalign="['inherit','inherit','inherit','inherit']"
                  data-paddingtop="[17,17,17,15]"
                  data-paddingright="[30,30,23,20]"
                  data-paddingbottom="[17,17,17,15]"
                  data-paddingleft="[30,30,23,20]"
                >
                  SEE HOW WE CAN HELP
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* END REVOLUTION SLIDER */}
        {/*site-main start*/}
        <div className="site-main">
          {/*row-top-section*/}
          <section className="ttm-row row-top-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mt_45 res-991-mt-50 ttm-bgcolor-white">
                    <div className="row no-gutters">
                      {/* Цикл который вращается в обьекте dynamic.home.iconBox и добавляет элементы в соответствии с кол-вом элементов в обьекте*/}
                      {dynamic['iconbox'].map((dynamic) =>

                        <div key={dynamic.id} className="col-lg">
                          <div className="featured-icon-box top-icon style4 text-center">
                            <div className="featured-icon-box-inner">
                              <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                <i className={dynamic.icon} />
                                {/* добавляет класс dynamic.home.iconBox.icon*/}
                              </div>
                              <div className="featured-content">
                                <div className="featured-title">
                                  <h5>{dynamic.title}</h5>
                                  {/* добавляет текст dynamic.home.iconBox.title*/}

                                </div>
                                <div className="featured-desc">
                                  <p>{dynamic.subtitle}</p>
                                  {/* добавляет подтекст dynamic.home.iconBox.subtitle*/}

                                </div>
                                <div className="ttm-di_links">
                                  <a href="index.html#" className="di_link">
                                    <i className="fa fa-angle-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>


                        </div>
                      )
                      }
                    </div>
                  </div>
                </div>
                {/* row end */}
              </div>
            </div>
          </section>
          {/* row-top-section end */}
          {/*introduction-section*/}
          <section className="ttm-row introduction-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xs-12">
                  <div className="pt-50 res-991-pt-0">
                    {/* section title */}
                    <div className="section-title clearfix">
                      <div className="title-header">
                        <h5>OUR MEDICAL</h5>
                        <h2 className="title">
                          We’re Setting the Standards in Research &amp; Clinical
                          Care
                        </h2>
                      </div>
                    </div>
                    {/* section title end */}
                    <div className="mb-30 clearfix">
                      <p>
                        We provide the most full medical services, so every person
                        could have the opportunity to receive qualitative medical
                        help. Our Clinic has grown to provide a world class facility
                        for the treatment of tooth loss, dental cosmetics and bore
                        advanced restorative dentistry. We are among the most
                        qualified implant providers in the USA with over 35 years of
                        quality training and experience.
                      </p>
                    </div>
                    <h5>Delmont Special Features</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                          <li>
                            <i className="fa fa-arrow-circle-right" />
                            <span className="ttm-list-li-content">
                              Adult Trauma Center
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-arrow-circle-right" />
                            <span className="ttm-list-li-content">
                              Birthing and Lactation Classes
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-arrow-circle-right" />
                            <span className="ttm-list-li-content">
                              Dental and Oral Surgery
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                          <li>
                            <i className="fa fa-arrow-circle-right" />
                            <span className="ttm-list-li-content">
                              Children's Trauma Center
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-arrow-circle-right" />
                            <span className="ttm-list-li-content">
                              Heart and Vascular Institute
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-arrow-circle-right" />
                            <span className="ttm-list-li-content">
                              Plastic Surgery
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12">
                        <div className="mt-25 res-991-mt-0 res-991-mb-40">
                          <a
                            className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black mr-15 mt-15"
                            href="index.html#"
                          >
                            VIEW MORE
                          </a>
                          <a
                            className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mt-15"
                            href="index.html#"
                          >
                            CONTACT US!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                  {/* ttm_single_image-wrapper */}
                  <div className="ttm_single_image-wrapper text-right">
                    <img
                      className="img-fluid"
                      src="images/single-img-twel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about-overlay-shape">
                    <div className="row">
                      <div className="col-lg-2 col-sm-3" />
                      <div className="col-lg-10 col-sm-6">
                        <div className="about-content ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-darkgrey mt_50 pl-35 pb-10  pt-15 ttm-textcolor-white">
                          <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                          <div className="layer-content">
                            <h5 className="font-weight-normal mb-0">
                              We{" "}
                              <span className="ttm-textcolor-skincolor">
                                {" "}
                                &nbsp;
                                <i className="fa fa-heart-o" />
                                &nbsp;{" "}
                              </span>
                              To Care our{" "}
                              <span className="ttm-textcolor-skincolor">
                                {" "}
                                Patients !
                              </span>
                            </h5>
                          </div>
                        </div>
                        {/* ttm_single_image-wrapper end */}
                      </div>
                      <div className="col-sm-3" />
                    </div>
                  </div>
                </div>
              </div>
              {/* row end */}
            </div>
          </section>
          {/*introduction-section end*/}
          {/*broken-section*/}
          <section className="ttm-row broken-section bg-img6 bg-layer bg-layer-equal-height clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-5" />
                <div className="col-lg-7">
                  {/* ttm-fid-border */}
                  <div className="ttm-fid-border ttm-col-bgcolor-yes ttm-bg ttm-right-span ttm-bgcolor-skincolor spacing-1">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                    <div className="layer-content">
                      {/* section title */}
                      <div className="section-title clearfix">
                        <div className="title-header">
                          <h5>ABOUT MEDICAL</h5>
                          <h2 className="title">
                            Powered By Over 1,503 Patients Trust Us With Their Sweet
                            Love.
                          </h2>
                        </div>
                      </div>
                      {/* section title end */}
                      <div className="pt-10">
                        <div className="row">
                          <div className="col-sm-4">
                            {/* ttm-fid */}
                            <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="themifyicon ti-cup" />
                              </div>
                              <div className="ttm-fid-contents">
                                <h4 className="ttm-fid-inner">
                                  <span
                                    data-appear-animation="animateDigits"
                                    data-from={0}
                                    data-to={201}
                                    data-interval={5}
                                    data-before=""
                                    data-before-style="sup"
                                    data-after=""
                                    data-after-style="sub"
                                  >
                                    201
                                  </span>
                                </h4>
                                <h3 className="ttm-fid-title">
                                  <span>
                                    Award Win
                                    <br />
                                  </span>
                                </h3>
                              </div>
                            </div>
                            {/* ttm-fid end */}
                          </div>
                          <div className="col-sm-4">
                            {/* ttm-fid */}
                            <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="themifyicon ti-user" />
                              </div>
                              <div className="ttm-fid-contents">
                                <h4 className="ttm-fid-inner">
                                  <span
                                    data-appear-animation="animateDigits"
                                    data-from={0}
                                    data-to={354}
                                    data-interval={5}
                                    data-before=""
                                    data-before-style="sup"
                                    data-after=""
                                    data-after-style="sub"
                                  >
                                    354
                                  </span>
                                </h4>
                                <h3 className="ttm-fid-title">
                                  <span>
                                    Qualified Staff
                                    <br />
                                  </span>
                                </h3>
                              </div>
                            </div>
                            {/* ttm-fid end */}
                          </div>
                          <div className="col-sm-4">
                            {/* ttm-fid */}
                            <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="themifyicon ti-heart-broken" />
                              </div>
                              <div className="ttm-fid-contents">
                                <h4 className="ttm-fid-inner">
                                  <span
                                    data-appear-animation="animateDigits"
                                    data-from={0}
                                    data-to={124}
                                    data-interval={5}
                                    data-before=""
                                    data-before-style="sup"
                                    data-after=""
                                    data-after-style="sub"
                                  >
                                    124
                                  </span>
                                </h4>
                                <h3 className="ttm-fid-title">
                                  <span>
                                    Machines
                                    <br />
                                  </span>
                                </h3>
                              </div>
                            </div>
                            {/* ttm-fid end */}
                          </div>
                          <div className="col-sm-4">
                            {/* ttm-fid */}
                            <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="themifyicon ti-blackboard" />
                              </div>
                              <div className="ttm-fid-contents">
                                <h4 className="ttm-fid-inner">
                                  <span
                                    data-appear-animation="animateDigits"
                                    data-from={0}
                                    data-to={4012}
                                    data-interval={5}
                                    data-before=""
                                    data-before-style="sup"
                                    data-after=""
                                    data-after-style="sub"
                                  >
                                    4012
                                  </span>
                                </h4>
                                <h3 className="ttm-fid-title">
                                  <span>
                                    Hospital Rooms
                                    <br />
                                  </span>
                                </h3>
                              </div>
                            </div>
                            {/* ttm-fid end */}
                          </div>
                          <div className="col-sm-4">
                            {/* ttm-fid */}
                            <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="themifyicon ti-thumb-up" />
                              </div>
                              <div className="ttm-fid-contents">
                                <h4 className="ttm-fid-inner">
                                  <span
                                    data-appear-animation="animateDigits"
                                    data-from={0}
                                    data-to={7015}
                                    data-interval={5}
                                    data-before=""
                                    data-before-style="sup"
                                    data-after=""
                                    data-after-style="sub"
                                  >
                                    7015
                                  </span>
                                </h4>
                                <h3 className="ttm-fid-title">
                                  <span>
                                    Happy Patients
                                    <br />
                                  </span>
                                </h3>
                              </div>
                            </div>
                            {/* ttm-fid end */}
                          </div>
                          <div className="col-sm-4">
                            {/* ttm-fid */}
                            <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="themifyicon ti-eraser" />
                              </div>
                              <div className="ttm-fid-contents">
                                <h4 className="ttm-fid-inner">
                                  <span
                                    data-appear-animation="animateDigits"
                                    data-from={0}
                                    data-to={254}
                                    data-interval={5}
                                    data-before=""
                                    data-before-style="sup"
                                    data-after=""
                                    data-after-style="sub"
                                  >
                                    254
                                  </span>
                                </h4>
                                <h3 className="ttm-fid-title">
                                  <span>
                                    Suppliers
                                    <br />
                                  </span>
                                </h3>
                              </div>
                            </div>
                            {/* ttm-fid end */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ttm-fid-border end*/}
                </div>
              </div>
              {/* row end */}
            </div>
          </section>
          {/*broken-section end*/}
          {/*services-section*/}
          <div className="ttm-row services-section ttm-bgcolor-darkgrey bg-img5 ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
            <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  {/* section-title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>WE OFFER SERVICES</h5>
                      <h2 className="title">Special High-quality Services</h2>
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
                    href="index.html#"
                  >
                    MORE SERVICES
                  </a>
                </div>
              </div>
              {/* row end */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="mt-10">
                    <div className="row no-gutters">
                      {dynamic['serviceIconBox'].map((dynamic) =>
                        <div key={dynamic.id}
                          className="col-md-3 col-sm-6">
                          <div className="featured-icon-box style5">
                            <div className="featured-content">
                              <div className="featured-title">
                                <h5>{dynamic.title}</h5>
                              </div>
                              <div className="featured-desc">
                                {dynamic.subtitle}
                                <p>
                                </p>
                              </div>
                            </div>
                            <div className="featured-icon">
                              <div className="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                <i className={dynamic.icon} />
                              </div>
                            </div>
                            <a
                              className="ttm-btn ttm-btn-size-sm ttm-btn-color-white btn-inline mb-20"
                              href="index.html#"
                            >
                              VIEW MORE
                            </a>
                          </div>
                        </div>
                      )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mt-50 mb-50 text-center res-991-mt-30 res-991-mb-0">
                    <strong>
                      Don’t hesitate, contact us for better help and services.{" "}
                      <span className="ttm-textcolor-white">
                        <u>Let’s get started</u>
                      </span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*services-section end*/}
          {/*team-section*/}
          <section className="ttm-row team-section clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-lg-10 col-md-10">
                  {/* section-title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>MEET OUR EXPERIENCED TEAM</h5>
                      <h2 className="title">Our Dedicated Doctors Team</h2>
                    </div>
                    <div className="title-desc">
                      We offer extensive medical procedures to outbound and inbound
                      patients what it is and we are very proud of achievement of
                      our staff, We are all work together to help our all patients
                      for recovery
                    </div>
                  </div>
                  {/* section-title end */}
                </div>
                <div className="col-lg-2 col-md-2" />
              </div>
              {/* row end */}
              {/* row */}
              <div className="row">
                <div
                  className="wrap-team team-slide owl-carousel"
                  data-item={4}
                  data-nav="true"
                  data-dots="false"
                  data-auto="false"
                >
                  {dynamic['team'].map((dynamic) =>
                    <div key={dynamic.id} className="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">

                      <div style={{ height: '300px' }} className="featured-thumbnail" >
                        <img

                          className="img-fluid"
                          src={dynamic.img}
                          alt="image"
                        />
                      </div>
                      <div className="ttm-box-view-overlay">
                        <div className="featured-iconbox ttm-media-link">
                          <a
                            className="ttm_prettyphoto ttm_image"
                            data-gal="prettyPhoto[gallery1]"
                            title="spring-renovation"
                            href={dynamic.img}
                            data-rel="prettyPhoto"
                          >
                            <i className="ti ti-plus" />
                          </a>
                        </div>
                      </div>
                      <div className="featured-content featured-content-team">
                        <div className="ttm-team-position">{dynamic.content}</div>
                        <div className="featured-title">
                          <h5>
                            <Link to="team-details" >{dynamic.title}</Link>
                          </h5>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              {/* row end */}
            </div>
          </section>
          {/*team-section end*/}
          {/*cta-section*/}
          <section className="ttm-row cta-section bg-img1 clearfix">
            <div className="container">
              {/*container*/}
              <div className="row">
                {/*row*/}
                <div className="col-lg-12">
                  <div className="pt-70 pb-140 mt-50 row-title res-991-mt-0 res-991-pb-30 text-center">
                    <div className="ttm-video-btn">
                      <div className="ttm-play-btn ttm_prettyphoto">
                        <span className="ttm-btn-play">
                          <i className="fa fa-play" />
                        </span>
                      </div>
                    </div>
                    {/* section title */}
                    <div className="section-title clearfix">
                      <div className="title-header">
                        <h5>Time can't be Resisted, But Aging Can</h5>
                        <h2 className="title">
                          Commited To Trusted Health Care Delmont
                        </h2>
                      </div>
                    </div>
                    {/* section title end */}
                    <h4>
                      Get Your Quote or Call:
                      <span className="ttm-textcolor-skincolor">
                        {" "}
                        (0080) 123-453-789)
                      </span>
                    </h4>
                    <div className="mt-50 res-991-mt-30">
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black mr-15 mb-20 appointment"
                        href=""
                      >
                        APPOINTMENT!
                      </a>
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mb-20"
                        href="index.html#"
                      >
                        SEE HOW WE CAN HELP
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*cta-section end*/}
          {/* testimonial-section */}
          <section className="ttm-row broken-section break-991-colum bg-layer clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-md-5">
                  <div className="ttm-col-bgcolor-yes ttm-bg ttm-left-span ttm-bgcolor-skincolor spacing-2">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                    <div className="layer-content">
                      {/* section title */}
                      <div className="section-title with-desc clearfix">
                        <div className="title-header">
                          <h5>CLIENTS</h5>
                          <h2 className="title">Happy Patients &amp; Clients</h2>
                        </div>
                        <div className="title-desc">
                          If you need any medical help we are available for you.
                          Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed
                          do eiusmod tempor the incididunt ut labore et dolore.
                        </div>
                      </div>
                      {/* section title end */}
                      <a
                        className="ttm-btn ttm-btn-size-sm ttm-icon-btn-right ttm-btn-color-white btn-inline mt_25"
                        href="index.html#"
                      >
                        VIEW MORE DETAILS
                        <i className="ti ti-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="ttm-col-bgcolor-yes ttm-right-span ttm-bg ttm-bgcolor-darkgrey spacing-3">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                    <div className="layer-content">
                      {/* wrap-testimonial */}
                      <div
                        className="testimonial-slide owl-carousel"
                        data-item={1}
                        data-nav="true"
                        data-dots="false"
                        data-auto="false"
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
                          </div>)}
                        {/* testimonials end */}
                        {/* testimonials */}
                        <div className="testimonials ttm-testimonial-box-view-style1">
                          <div className="testimonial-avatar">
                            <div className="testimonial-img">
                              <img
                                className="img-fluid"
                                src="images/testimonial/02.jpg"
                                alt="testimonial-img"
                              />
                            </div>
                            <div className="testimonial-caption">
                              <h5>Alan Sears</h5>
                              <label>Patient</label>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <blockquote className="ttm-testimonial-text">
                              Great co workers, really good environment and
                              excellent patient care. They are continuously
                              innovating themselves which is why they remain a
                              premier dental clinic.This was the cleanest medical
                              establishment I've ever been in. They just loved the
                              welcoming and warm atmosphere in there.
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
                        {/* testimonials end */}
                        {/* testimonials */}
                        <div className="testimonials ttm-testimonial-box-view-style1">
                          <div className="testimonial-avatar">
                            <div className="testimonial-img">
                              <img
                                className="img-fluid"
                                src="images/testimonial/03.jpg"
                                alt="testimonial-img"
                              />
                            </div>
                            <div className="testimonial-caption">
                              <h5>Raymon Myers</h5>
                              <label>Patient</label>
                            </div>
                          </div>
                          <div className="testimonial-content">
                            <blockquote className="ttm-testimonial-text">
                              The doctors and nurses and aides were excellent. The
                              food was excellent. I am feeling fine and very lucky,
                              back to my old self again and it feels great. Thank
                              God for clinics such as yours. I appreciate all your
                              kindness and good care you gave me is beyond my
                              expectations they wonder for me.
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
                        {/* testimonials end */}
                      </div>
                      {/* wrap-testimonial end*/}
                    </div>
                  </div>
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
                <div className="col-md-12" >
                  {/* ttm-client */}
                  <div

                    className="ttm-client clients-slide owl-carousel owl-theme owl-loaded"
                    data-item={5}
                    data-nav="false"
                    data-dots="false"
                    data-auto="false"
                  >
                    {dynamic['clients'].map((dynamic) => <div key={dynamic.id} className="client-box ttm-box-view-logo">
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
          {/*blog-section*/}
          <section className="ttm-row blog-section clearfix">
            <div className="container">
              {/* row */}
              <div className="row">
                <div id={Date.now()} className="col-lg-9 col-md-12">
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
                <div className="col-lg-3 col-md-12">
                  <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black mb-30 mt-45 res-991-mt-0 float-right"
                    href="index.html#"
                  >
                    MORE ARTICLES
                  </a>
                </div>
              </div>
              {/* row end */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="sep_holder_box width-100 mt_15 mb-35 res-991-mt-0">
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
                  className="post-slide owl-carousel owl-theme owl-loaded mt-5"
                  data-item={3}
                  data-nav="false"
                  data-dots="false"
                  data-auto="false"
                >
                  {dynamic['blog'].slice(0, 3).map((dynamic) =>
                    <div key={dynamic.id} className="featured-imagebox featured-imagebox-post ttm-box-view-top-image">
                      <div className="ttm-post-featured-outer">
                        <div className="ttm-post-format-icon">
                          <i className="ti ti-pencil" />
                        </div>
                        <div className="ttm-post-thumbnail featured-thumbnail">
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
                      <div className="featured-content featured-content-post box-shadow">
                        <div className="post-meta">
                          <span className="ttm-meta-line comments-link">
                            <i className="fa fa-t" /> {dynamic.commCount} Comments
                          </span>
                          <span className="ttm-meta-line byline">
                            <i className="fa fa-user" /> {dynamic.publisher}
                          </span>
                        </div>
                        <div className="post-title featured-title">
                          <h5>
                            <Link to="/single-blog" state={{ to: dynamic.to, from: 'Home' }}>
                              {dynamic.title}
                            </Link>
                          </h5>
                        </div>
                        <div className="post-desc featured-desc">
                          <p>
                            {dynamic.subtitle}

                          </p>
                          <Link
                            className="ttm-btn ttm-btn-size-sm ttm-icon-btn-right ttm-btn-color-skincolor btn-inline mb-15"
                            to="/single-blog"
                            state={{ to: dynamic.to, from: 'Home' }}
                          >
                            READ MORE
                            <i className="ti ti-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                  }
                </div>
              </div>
              {/* row end*/}
            </div>
          </section>
          {/*blog-section end*/}
        </div>
        {/*site-main end*/}
        {/*footer start*/}
        <Footer />

        {/*footer end*/}
        {/*back-to-top start*/}
        <a id="totop" href="index.html#top">
          <i className="fa fa-angle-up" />
        </a>
        {/*back-to-top end*/}
      </div>
      {/* page end */}
      {/* Javascript */}
      {/* Revolution Slider */}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) */}
      {/* Javascript end*/}

    </>

  );


}
export {
  Home
};
