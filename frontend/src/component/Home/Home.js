import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./Product.js";




const product = {
    name: "Blue Tshirt",
    images: [{ url: "https://rukminim1.flixcart.com/image/416/416/kffq2kw0/tapestry/y/e/u/b08jkh2d72-art-world-original-imafvvm2mmhhe6vf.jpeg?q=70"}],
    price:"$3000",
    _id:"shruti",
}

const Home = () => {

  return (
    <Fragment>

          <div className="banner">
            <p>Welcome to Kalakriti</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
          </div>
    </Fragment>
  );
};

export default Home;