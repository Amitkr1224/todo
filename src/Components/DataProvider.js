import React, { useState, useEffect, createContext } from "react";
export const DataContext = createContext();

// ! Getting Data from Local Storage
const getListItems = () => {
  let list = localStorage.getItem("todoStorage");
  // console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("todoStorage"));
  } else {
    return [];
  }
};

export const DataProvider = (props) => {
  const [todos, setTodos] = useState(getListItems());

  //storing data in localStorage
  useEffect(() => {
    localStorage.setItem("todoStorage", JSON.stringify(todos));
  }, [todos]);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};
