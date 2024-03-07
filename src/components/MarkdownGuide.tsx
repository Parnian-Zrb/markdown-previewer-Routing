import styled from "styled-components";

const GuideContainer = styled.div`
  max-width: 300px;
  padding: 1rem;
  background-color: #000911;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <h3>Markdown Cheat Sheet</h3>
      <p>
        <ul>
          <li># H1</li>
          <li>## H2</li>
          <li>### H3</li>
          <li>**bold**</li>
          <li>*italic*</li>
          <li>[Link](http://a.com)</li>
          <li>![Image](http://url/a.png)</li>
          <li>`inline code`</li>
          <li>```block code```</li>
          <li>- list item</li>
        </ul>
      </p>
    </GuideContainer>
  );
};

export default MarkdownGuide;
