import React from "react";
import ReactStars from 'react-stars'

const handleDragStart = (e) => e.preventDefault();
const boxStyle = {width: '20rem', height: '325px', borderBottomRightRadius: '0px', maxWidth: '320px'}

function ReviewCard(props) {
  const { title, contents, auther } = props
  
  return (
    <div
      className='bg-white flex flex-col justify-between my-0 mx-auto lg:ml-5 text-left pt-10 pb-7 px-7 rounded-[20px]'
      style={boxStyle}
      onDragStart={handleDragStart} role="presentation" 
    >
      <div className="">
        <p className="mb-2">{ title }</p>
        <ReactStars
          count={5}
          size={15}
          value={5}
          color2={'#ff3e48'}
          readonly
        />
      </div>

      <div className="">
        { contents }
      </div>

      <div className="mt-14 text-[12px]">
        <p className="text-[#a09ca4]">{ auther }님의 후기</p>
      </div>
    </div>
  )
}

export default ReviewCard