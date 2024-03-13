import styled from "styled-components";

export const SCTimelineContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  gap: 5px;
`;

export const SCTimelineItem = styled.div`
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SCTimeLineItemContainer = styled.div`
  grid-row-start: ${({ start }) => start};
  grid-row-end: ${({ end }) => end};
  padding: 20px;
  border-radius: 5px;
  background-color: gray;
  max-width: 150px;
  display: flex;
  flex-direction: column;
`;

export const Prueba = styled.div`
  position: sticky;
  top: 0;
`;
