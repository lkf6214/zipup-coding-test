import React from "react";

export default function ProgressBar({ page, length }) {
  return (
    <>
      {/* 스크롤 바 */}

      <div className="w-full max-w-[296px] z-10 border-[3px] border-[#F0F1F6] rounded-full h-[5px] relative mt-8 ">
        <div
          className="border-[3px] border-[#3AA7EE] rounded-full h-[5px] absolute left-[-2px] top-[-2.5px]"
          style={{ width: (100 / (length + 1)) * page + "%" }}
        ></div>
      </div>
    </>
  );
}
