import styled from "styled-components";

export const SCTimelineContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  gap: 8px;
`;

export const SCTimelineItem = styled.div`
  background-color: #490b3e;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SCTimeLineItemContainer = styled.div`
  grid-row-start: ${({ start }) => start};
  grid-row-end: ${({ end }) => end};
  background-color: #f3e7f4;
  border-radius: 10px;
  max-width: 150px;
  display: flex;
  flex-direction: column;
`;

export const SCHeader = styled.div`
  background-color: #490b3e;
  border-radius: 10px;
  padding: 0 10px 10px 10px;
  position: sticky;
  top: 0;
`;

export const SCButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;
