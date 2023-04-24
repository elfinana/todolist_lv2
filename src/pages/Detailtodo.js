import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Componentstyle = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;

  button {
    background-color: #cfdef3;
    margin: 5px;
    padding: 0.5px;
    color: black;
    font-weight: bold;
  }
`;

function Detailtodo() {
  const data = useSelector((state) => {
    return state;
  });

  //id조회
  const params = useParams();

  //어떤 투두인지
  const foundData = data.todos.find((todos) => {
    return todos.id === parseInt(params.id);
  });

  //이전으로가기
  const navigate = useNavigate();

  return (
    <Componentstyle>
      <div>
        ID: {foundData.id}
        <br />
        제목 : {foundData.title} <br />
        내용 : {foundData.body}
      </div>
      <button
        onClickCapture={() => {
          navigate("/");
        }}
      >
        이전으로
      </button>
      <br />
    </Componentstyle>
  );
}

export default Detailtodo;
