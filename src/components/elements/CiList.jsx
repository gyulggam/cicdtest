import React from "react";

function CiList(props) {
  const { list } = props

  const ciImgPathList = list.map((item, aIdx) => {
    return {
      url: `${item}`,
      alt: `ci${aIdx + 1}`,
    };
  });

  return (
    <div className="flex flex-wrap justify-center min-w-[360px] px-4 lg:px-0">
      {ciImgPathList.map((item, idx) => (
        <div className="sm:w-2/6 lg:w-max text-center" key={`ci${idx}`}>
          <img className="w-24 lg:w-36" src={item.url} alt={item.alt} />
        </div>
      ))}
    </div>
  )
}

export default CiList;