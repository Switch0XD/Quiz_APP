import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./Components/Question";
import SetupQuiz from "./Components/SetupQuiz";

const App = () => {
  const [questions, setQuestions] = useState();
  return (
    <div className="background flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SetupQuiz setQuestions={setQuestions} />} />
          <Route
            path="/questions"
            element={<Question questions={questions} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
