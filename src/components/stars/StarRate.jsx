import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './stars.css'

const StarRate = ({noOfStars = 5}) => {
    const [rating, setRatig] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRatig(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseleave(){
        setHover(rating)
    }
  return (
    <div className="star-ratng">
    {
        [...Array(noOfStars)].map((_,index)=>{
            index += 1
             return <FaStar
             key={index}
             className={index <= (hover || rating) ? 'active' : 'inactive'}
             onClick={()=> handleClick(index)}
             onMouseMove={()=> handleMouseEnter(index)}
             onMouseLeave={()=> handleMouseleave(index)}
             size={40}
             />
        })
    }
    </div>
  )
}

export default StarRate