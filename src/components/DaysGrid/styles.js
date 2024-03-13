import styled from "styled-components";

export const SCMainGrid = styled.div`
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  min-width: 140px;
  gap: 5px;
`;

export const SCGridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  color: white;
`;
