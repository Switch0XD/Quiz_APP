import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Ui/Cards";
import { BsArrowRightCircleFill } from "react-icons/bs";
const data = [
  {
    name: "DevOps",
  },
  {
    name: "Code",
  },
  {
    name: "Linux",
  },
  {
    name: "SQL",
  },
  {
    name: "Docker",
  },
  {
    name: "CMS",
  },
];
const Todos = () => {
  const navigate = useNavigate();
  const startQuiz = (name) => {
    console.log(name);
    navigate(`/quiz/${name}`);
  };
  return (
    <>
      <div className="grid grid-cols-2 pt-20 gap-4">
        {data.map((item) => (
          <div className="flex place-content-center items-center">
            <Card className="w-9/12 h-48 m-4 hover:scale-110 ease-in-out duration-300">
              <h1 className="text-6xl bold text-slate-800 pl-4 pt-4">
                {item.name}
              </h1>

              <div className="flex place-content-end items-end mr-4 mt-12">
                <button
                  onClick={startQuiz}
                  class="relative inline-flex items-center px-12 py-1 overflow-hidden btn-txt text-orange-500 border-2 border-orange-500 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span class="absolute left-0 block w-full h-0 transition-all bg-orange-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative">Start</span>
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
