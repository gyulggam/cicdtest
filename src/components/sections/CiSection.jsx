import React from "react";
import CiList from 'components/elements/CiList'

function CiSection() {
  const ciList = [
    `${require('../../assets/images/Ci/blank.png')}`,
    `${require('../../assets/images/Ci/cookat.png')}`,
    `${require('../../assets/images/Ci/wingit.png')}`,
    `${require('../../assets/images/Ci/coupang.png')}`,
    `${require('../../assets/images/Ci/kurly.png')}`,
    `${require('../../assets/images/Ci/ssg.png')}`,
    `${require('../../assets/images/Ci/navershopping.png')}`,
    `${require('../../assets/images/Ci/bmart.png')}`,
    `${require('../../assets/images/Ci/blank.png')}`,
  ]

  return (
    <div className="container pt-[110px] pb-[80px] lg:pt-[180px] lg:pb-[134px] px-0">
      <CiList list={ciList} />
      
      <article className="text-center text-[20px] lg:text-[30px] mt-10 lg:mt-16">
        <p>
          컬리, 쿠팡, 네이버 스토어, SSG 등 <br/>
          <strong>유통사별 유저들의 선택</strong>을 확인해보세요!
        </p>
      </article>
    </div>
  )
}

export default CiSection