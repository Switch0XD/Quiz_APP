import React, { useState } from "react";
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Quiz from './components/Quiz';
import Question from "./components/Questions";
import SetupQuiz from "./components/course";

function App() {
  const [questions, setQuestions] = useState();
  return (
    <div className="background flex">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/quiz/:name" element={<Quiz />} /> */}
          <Route path="/quiz/:name" element={<SetupQuiz setQuestions={setQuestions} />} />
          <Route
            path="/questions"
            element={<Question questions={questions} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
