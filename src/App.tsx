import { useState } from "react";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";

const App = () => {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };
  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };
  return (
    <>
      <Header onToggleGuide={toggleGuide} />
      {showGuide && <MarkdownGuide />}
      <div>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </>
  );
};

export default App;
