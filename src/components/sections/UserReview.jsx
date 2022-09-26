import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import ReviewCard from 'components/elements/ReviewCard';

const items = [
  <ReviewCard
    title="굿굿 아주 좋아요"
    contents="다이어트 식단 관리하는데 닭가슴살이나 프로틴바 정보 자주 올라와서 유용해요.
              자취생이라 가성비 따지게 되는데, 실패 확률 줄일 수 있어서 좋은 듯."
    auther="제발팅없애주세요ㅠ"
  />,
  <ReviewCard
    title="엄청 유용하다!"
    contents="나에게 맞는 요리나 정보같은게 다른사람도 비슷한걸 매치해서 비교하기도 편하고 무엇보다 오늘 뭐먹지 할때 다른사람이 추천해주는거 같아서 좋네요."
    auther="윰님"
  />,
  <ReviewCard
    title="좋아용!!"
    contents="음식에 소질 없는 자취생들한테 추천.
              앱도 별로 안무겁고 가볍게 훑어보기 좋아요. 맨날 냉동볶음밥만 먹다가 슬슬 다른것도 도전해보고 싶어지네요.
              쿠팡 이용자인데 쿠팡제품도 많이 올라왔으면...!"
    auther="갸냐댜랴먀ㅑ"
  />,
  <ReviewCard
    title="굿굿 아주 좋아요"
    contents="음식에 소질 없는 자취생들한테 추천.
              앱도 별로 안무겁고 가볍게 훑어보기 좋아요. 맨날 냉동볶음밥만 먹다가 슬슬 다른것도 도전해보고 싶어지네요.
              쿠팡 이용자인데 쿠팡제품도 많이 올라왔으면...!"
    auther="갸냐댜랴먀ㅑ"
  />,
  <ReviewCard
    title="굿굿 아주 좋아요"
    contents="음식에 소질 없는 자취생들한테 추천.
              앱도 별로 안무겁고 가볍게 훑어보기 좋아요. 맨날 냉동볶음밥만 먹다가 슬슬 다른것도 도전해보고 싶어지네요.
              쿠팡 이용자인데 쿠팡제품도 많이 올라왔으면...!"
    auther="갸냐댜랴먀ㅑ"
  />
]

const prevBtun = require('../../assets/images/custumprevbtn.png')
const nexttun = require('../../assets/images/custumnextbtn.png')

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      controlsStrategy="default"
      responsive={responsive}
      disableDotsControls
      renderPrevButton={() => {
        return <img className="custum-prev-btn" src={prevBtun} />
      }}
      renderNextButton={() => {
        return <img className="custum-next-btn" src={nexttun} />
      }}
    />
  )
}

function UserReview() {
  return (
    <div className='bg-gradient-to-b lg:bg-gradient-to-r from-[#ff3e48] to-[#ff4b84]'>
      <div className='container py-24 lg:py-32'>
        <div className='flex flex-col justify-center items-center'>
          <article className='prose max-w-none leading-snug text-center text-white'>
            <p className='title text-white mb-5'>
              뉴집가들의 실제 사용 후기
            </p>

            <p className='disc text-white'>
              뉴뉴의 이런 점이 좋아요! <br />
              믿을 수 있는 뉴집가들의 생생한 후기를 살펴보세요.
            </p>
          </article>
        </div>

        <div className='mt-10 lg:mt-16'>
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default UserReview;