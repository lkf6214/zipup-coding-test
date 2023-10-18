import React from "react";

export default function HashTag({ tagText }) {
  return (
    <div className="w-fit bg-[#B5DCF9] text-black rounded-lg py-1 px-2 text-[12px]">
      #{tagText}
    </div>
  );
}
