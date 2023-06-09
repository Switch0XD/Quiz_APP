import React, { useState, useEffect } from "react";
import Card from "./Ui/Cards";
import { BsChevronDoubleDown } from "react-icons/bs";
import { getQuestionsData } from "../Api/index";
import { Triangle } from "react-loader-spinner";

const Question = ({ filters }) => {
  const [currentAnswer, setCurrentAnswer] = useState({ name: "rittik" });
  const [currentQuestion, setCurrentQuestion] = useState({ answers: "null" });
  const [questions, setQuestions] = useState();
  const [counter, setCounter] = useState(0);
  const [isloading, setIsLoading] = useState(false);
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
      console.log("1 : ", questions);
      setCurrentQuestion(questions[i]);

      console.log("2: ", currentQuestion);
    }
  }, [questions]);

  useEffect(() => {
    setCurrentAnswer(currentQuestion.answers);
    console.log("3: ", currentAnswer);
    Object.values(currentAnswer)?.map((answer) => {
      if (answer != null) {
        console.log(answer);
      } else {
        console.log("rittik");
      }
    });
    console.log("4: ", Object.values(currentAnswer));
    console.log("5: ", Object.keys(currentAnswer));
  }, [currentQuestion]);

  const changeQuestion = () => {
    console.log("hello");
    if (counter < questions.length || counter < filters.noOfQuestions) {
      setCounter(counter + 1);
      setCurrentQuestion(questions[counter]);
      // if(counter < questions.length){
      //   setCounter(counter+1);
      // }
    } else {
      alert("Quiz is over");
    }
  };

  // const checkAnswer = () => {

  // }

  // useEffect(() => {
  //   console.log(filters);
  // },[])
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
          {`Correct answers: ${counter}/${filters.noOfQuestions}`}
        </small>
        <h1 className="text-4xl bold pl-6 pb-4 text-slate-800 text-center pt-8 pr-2 pl-2 pb-2">
          {currentQuestion.question}
        </h1>
        <section className="flex flex-col place-content-center items-center pb-8 pt-2">
          {currentAnswer &&
            Object.values(currentAnswer).map((answer) => {
              if (answer != null) {
                console.log(answer);
                return (
                  <div className="pb-2">
                    <option
                      className="w-96 h-auto truncate text-clip text-center bg-gray-400 hover:bg-gray-500 
                      pt-1 pb-1 pl-2 pr-2 btn-txt rounded-3xl"
                      value={answer}
                    >
                      {answer}
                    </option>
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
          className="w-12 h-12 bg-yellow-300 rounded-full 
          text-3xl flex place-content-center items-center p-2 text-white hover:shadow-xl ease-in-out duration-300"
        >
          <BsChevronDoubleDown />
        </button>
      </div>
    </div>
  );
};

export default Question;
