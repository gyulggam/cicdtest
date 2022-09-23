import React from 'react'

function UserExperience() {
  const mainImgPath = require("assets/images/brandimg.png")
  const googlePlayBtn = require("assets/images/googleplay.png")
  const appStoreBtn = require("assets/images/appstore.png")

  return (
    <div className='container py-16'>
      <div className='text-center'>
        <img src={mainImgPath} alt="hero img" />
      </div>

      <article className='prose max-w-none leading-snug text-center mt-6'>
        <p className='title mb-[10px]'>
          뉴뉴 바로 사용해보러 가기
        </p>

        <p className='disc mt-0'>
          앱스토어 또는 구글 플레이스토어에서 '뉴뉴'를 검색해보세요
        </p>
      </article>

      <div className='flex mt-10 gap-x-2 justify-center'>
        <img src={googlePlayBtn} alt="google play img" />
        <img src={appStoreBtn} alt="app store img" />
      </div>
    </div>
  )
}

export default UserExperience;