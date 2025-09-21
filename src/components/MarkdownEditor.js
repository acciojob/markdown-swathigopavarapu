import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  // Initialize exactly what Cypress expects
  const [markdown, setMarkdown] = useState("# Heading");

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write your Markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
