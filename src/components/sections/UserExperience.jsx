import React from 'react'

function UserExperience() {
  const mainImgPath = require("assets/images/reviewdetail.png")
  const mainMobildImgPath = require("assets/images/reviewdetail-mobile.png")

  return (
    <div className='bg-bg-gray'>
      <div className='container px-0 lg:pr-20 xl:pr-20 lg:pl-48 xl:pl-40'>
        <div className='flex flex-wrap justify-between gap-x-20 pt-24'>
          <div className='flex flex-col justify-center lg:w-5/12'>
            <article className='prose max-w-none leading-snug pl-5 lg:pl-0'>
              <p className='title'>
                궁금했던 식품 정보 <br />
                솔직한 후기만 모아서
              </p>

              <p className='disc'>
                매일 쏟아지는 유저들의 식품 경험담, <br />
                나와 비슷한 취향의 유저와 소통해보세요!
              </p>
            </article>
          </div>

          <div className='w-6/12 text-center mt-10 lg:mt-0 hidden md:block md:block'>
            <img className='lg:w-[100%]' src={mainImgPath} alt="img" />
          </div>
          <div className='text-center mt-10 lg:mt-0 md:hidden lg:hidden'>
            <img className='lg:w-[100%]' src={mainMobildImgPath} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserExperience;