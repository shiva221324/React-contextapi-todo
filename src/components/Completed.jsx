import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/Context";
const Completed = () => {
  let { Completed, deleteCompleted } = useContext(TodoContext);
  console.log(Completed);
  return (
    <div className=" flex flex-col gap-3">
      {Completed.map((value, index) => {
        return (
          <div className="flex justify-between items-center border border-gray-300 p-4 rounded-lg shadow-md">
            <p className="text-2xl font-bold">{value}</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => deleteCompleted(value, index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Completed;
