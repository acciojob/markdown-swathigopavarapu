import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("Heading"); 

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your Markdown here..."
      />
      <h1>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </h1>
    </div>
  );
}

export default MarkdownEditor;
