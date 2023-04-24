import React from "react";
import App from "../App";
import Header from "../components/Header";
import Form from "../components/Form";
import WorkingTodo from "../components/WorkingTodo";
import styled from "styled-components";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
`;

export default function Main() {
  return (
    <Styles>
      <ToDoContainer>
        <Header />
        <Form />
        <WorkingTodo />
      </ToDoContainer>
    </Styles>
  );
}
