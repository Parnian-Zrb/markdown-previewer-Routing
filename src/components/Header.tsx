import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 1000px;
  background-color: #282c34;
  color: white;
`;

const Title = styled.h1`
  font-size: 2em;
`;
const Button = styled.button`
  background-color: #61dafb;
  padding: 10px 20px;
  color: #282c34;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #35a8d4;
  }
`;

interface TitleProps {
  onToggleGuide: () => void;
}
const Header = ({ onToggleGuide }: TitleProps) => {
  return (
    <Container>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </Container>
  );
};

// const Header = () => {
//   return (
//     <header>
//       <h1>Markdown Previewer</h1>
//       <button>Cheat Sheet</button>
//     </header>
//   );
// };

export default Header;
