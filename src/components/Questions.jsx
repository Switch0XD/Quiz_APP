import React, { useState, useEffect } from "react";
import Card from "./Ui/Cards";
import { useNavigate } from "react-router-dom";
import { BsChevronDoubleDown } from "react-icons/bs";
import { getQuestionsData } from "../Api/index";
import { Triangle } from "react-loader-spinner";

const Question = ({ filters }) => {
  const [currentAnswer, setCurrentAnswer] = useState({ name: "rittik" });
  const [currentQuestion, setCurrentQuestion] = useState({ answers: "null" });
  const [questions, setQuestions] = useState();
  const [counter, setCounter] = useState(0);
  const [isloading, setIsLoading] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);
  const navigate = useNavigate();
  var i = 0;
  useEffect(() => {
    setIsLoading(true);
    getQuestionsData(
      filters.noOfQuestions,
      filters.category,
      filters.difficulty
    )
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // console.log(questions);
    // setCurrentQuestion[questions[0]];
    // console.log(currentQuestion);
  }, []);

  useEffect(() => {
    if (questions) {
      // console.log("1 : ", questions);
      setCurrentQuestion(questions[i]);

      console.log("2: ", currentQuestion);
    }
  }, [questions]);

  useEffect(() => {
    setCorrectAnswers(currentQuestion.correct_answers);
    console.log("3: ", correctAnswers);
  }, [currentQuestion]);

  useEffect(() => {
    setCurrentAnswer(currentQuestion.answers);
  }, [currentQuestion]);

  const changeQuestion = () => {
    if (counter < filters.noOfQuestions) {
      setCounter(counter + 1);
      setCurrentQuestion(questions[counter]);
      // if(counter < questions.length){
      //   setCounter(counter+1);
      // }
    } else {
      setModalVisibility(true);
    }
  };

  const checkAnswer = (e) => {
    const string = `${e.target.value}_correct`;
    const originalStyle = e.target.style;
    if (correctAnswers[string] === "true") {
      e.target.style = "background-color: rgb(34 197 94);";
      setTimeout(() => {
        e.target.style = originalStyle;
        changeQuestion();
        setProgress(progress + 1);
      }, 1000);
    } else {
      e.target.style = "background-color: rgb(220 38 38);";
    }
    setTimeout(() => {
      e.target.style = originalStyle;
      changeQuestion();
    }, 1000);
  };

  if (isloading) {
    return (
      <div className="flex flex-col w-screen h-screen place-content-center items-center">
        <Triangle
          color="rgb(30 41 59)"
          height={100}
          width={100}
          ariaLabel="triangle-loading"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen h-screen place-content-center items-center">
      <Card className="w-1/2 h-1/2 overflow-y-scroll hideScroll">
        <small className="text-right pt-4 pr-4 text-sm text-green-500 bold">
          {`Correct answers: ${progress}/${filters.noOfQuestions}`}
        </small>
        <h1 className="text-4xl bold pl-6 text-slate-800 text-center pt-8 pr-2">
          {currentQuestion.question}
        </h1>
        <section className="flex flex-col place-content-center items-center pb-8 pt-8">
          {currentAnswer &&
            Object.values(currentAnswer).map((answer) => {
              if (answer != null) {
                return (
                  <div className="pb-2">
                    <p
                      key={Math.random()}
                      className="w-96 h-auto break-normal text-center text-white bg-gray-400 hover:bg-gray-500 
                      pt-1 pb-1 pl-2 pr-2 btn-txt rounded-3xl break-all"
                      value={Object.keys(currentAnswer).find(
                        (key) => currentAnswer[key] === answer
                      )}
                      onClick={checkAnswer}
                    >
                      {answer}
                    </p>
                  </div>
                );
              }
            })}
        </section>
      </Card>
      <div className="pt-8 pb-2 flex flex-col place-content-center items-center">
        <button
          onClick={() => {
            changeQuestion();
          }}
          className="w-12 h-12 bg-orange-400 hover:bg-orange-500 rounded-full 
          text-3xl flex place-content-center items-center p-2 text-white hover:shadow-xl ease-in-out duration-300"
        >
          <BsChevronDoubleDown />
        </button>
      </div>
      {modalVisibility && (
        <div className="flex absolute w-screen h-screen place-content-center items-center">
          <Card className="flex absolute place-content-center items-center w-5/12 h-5/12 z-10">
            <h1 className="text-6xl bold pl-6 pb-4 text-slate-800 text-center pt-8 pr-2 pl-2 pb-2">
              Congrats!
            </h1>
            <p className="text-center text-xl">{`You answered ${progress}/${filters.noOfQuestions} questions correctly`}</p>
            <div className="py-4">
              <button
                type="submit"
                className="w-24 bg-orange-400 hover:bg-orange-500 text-white rounded-3xl p-1 btn-txt hover:drop-shadow-md ease-in-out duration-300"
                onClick={() => navigate("/profile")}
              >
                Continue
              </button>
            </div>
          </Card>
          <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-60 blur-sm z-[5]"></div>
        </div>
      )}
    </div>
  );
};

export default Question;
