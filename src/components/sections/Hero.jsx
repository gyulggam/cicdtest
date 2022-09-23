import React from 'react'
import 'assets/styles/hero.scss'

function Hero() {
  const mainImgPath = require("assets/images/landing.png")
  const mainMobileImgPath = require("assets/images/landing-m.png")
  const googlePlayBtn = require("assets/images/googleplay.png")
  const appStoreBtn = require("assets/images/appstore.png")

  return (
    <div className='container'>
      <div className='flex flex-wrap justify-between pt-32 md: pt-52 lg:pt-52 pb-20'>
        <div className='flex flex-col justify-center md:w-1/2 lg:w-1/2'>
          <article className='prose max-w-none leading-snug'>
            <p className='title text-[28px] lg:text-[3.125rem] text-[#000] font-bold'>
              맛있는 게 궁금할 땐,<br/>
              광고없는 푸드 커뮤니티 뉴뉴
            </p>

            <p className='disc lg:text-[24px] text-[#443e49]'>
              아직도 <strong className='text-[#ff5d5d]'>마켓컬리, 쿠팡, SSG 추천템</strong>을 <br className='lg:hidden'/> 찾아 헤매지 않나요? <br />
              장보기 전 뉴뉴에서 한번에 확인하세요! 
            </p>
          </article>

          <div className='mt-[120px] gap-x-2 hidden md:flex lg:flex'>
            <img src={googlePlayBtn} alt="google play img" />
            <img src={appStoreBtn} alt="app store img" />
          </div>

          <div className='qr-space hidden md:flex lg:flex'>
            <span>
              QR<br />
              영역
            </span>
          </div>
        </div>

        <div className='text-center w-1/2 hidden md:block lg:block xl:block'>
          <img src={mainImgPath} alt="hero img" />
        </div>

        <div className='text-center w-full md:hidden lg:hidden xl:hidden mt-12'>
          <img src={mainMobileImgPath} alt="hero img" />
        </div>

        <div className='mt-10 justify-center gap-x-2 flex w-full md:hidden lg:hidden'>
          <img src={googlePlayBtn} alt="google play img" />
          <img src={appStoreBtn} alt="app store img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;