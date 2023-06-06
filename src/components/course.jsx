import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Ui/Cards.jsx";

const Course = ({ setQuestions }) => {
  const [questionsAmount, setQuestionsAmount] = useState(0);
  const navigate = useNavigate();

  const fromSubmitHandler = (event) => {
    event.preventDefault();
    setQuestions(questionsAmount);
    navigate("/questions");
  };
  return (
    <div className="flex w-screen place-content-center items-center">
      <Card>
        <h1 className="text-l font-bold pl-6 pb-4 text-slate-800">
          Setup Quizz
        </h1>
        <form onSubmit={fromSubmitHandler} className="pl-6 pr-6 flex flex-col">
          <label className="pb-1">Number of questions</label>

          <input
            type="number"
            max={50}
            min={1}
            className="border-2 border-slate-800 w-96 rounded-2xl pt-1 pb-1 pr-2 pl-2"
            onChange={(e) => setQuestionsAmount(e.target.value)}
          />
          <label className="pt-6">Select Difficulty</label>
          <select className="border-2 border-slate-800 w-96 rounded-3xl p-2">
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

export default Course;
