// import the styled component library
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

// Create a Output container styled component which is a div
const OutputContainer = styled.div`
  width: 100%;
  height: 200px;
`;
// create the interface for the props
interface MarkdownOutputProps {
  markdown: string;
}

// destructure the props
const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  // return the OutputContainer with <ReactMarkdown>{markdown}</ReactMarkdown> as a child
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;

// destructure the props
