import { useEffect, useState } from "react";
import Question from "./components/Question";
import Main from "./components/Main";
import Result from "./components/Result";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./components/ProgressBar";
import { useNavigate } from "react-router-dom";

function Mbti() {
  const [answer, setAnswer] = useState([]);
  const [data, setData] = useState();
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

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

  const nextQuestion = (value) => {
    setAnswer((prev) => [...prev, value]);
    setPage((prev) => prev + 1);
  };

  // 질문목록
  useEffect(() => {
    fetch(
      "http://devd-interview.s3-website.ap-northeast-2.amazonaws.com/questions"
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

  useEffect(() => {
    if (!data) return;
    if (answer.length === data.length) {
      let sum = 0;

      for (let i = 0; answer.length > i; i++) {
        sum += Number(answer[i]);
      }

      const result = Math.ceil(sum / answer.length);

      navigate(`/result/${result}`);
    }
  }, [answer]);

  return (
    <div>
      {data ? (
        <div className="relative flex justify-center ">
          {page !== 0 && page <= data.length && (
            <ProgressBar page={page} length={data.length} />
          )}
          <AnimatePresence>
            {page === 0 ? (
              <Main page={page} setPage={setPage} />
            ) : (
              page <= data.length && (
                <motion.div
                  className="absolute w-full h-full top-0 left-0 mt-8"
                  key={page}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Question
                    content={data[answer.length]}
                    page={page}
                    onClick={nextQuestion}
                  />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Mbti;
