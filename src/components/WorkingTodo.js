import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import todos from "../redux/modules/todos";
import styled from "styled-components";

const Outside = styled.div`
  display: flex;
  gap: 12px;
`;

function WorkingTodo() {
  //여기서 스토어 접근,todos의 값을 읽어오고싶다 -> useSelector사용
  const data = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h2>Working...</h2>
      <Outside>
        {data.todos.map((todos) => {
          if (!todos.isDone) {
            return <Card todos={todos} />;
          }
        })}
      </Outside>

      <h2>Done...!</h2>
      <Outside>
        {data.todos.map((todos) => {
          if (todos.isDone) {
            return <Card todos={todos} />;
          }
        })}
      </Outside>
    </div>
  );
}

export default WorkingTodo;
