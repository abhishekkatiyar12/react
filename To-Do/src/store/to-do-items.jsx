import { createContext, useReducer } from "react";

export const Todocontext = createContext({});

function toitemsReducer(currentState, action) {
  let newarray=currentState;
  if (action.type === "addItem") {
    newarray= [...currentState, { task: action.payload.task, date: action.payload.date }];
  } else if (action.type === "deleteItem") {
    newarray=currentState.filter((item) => item.task !== action.payload.name);
  } 
  return newarray;
}

function InnerContainer({ children }) {
  const [tasks, dispatchAction] = useReducer(toitemsReducer, []);

  function addItem(duetask, duedate) {
    dispatchAction({
      type: "addItem",
      payload: {
        task: duetask,
        date: duedate,
      },
    });
  }

  function deleteItem(name) {
    dispatchAction({
      type: "deleteItem",
      payload: {
        name,
      },
    })   
  }

  return (
    <Todocontext.Provider value={{ todoItems: tasks, addItem, deleteItem }}>
      {children}
    </Todocontext.Provider>
  );
}

export default InnerContainer;
