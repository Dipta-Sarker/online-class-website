import React from 'react';
import productCss from './Product.css';
const Product = (props) => {
    const {name, img, price}= props.course;
    return (
        <div className=" course col-md-3">
            <div className="info m-2">
                <img src={img} alt=""/>
            </div>
            <div className="info m-2">
            <h4>Name: {name}</h4>
            <p>Price: $ {price}</p>
            <button className="btn btn-warning" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button>
            </div>
            
        </div>
    );
};

export default Product;