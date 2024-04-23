import React from 'react'

const Rating = ({rating}) => {
    const filledStars = Math.floor(rating/2);
    const hasHalfStar = rating % 1 !== 0;
    const filledStarsArray = Array.from({ length: filledStars }, (_, index) => (
        <span key={index}><i class="fa-solid fa-star fa-layers-counter" style={{color:'red'}} ></i></span>
      ));
     
   return <div> {filledStarsArray}
   {hasHalfStar && <span  style={{position:'relative'}}>
    <i class="fa-regular fa-star" style={{color:'red'}}></i> 
    <i class="fa-solid fa-star fa-layers-counter"  style={{position:'absolute',color:'red',right:0,clipPath:`polygon(0 0, ${(rating%2) * 100}% 0, ${(rating%2) * 100}% 100%, 0% 100%)`}}></i>
    </span> }
    
    </div>;
};
export default Rating
