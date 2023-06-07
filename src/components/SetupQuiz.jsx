import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Ui/Cards.jsx";
import { useParams } from "react-router-dom";

const SetupQuiz = ({ setFilters }) => {
  const tech = useParams();
  // console.log(typeof(tech.name));
  const [questionsAmount, setQuestionsAmount] = useState(0);
  const [questionsLevel, setQuestionsLevel] = useState("easy"); // ["easy", "medium", "hard"
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log("1 : ", typeof(questionsAmount));
  //   console.log("2 ",typeof(questionsLevel));
  // },[questionsAmount,questionsLevel]);
  const fromSubmitHandler = (event) => {
    event.preventDefault();
    setFilters({
      noOfQuestions: questionsAmount,
      category: tech.name,
      difficulty: questionsLevel,
    });
    navigate("/questions");
  };
  return (
    <div className="flex w-screen place-content-center items-center">
      <Card className="w-auto h-auto">
        <h1 className="text-l text-center font-bold pb-4 text-slate-800">
          Setup Quizz
        </h1>
        <form onSubmit={fromSubmitHandler} className="pl-6 pr-6 flex flex-col">
          <label className="pb-1 text-slate-800">Number of questions</label>

          <input
            type="number"
            max={50}
            min={1}
            className="border-2 border-slate-800 w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => setQuestionsAmount(e.target.value)}
          />
          <label className="pt-6 text-slate-800">Select Difficulty</label>
          <select
            onChange={(e) => setQuestionsLevel(e.target.value)}
            className="border-2 border-slate-800 w-96 rounded-3xl p-2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <div className="pt-16 pb-8">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl p-1 btn-txt hover:bg-slate-800 hover:drop-shadow-md ease-in-out duration-300"
            >
              Start
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SetupQuiz;
