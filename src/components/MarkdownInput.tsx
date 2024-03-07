import styled from "styled-components";

// Define a textarea styled component
// define the interface for the props (one is listed below)
// onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputContainer = styled.div`
  margin-bottom: 1em;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 1;
`;
// destructure the props
const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  // pass the props (on change and value to the StyledTextArea styled component)
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
