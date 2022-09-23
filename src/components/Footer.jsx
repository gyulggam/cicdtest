import React from "react";
import Logo from "components/elements/Logo"

function Footer() {
  return (
    <div className='bg-bg-gray'>
      <div className='container'>
        <div className="py-24 text-sm">
          <Logo />
          <div className="flex justify-between flex-wrap mt-9">
            <div className="">
              <p>주식회사 뉴뉴</p>
              <p>서울특별시 강남구 선릉로 93길 40 | 사업자등록번호 724-88-01985</p>
              <p>대표 이수빈 | 이메일 info@knewnew.co.kr</p>
              <p className="mt-9">©KNEWNEW. ALL RIGHTS RESERVED.</p>
            </div>
            
            <div className="flex justify-between gap-x-10 mt-10 lg:mt-0 text-left lg:text-right">
              <div>
                <p>
                  <a href="#">이용약관</a>
                </p>
                <p>
                  <a href="#">개인정보처리방침</a>
                </p>
              </div>
              <div>
                <p>
                  <a href="https://www.instagram.com/knewnew.official/?__coig_restricted=1" target="_blank">인스타그램</a>
                </p>
                <p>
                  <a href={"https://blog.naver.com/knewnew"} target={"_blank"}>네이버블로그</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer