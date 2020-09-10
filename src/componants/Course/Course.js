import React, { useState } from 'react';
import fakeData from '../../Fake Data/Data.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
    const [course, setCourse] = useState(fakeData);
    const [cart , setCart] = useState([]);
    const handleAddCourse = (course) =>{
    const newCart = [...cart, course];
    setCart(newCart);
    }
    return (
        
        <div className="d-flex flex-wrap"> 
             
            {
                course.map(course => <Product handleAddCourse={handleAddCourse} course={course}></Product>)
            }  
           <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
       
    );
};

export default Course;