import React from "react";

export default function Button({ text, onClick, page }) {
  return (
    <>
      <div
        className={`bg-[#3AA7EE] rounded-xl font-semibold text-white text-center py-4 px-4 w-full cursor-pointer`}
        onClick={() => {
          onClick(page + 1);
        }}
      >
        {text}
      </div>
    </>
  );
}
