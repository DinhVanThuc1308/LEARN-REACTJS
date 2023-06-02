import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducers/bookReducer";
import rootSaga from "./redux/sagas/bookSaga";
import App from "./App";

// Khởi tạo middleware Saga
const sagaMiddleware = createSagaMiddleware();

// Tạo store với middleware Saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Chạy saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
