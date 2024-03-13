import { SCButton } from "./styles";

const CloseButton = ({ onClick }) => {
  return (
    <SCButton className="close-button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        className="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path d="M5.354 5.354a.5.5 0 0 1 .708 0L8 7.293l2.938-2.939a.5.5 0 1 1 .708.708L8.707 8l2.937 2.938a.5.5 0 1 1-.708.708L8 8.707l-2.938 2.937a.5.5 0 1 1-.708-.708L7.293 8 4.354 5.062a.5.5 0 0 1 0-.708z" />
      </svg>
    </SCButton>
  );
};

export default CloseButton;
