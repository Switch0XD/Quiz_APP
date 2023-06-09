import React, { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
// import Quiz from "./components/Quiz";
import Question from "./components/Questions";
import SetupQuiz from "./components/SetupQuiz";

function App() {
  const [filters, setFilters] = useState({
    noOfQuestions: "",
    category: "",
    difficulty: "",
  });
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/quiz/:name" element={<Quiz />} /> */}
          <Route
            path="/quiz/:name"
            element={<SetupQuiz setFilters={setFilters} />}
          />
          <Route path="/questions" element={<Question filters={filters} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
