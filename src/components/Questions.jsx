import React, { useState, useEffect } from "react";
import Card from "./Ui/Cards";
import { AiFillCaretDown } from "react-icons/ai";
import { getQuestionsData } from "../Api/index";
import { Triangle } from "react-loader-spinner";

const Question = ({ filters }) => {
  const [currentQuestion, setCurrentQuestion] = useState({});
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
      <div className="flex flex-col w-screen place-content-center items-center">
        <Triangle
          height="100"
          width="100"
          color="rgb(30 41 59)"
          ariaLabel="triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen place-content-center items-center">
      <Card className="w-1/2 h-1/2 overflow-y-scroll hideScroll">
        <small className="text-right pt-4 pr-4 text-sm text-green-500 bold">
          {`Correct answers: ${counter}/${filters.noOfQuestions}`}
        </small>
        <h1 className="text-4xl bold pl-6 pb-4 text-slate-800 text-center pt-8 pr-2 pl-2 pb-2">
          {currentQuestion.question}
        </h1>
        <section className="flex flex-col place-content-center items-center pb-8 pt-2">
          <div className="pb-2">
            <button
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              {currentQuestion.answers?.answer_a}
            </button>
          </div>
          <div className="pt-2 pb-2">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              {currentQuestion.answers?.answer_b}
            </button>
          </div>
          <div className="pt-2 pb-2">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              {currentQuestion.answers?.answer_c}
            </button>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              {currentQuestion.answers?.answer_d}
            </button>
          </div>
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
          <AiFillCaretDown />
        </button>
      </div>
    </div>
  );
};

export default Question;
