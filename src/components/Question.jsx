import { useState } from "react";

export default function Question({ content, page, onClick }) {
  const [select, setSelect] = useState(0);

  return (
    <>
      <section className="flex flex-col gap-10  text-center p-8  ">
        {/* Q 번호 및 질문 */}
        <p className="text-[#3AA7EE] text-[32px] font-semibold ">Q{page}</p>
        <div
          className="font-bold text-[18px]"
          dangerouslySetInnerHTML={{ __html: content.question }}
        ></div>

        {/* 답변 버튼  */}
        <div className="flex flex-col gap-4">
          {content.answers.map((v, i) => (
            <label
              key={i}
              className={
                "flex justify-center border cursor-pointer  border-[#E5E5E5] rounded-xl p-6  text-xs font-semibold" +
                (v.key === select ? " bg-[#3AA7EE] text-white" : "")
              }
            >
              <input
                className="hidden"
                name="answer"
                type="radio"
                onChange={() => {
                  setSelect(v.key);
                  onClick(v.key);
                }}
              />
              <div dangerouslySetInnerHTML={{ __html: v.text }}></div>
            </label>
          ))}
        </div>
      </section>
    </>
  );
}
