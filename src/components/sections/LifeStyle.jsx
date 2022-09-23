import React, { useState, useMemo, useEffect } from 'react'
import ImgDisc from 'components/elements/ImgDisc'
import SelectCategory from 'components/elements/SelectCategory'
import 'assets/styles/section.scss'

function LifeStyle() {
  const furnitureList = [{id: 'furniture-0', value: '1인가구'}, {id: 'furniture-1', value: '2인가구'}, {id: 'furniture-2', value: '3인가구'}];
  const preferenceList = [{id: 'preference-0', value: '간단알바'}, {id: 'preference-1', value: '직접요리파'}, {id: 'preference-2', value: '건강추구파'}, {id: 'preference-3', value: '가성비좋아'}, {id: 'preference-4', value: '비싸도FLEX'}];
  const jobList = [{id: 'job-0', value: '학생'}, {id: 'job-1', value: '직장인'}, {id: 'job-2', value: '주부'}];

  const [furnitureId, setFurnitureId] = useState('furniture-0')
  const [preferenceId, setPreferenceId] = useState('preference-0')
  const [jobId, setJobId] = useState('job-2')
  const selectedList = useMemo(() => [furnitureId, preferenceId, jobId], [furnitureId, preferenceId, jobId]) 

  const mainImgPath = useMemo(() => {
    const list = JSON.stringify(selectedList)

    if (list === JSON.stringify(['furniture-0', 'preference-0', 'job-2'])) {
      return require("assets/images/lifestyle1@2x.png")
    } else if (list === JSON.stringify(['furniture-1', 'preference-4', 'job-1'])) {
      return require("assets/images/lifestyle2@2x.png")
    } else if (list === JSON.stringify(['furniture-2', 'preference-2', 'job-0'])) {
      return require("assets/images/lifestyle3@2x.png")
    } else {
      return require("assets/images/lifestyle1@2x.png")
    };
  }, [selectedList]);


  useEffect(() => {
    const intervalList = [['furniture-1', 'preference-4', 'job-1'], ['furniture-2', 'preference-2', 'job-0'],['furniture-0', 'preference-0', 'job-2']]
    let index = 0;
    const timer = setInterval(() => {
      index = index === intervalList.length ? 0 : index  
      
      setFurnitureId(intervalList[index][0])
      setPreferenceId(intervalList[index][1])
      setJobId(intervalList[index][2])

      index ++;
    }, 5000);
    
        return () => clearInterval(timer);
    }, []);

  return (
    <div className='bg-bg-yellow'>
      <div className='container pt-16 lg:pt-36 text-center'>
        <article className='prose max-w-none leading-snug'>
            <p className='title'>
              라이프스타일 별 <br/>
              유저들의 추천템이 한 곳에
            </p>

            <p className='disc'>
              애주가들의 인생 안주부터 다이어터들의 저칼로리 식단,<br/>
              자취생을 위한 가성비 1인분 밀키트까지
            </p>
        </article>

        <div className='mt-16'>
          <div>
            <SelectCategory list={ furnitureList } selectId={ furnitureId } setId={ setFurnitureId } />
          </div>
          <div className='mt-5'>
            <SelectCategory list={ preferenceList } selectId={ preferenceId } setId={ setPreferenceId } />
          </div>
          <div className='mt-5'>
            <SelectCategory list={ jobList } selectId={ jobId } setId={ setJobId } />
          </div>
        </div>

        <div className='main-img-wrap text-center mt-10'>
          <img className='relative top-[30px]' src={ mainImgPath } alt="hero img" />
          <div className='lg:w-3/5 my-0 mx-auto'>
            <ImgDisc disc='장보기 전 나와 같은 취향을 지닌 유저들의 PICK을 구경할 수 있어요.' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeStyle;