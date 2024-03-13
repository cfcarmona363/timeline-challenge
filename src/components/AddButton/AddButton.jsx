import { SCAddButton } from "./style";

const AddButton = ({ onClick }) => {
  return (
    <div>
      <SCAddButton onClick={onClick}>New task</SCAddButton>
    </div>
  );
};

export default AddButton;
