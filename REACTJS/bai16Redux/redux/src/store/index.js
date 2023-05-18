import { configureStore } from "@reduxjs/toolkit";
import todo from "./todoapp.js";
import list from "./listapp.js";

export const store = configureStore({
  reducer: {
    todos: todo,
    lists: list,
  },
});
