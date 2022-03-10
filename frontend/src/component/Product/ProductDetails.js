import  {React, Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {getProductDetails} from "../../actions/productAction";
import { Link, useParams } from 'react-router-dom';

const ProductDetails =()=> {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const alert = useAlert();

    const { product, loading, error } = useSelector(
        (state) => state.productDetails
      );
      useEffect(() => {
        dispatch(getProductDetails(id));
    },[dispatch, id]);
  return (
      <Fragment>
        <div className="ProductDetails">
           <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
    </div>
    </Fragment>
    
  )
}

export default ProductDetails;
// import React from 'react'

// const ProductDetails = () => {
//   return (
//     <div>ProductDetails</div>
//   )
// }

// export default ProductDetails
