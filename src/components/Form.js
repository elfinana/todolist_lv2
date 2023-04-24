import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import todos from "../redux/modules/todos";
import { addTodo } from "../redux/modules/todos";

const Box = styled.div`
  background-color: pink;
  padding: 1.5rem;
  font-weight: bold;
`;
const FormStyle = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 15rem;
    padding: 0.7rem;
    border: none;
    border-radius: 10px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  button {
    background-color: #cfdef3;
    color: black;
    font-weight: bold;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    border: none;
  }
`;
function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const data = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <Box>
      <FormStyle>
        제목
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        내용
        <input
          type="text"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            dispatch(addTodo({ title, body }));
            setTitle("");
            setBody("");
          }}
        >
          추가하기
        </button>
      </FormStyle>
    </Box>
  );
}

export default Form;
