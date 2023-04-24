import React from "react";
import styled from "styled-components";

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
`;

function Header() {
  return (
    <>
      <TopBox>
        <h3>My Todo List</h3>
        <h4>react</h4>
      </TopBox>
    </>
  );
}

export default Header;
