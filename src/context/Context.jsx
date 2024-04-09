import { createContext } from "react";
import { useState } from "react";
export const TodoContext = createContext(null);

export const TodoProvider = (props) => {
  let [value, SetValue] = useState();
  let [todolist, Settodolist] = useState([]);
  let [Completed, setCompleted] = useState([]);
  function changeHandler(e) {
    SetValue(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    let present = [...todolist];
    present.unshift(value);
    Settodolist(present);
    console.log(present);
  }
  function deleteHandler(index) {
    let present = [...todolist];
    present.splice(index, 1);
    Settodolist(present);
  }
  function editHandler(index) {
    let a = prompt("Edit your todo");
    let present = [...todolist];
    present[index] = a;
    Settodolist(present);
  }
  function completedHandler(item, index) {
    let completelist = [...Completed];
    completelist.unshift(item);
    setCompleted(completelist);
    let present = [...todolist];
    present.splice(index, 1);
    Settodolist(present);
  }
  function deleteCompleted(item, index) {
    let completelist = [...Completed];
    completelist.splice(index, 1);
    setCompleted(completelist);
  }
  const values = {
    value,
    changeHandler,
    submitHandler,
    todolist,
    deleteHandler,
    editHandler,
    completedHandler,
    Completed,
    deleteCompleted,
  };
  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};
