import React from "react";
import "./style.css"

const Rating = ({rating}) => {
    return (
        <div className="star-rating">
            {[...Array(rating)].map((star) => {
                return (
                    <span className="star" key={star} >&#9733;</span> 
                )
            })}
        </div>
    )
}

const Product = ({product}) => {
    const {name, image, price, rating} = product
    return (
        <div className="product">
            <div className="product-image">
                <img src={`/images/${image}`} alt="" />
            </div>
            <div className="product-info">
                <div className="product-info-left">
                    <h5>{name}</h5>
                    <h6>₹{price}/-</h6>
                </div>
                <div className="product-info-right">
                    <Rating rating={rating} />
                </div>
            </div>
        </div>
    )
}
export default Product