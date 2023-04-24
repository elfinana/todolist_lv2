import { useRef } from "react";
//액션밸류
export const submit = "todos/submit";
export const deletelist = "todos/deletelist";
export const changelist = "todos/changelist";

//action creator
//추가하기
export const addTodo = (payload) => {
  return {
    type: "submit",
    payload: payload,
  };
};

//삭제하기
export const deleteTodo = (payload) => {
  return {
    type: "deletelist",
    payload: payload,
  };
};

//상태완료취소
export const toggleStatusTodo = (payload) => {
  return {
    type: "changelist",
    payload: payload,
  };
};

//초기상태값
const initialState = [
  {
    id: Date.now(), // id는 모두 고유값이어야 합니다.
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
  },
  {
    id: Date.now() + 1, // id는 모두 고유값이어야 합니다.
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: true,
  },
];

//리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "submit":
      const tempTodo = {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
        isDone: false,
      };
      return [...state, tempTodo];

    case "deletelist":
      const removeTodo = state.filter((todos) => todos.id != action.payload.id);
      return removeTodo;

    case "changelist":
      const changeTodo = state.map((todos) => {
        if (todos.id == action.payload.id) {
          return { ...todos, isDone: !action.payload.isDone };
        } else {
          return { ...todos };
        }
      });
      return changeTodo;

    default:
      return state;
  }
};

export default todos;
