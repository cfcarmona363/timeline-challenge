import styled from "styled-components";

export const SCAddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Set a high z-index to ensure the button appears on top of other content */
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: teal;
`;

export const SCAddEventModal = styled.div`
  background-color: #151f29;
  margin: 15% auto;
  padding: 20px;
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 11;
  display: flex;
  justify-content: center;
  border-radius: 20px;
`;

export const SCAddEventModalFallback = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SCForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const SCButtonWrapper = styled.div`
  display: flex;
`;
