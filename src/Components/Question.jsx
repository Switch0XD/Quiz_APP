import React from "react";
import Card from "./UI/Card";
import { AiFillCaretDown } from "react-icons/ai";

const Question = ({ questions }) => {
  return (
    <div className="flex flex-col w-screen place-content-center items-center">
      <Card>
        <small className="text-right pt-4 pr-4 text-sm text-green-500 bold">
          {`Correct answers: 0/${questions}`}
        </small>
        <h1 className="text-4xl bold pl-6 pb-4 text-slate-800 text-center pt-8 pr-2 pl-2 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          unde non voluptatibus ut. Earum eaque nisi saepe.
        </h1>
        <section className="flex flex-col place-content-center items-center pb-8 pt-2">
          <div className="pb-2">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              Answer 1
            </button>
          </div>
          <div className="pt-2 pb-2">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              Answer 2
            </button>
          </div>
          <div className="pt-2 pb-2">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              Answer 3
            </button>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-96 bg-gray-400 text-white rounded-3xl
               p-1 btn-txt hover:bg-gray-500 hover:drop-shadow-md ease-in-out duration-300"
            >
              Answer 4
            </button>
          </div>
        </section>
      </Card>
      <div className="pt-8 pb-2 flex flex-col place-content-center items-center">
        <button
          type="submit"
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
