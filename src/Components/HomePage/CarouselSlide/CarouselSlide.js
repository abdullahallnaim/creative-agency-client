import React from "react";
import carousel1 from "../../../carousels/carousel-1.png"
import carousel2 from "../../../carousels/carousel-2.png"
import carousel3 from "../../../carousels/carousel-3.png"
import carousel4 from "../../../carousels/carousel-4.png"
import carousel5 from "../../../carousels/carousel-5.png"
import { Carousel } from '3d-react-carousal';


let slides = [
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={carousel1} alt="1" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={carousel2} alt="2" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={carousel3} alt="3" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={carousel4} alt="4" />,
    <img style={{ width: ' 300px', height: ' 400px', margin: '20px' }} src={carousel5} alt="5" />
];

const CarouselSlide = () => (
    <div className='my-4 text-white' style={{ backgroundColor: '#111430', padding: "40px" }}>
        <h3 className='p-4 text-center'>Here are some of <h3 className='text-success d-inline'>our works</h3></h3>
        <Carousel slides={slides} autoplay={true} interval={1000} />
    </div>

);
export default CarouselSlide;