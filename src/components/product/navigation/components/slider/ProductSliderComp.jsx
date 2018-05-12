import React, { Component } from 'react';
import Slider from 'react-slick';
import { BikeItems } from './ProductSliderCompStyles';

export default class ProductSliderComp extends Component {
  render() {
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 3
     };
     return (
       <div>
         <h2> Single Item</h2>
         <Slider {...settings}>
           <BikeItems>
             <h3>1</h3>
           </BikeItems>
           <BikeItems>
             <h3>2</h3>
           </BikeItems>
           <BikeItems>
             <h3>3</h3>
           </BikeItems>
         </Slider>
       </div>
     );
   }
}
