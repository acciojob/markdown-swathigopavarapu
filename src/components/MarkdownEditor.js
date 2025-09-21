import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
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
        <ReactMarkdown source={markdown} />
      </div>
    </div>
  );
}

export default MarkdownEditor;
