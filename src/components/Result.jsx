import React, { useEffect, useState } from "react";
import HashTag from "./HashTag";
import TitleLabel from "./TitleLabel";
import Button from "./Button";
import Line from "./Line";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Result({ answer }) {
  const params = useParams();
  // const [result, setResult] = useState(0);
  const [data, setData] = useState();
  const navigate = useNavigate();

  // // 답변
  // useEffect(() => {

  // }, []);

  const itemVariants = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        damping: 20,
        duration: 0.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  useEffect(() => {
    fetch(
      `http://devd-interview.s3-website.ap-northeast-2.amazonaws.com/results/${params.key}`
      // { method: "GET" }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className=""
        key={"result"}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {data ? (
          <>
            {/* section 1  */}
            <section className="flex flex-col gap-8 text-center  p-8 pt-12 ">
              <div className="flex flex-col gap-3">
                <div className="font-bold text-[20px]">
                  새로운 걸 좋아하는 스마트홈
                </div>
                <img
                  src={`/images/${params.key}.webp`}
                  alt="main"
                  className="w-4/5 m-auto"
                />
                <div className="flex gap-1 justify-center flex-wrap">
                  {data.keywords.map((v, i) => (
                    <HashTag key={i} tagText={v} />
                  ))}
                </div>
              </div>

              <div className=" border border-[#E5E5E5] rounded-lg p-6  text-xs ">
                {data.description}
              </div>

              <TitleLabel titleText={" 나는 이런 것들을 주로 구매해요"} />

              <div className=" border border-[#E5E5E5] rounded-lg py-4 px-8 text-xs text-left text-[#3AA7EE]">
                {data.preferenceProduct.split(", ").map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </div>
            </section>

            <Line />

            {/* section 2  */}
            <section className="flex flex-col gap-6 text-center  p-8">
              <TitleLabel titleText={" 나와 잘 어울리는 유형"} />

              <div className="card bg-[#FAFAFA] rounded-lg py-4 px-10 ">
                <div className="flex items-center gap-10">
                  <div>
                    <img src="/images/3.webp" alt="main" className="w-full" />
                  </div>

                  <div className="flex flex-col m-auto gap-5">
                    <div>
                      <p className="font-bold text-[12px]">혁신적인</p>
                      <p className="font-bold ">혁신적인</p>
                    </div>

                    <a
                      href="https://smartstore.naver.com/scholas/products/5121785029?n_media=11068&n_query=%EC%9E%A5%EB%82%9C%EA%B0%90%EA%B8%B0%EC%B0%A8&n_rank=1&n_ad_group=grp-a001-02-000000018963771&n_ad=nad-a001-02-000000116965496&n_campaign_type=2&n_mall_id=scholas&n_mall_pid=5121785029&n_ad_group_type=2&n_match=3&NaPm=ct%3Dlnvso260%7Cci%3D0zK0003%5FRwXzsYbit1oB%7Ctr%3Dpla%7Chk%3Dad36b7af2bb157ca52de35b7b2c6b6474fa943ff"
                      target="_blank"
                      className={`bg-[#3AA7EE] rounded-lg text-white font-semibold text-[10px] py-2 px-3 w-fit cursor-pointer`}
                    >
                      자세히보기
                    </a>
                  </div>
                </div>
              </div>

              <div className="card bg-[#FAFAFA] rounded-lg py-4 px-10 ">
                <div className="flex items-center gap-10">
                  <div>
                    <img src="/images/3.webp" alt="main" className="w-full" />
                  </div>

                  <div className="flex flex-col m-auto gap-5">
                    <div>
                      <p className="font-bold text-[12px]">혁신적인</p>
                      <p className="font-bold ">혁신적인</p>
                    </div>

                    <a
                      href="https://smartstore.naver.com/scholas/products/5121785029?n_media=11068&n_query=%EC%9E%A5%EB%82%9C%EA%B0%90%EA%B8%B0%EC%B0%A8&n_rank=1&n_ad_group=grp-a001-02-000000018963771&n_ad=nad-a001-02-000000116965496&n_campaign_type=2&n_mall_id=scholas&n_mall_pid=5121785029&n_ad_group_type=2&n_match=3&NaPm=ct%3Dlnvso260%7Cci%3D0zK0003%5FRwXzsYbit1oB%7Ctr%3Dpla%7Chk%3Dad36b7af2bb157ca52de35b7b2c6b6474fa943ff"
                      target="_blank"
                      className={`bg-[#3AA7EE] rounded-lg text-white font-semibold text-[10px] py-2 px-3 w-fit cursor-pointer`}
                    >
                      자세히보기
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <Line />

            {/* section 3  */}
            <section className="flex flex-col gap-8 text-center  p-8">
              <TitleLabel titleText={"결과 공유하기"} />

              <div className="flex justify-center m-auto gap-6 w-8 pb-2">
                <img
                  src="/images/share_1.png"
                  alt="share_1"
                  className="w-full cursor-pointer"
                />
                <CopyToClipboard
                  text={`${window.location.href}`}
                  onCopy={() => {
                    alert("클립보드에 복사되었습니다.");
                  }}
                >
                  <img
                    src="/images/share_2.png"
                    alt="share_2"
                    className="w-full cursor-pointer"
                  />
                </CopyToClipboard>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  text={"이벤트 바로가기"}
                  onClick={() => {
                    alert("서비스 준비중 입니다");
                  }}
                />
                {/* <Link to="/"> */}
                <Button
                  text={"테스트 다시하기"}
                  onClick={() => {
                    navigate("/");
                  }}
                />
                {/* </Link> */}
              </div>
            </section>
          </>
        ) : (
          "Loading..."
        )}
      </motion.div>
    </AnimatePresence>
  );
}
