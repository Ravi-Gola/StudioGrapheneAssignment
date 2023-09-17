import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Contact from "../components/Contact";
import bannerImg from '../components/banner.png'

const Home = () => {
  return (
    <div className="home">
      <div id="banner">
      <img id="banner-image" alt="model" src={bannerImg}></img>
        <Banner />
      </div>
      <div className="seemore">
        <button>
          see more{" "}
          <i
            className="fa-solid fa-arrow-right"
            style={{ transform: "rotate(-45deg)" }}
          ></i>
        </button>
      </div>
      <div id="new-product">
        <Products />
      </div>
      <div id="contact-us">
       <Contact/>
      </div>
      <div className="footer">
        <p>Copyright 2022 All Right Reserved By SG</p>
      </div>
    </div>
  );
};

export default Home;
