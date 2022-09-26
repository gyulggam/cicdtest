import React, { useMemo, useState, useEffect } from 'react';
import ImgDisc from 'components/elements/ImgDisc'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import 'assets/styles/transition.scss';

function LiveRecommendations() {
  const [selectImgId, setSelectImgId] = useState(0);
  const showMainImg = useMemo(() => {
    return require(`../../assets/images/LiveRecommend/main-${selectImgId}.png`)
  }, [selectImgId])
  const nodeRef = null

  const drawFlowerImg = () => {
    const result = [];

    for (let i = 0; i < 3; i++) {
      result.push(<img className='w-24 lg:w-[30%]' src={i === selectImgId ?
          require(`../../assets/images/LiveRecommend/flower-color${i + 1}.png`) :
          require(`../../assets/images/LiveRecommend/flower-mask${i + 1}.png`)}
          alt={`flower-${i}`} key={`flower-${i}`}
          onClick={() => setSelectImgId(i)} />)
    }

    return result;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (selectImgId === 2) {
        setSelectImgId(0);
      } else {
        setSelectImgId(selectImgId + 1);
      }
    }, 5000);
    
        return () => clearInterval(timer);
    }, [selectImgId]);

  return (
    <div className='bg-bg-gray'>
      <div className='container'>
        <div className='flex flex-wrap justify-start gap-x-28 pt-24 pb-20'>
          <div className='main-img-wrap lg:w-4/12 text-center hidden md:block lg:block'>
            <SwitchTransition mode='out-in'>
              <CSSTransition key={selectImgId} nodeRef={nodeRef} classNames="fade" timeout={500}>
                <img ref={nodeRef} src={showMainImg} alt="img" />
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className='flex flex-col justify-center w-full md:w-5/12 lg:w-5/12'>
            <article className='prose max-w-none leading-snug'>
              <p className='title mb-0'>
                실패 없는 장보기를 위한<br />
                실시간 추천 식품 구경
              </p>

              <p className='disc'>
                먹을 줄 아는 사람들의 추천템 구경부터<br />
                상세 정보와 판매처 가격 비교까지!
              </p>
            </article>

            <div className='main-img-wrap text-center md:hidden lg:hidden'>
              <SwitchTransition mode='out-in'>
                <CSSTransition key={selectImgId} nodeRef={nodeRef} classNames="fade" timeout={500}>
                  <img ref={nodeRef} src={showMainImg} alt="img" />
                </CSSTransition>
              </SwitchTransition>
            </div>

            <div className='flex justify-center gap-x-8 pt-5 lg:justify-start lg:pt-16 w-full'>
              { drawFlowerImg() }
            </div>

            <div className='w-full mt-4 lg:mt-16'>
              <a href="https://naver.com">
                <ImgDisc disc='똑똑한 쇼핑을 돕는 뉴뉴에서 한 번에 확인해 보세요.' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveRecommendations;