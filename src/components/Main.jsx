import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function Main({ page, setPage }) {
  const itemVariants = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="absolute top-0 left-0">
        <motion.div
          className="w-full h-screen p-6 flex flex-col justify-center items-center gap-14 bg-white"
          key={"container"}
          variants={itemVariants}
          animate="visible"
        >
          <motion.div
            className="main_header text-center flex flex-col gap-2"
            key={1}
            variants={item}
            initial="hidden"
            animate="visible"
          >
            <p className="font-bold text-[32px]">나의 집구하기 테스트</p>
            <p className="font-medium text-[24px] ">나의 집구하기 유형은?</p>
          </motion.div>

          <motion.div
            key={2}
            variants={item}
            className="flex flex-col gap-14"
            initial="hidden"
            animate="visible"
          >
            <img src="/images/main.webp" alt="main" className="w-full" />
            <Button text={"시작하기"} page={page} onClick={setPage} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
