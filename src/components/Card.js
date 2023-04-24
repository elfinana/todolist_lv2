import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cardstyle = styled.div`
  font-weight: bold;
  background-color: pink;
  border: 6px solid #cfdef3;
  height: 150px;
  width: 280px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Componentstyle = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: #cfdef3;
    margin: 5px;
    padding: 0.5px;
    color: black;
    font-weight: bold;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    border: none;
  }
`;

const Card = ({ todos }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state;
  });

  return (
    <Cardstyle>
      <Componentstyle>
        <div>
          <Link to={`/detailtodo/${todos.id}`}>상세보기</Link>
          <div key={todos.id}>
            {todos.title}
            <br />
            {todos.body}
            <br />
            <button
              onClick={() => {
                dispatch(deleteTodo(todos));
              }}
            >
              삭제하기
            </button>

            <button
              onClick={() => {
                dispatch(toggleStatusTodo(todos));
              }}
            >
              {todos.isDone ? "취소" : "완료"}
            </button>
            <br />
          </div>
        </div>
      </Componentstyle>
    </Cardstyle>
  );
};

export default Card;
