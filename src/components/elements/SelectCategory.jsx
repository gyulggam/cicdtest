import React from "react";

function SelectCategory(props) {
  const { list, selectId, setId } = props;
  const style = {
    borderRadius: "30px",
  };

  const item = () => {
    return list.map((item) => {
      return (
        <div
          className={`category-item py-2 px-5 lg:py-4 lg:px-10 text-[14px] lg:text-[20px] ${item.id === selectId ? "bg-bg-pink text-white" : "bg-white text-[#d3d0d5]"}`}
          style={style}
          key={item.id}
          // onClick={() => setId(item.id)}
        >
          {item.value}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      { item() }
    </div>
  );
}

export default SelectCategory;
