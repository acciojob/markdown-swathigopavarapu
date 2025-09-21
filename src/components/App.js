//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import "../styles/App.css"

function App() {
  return (
    <div className="app">
      {/* <h1>Markdown Editor</h1> */}
      <MarkdownEditor />
    </div>
  );
}

export default App;


