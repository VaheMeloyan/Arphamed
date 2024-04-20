import * as ReactDOM from 'react-dom/client';
import React, { useEffect, Component, useState } from 'react';
import { Helmet } from "react-helmet";
import { GetForHome } from './dynamic.js';
import { Home } from './Pages/Home.js';
import { AboutUs } from './Pages/about_us.js';
import { Doctors } from './Pages/OurDoctors.js';
import { Blog } from './Pages/blog.js';
import { Devices } from './Pages/devices.js';
import { Services } from './Pages/services.js';
import { ContactUs } from './Pages/contact_us.js';
import { Faq } from './Pages/faq.js';
import { DocCont } from './Pages/doctor_contact.js';
import { SingleBlog } from './Pages/singleBlog.js';
import { XRay } from './Pages/x-ray.js';
import { Orthopaed } from './Pages/orthopead.js';
import { EyeCare } from './Pages/eyeCare.js';
import { Dental } from './Pages/dental.js';
import { Cardio } from './Pages/cardio.js';
import { Product } from './Pages/product.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/bootstrap.min.css';
import './styles/animate.css';
import './styles/owl.carousel.css';
import './styles/font-awesome.css';
import './styles/themify-icons.css';
import './styles/flaticon.css';
import './styles/prettyPhoto.css';
import './styles/twentytwenty.css';
import './styles/shortcodes.css';
import './styles/main.css';
import './styles/responsive.css';
import './styles/faq.css';
import './styles/contact.css';




function App() {
  const [loading, setLoading] = useState(true);

  GetForHome(setLoading);
  if (!loading) return (


    <BrowserRouter forceRefresh>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="blog" element={<Blog />} />
        <Route path="services" element={<Services />} />
        <Route path="x-ray-rmi-services" element={<XRay />} />
        <Route path="orthopaedics-services" element={<Orthopaed />} />
        <Route path="eye-care-services" element={<EyeCare />} />
        <Route path="dental-services" element={<Dental />} />
        <Route path="cardiology-services" element={<Cardio />} />
        <Route path="devices" element={<Devices />} />
        <Route path='accessories' element={<Devices />} />
        <Route path="contacts" element={<ContactUs />} />
        <Route path="faq" element={<Faq />} />
        <Route path="product-details" element={<Product />} />
        <Route path="team-details" element={<DocCont />} />
        <Route path="single-blog" element={<SingleBlog />} />
        <Route path="*" element={<Home />} />


      </Routes>

    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
