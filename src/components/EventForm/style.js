import styled from "styled-components";
export const SCAddEventModal = styled.div`
  background-color: #fefefe;
  color: #490b3e;
  margin: 15% auto;
  padding: 5px 0 10px 0;
  width: 430px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  gap: 15px;
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

export const SCInput = styled.input`
  background-color: #fefefe;
  border-radius: 8px;
  border: solid 1px #490b3e;
  color: #490b3e;
  height: 20px;
  font-size: 15px;
  padding: 10px;
`;

export const SCInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SCButton = styled.button`
  background-color: #d4492a;
  color: #fefefe;
  width: 100%;
`;

export const SCHeader = styled.div`
  display: flex;
  background-color: #fefefe;
  height: 26px;
  width: 100%;
  justify-content: end;
  border-radius: 20px;
`;
