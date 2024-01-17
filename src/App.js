import { useState } from "react";

import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

function App() {
  const [document, setDocument] = useState("document.pdf");

  const handleOpen = () => setDocument("another-example.pdf");

  return (
    <div className="App">
      <h1>dfd</h1>
      dfd
      <button className="App-button" onClick={handleOpen}>
        Open andother document
      </button>

      <div style={{ float: 'left', width: '30%', height: '100vh' }}>
      {/* Content of your component */}
      <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
      
    </div>
  );
}

export default App;
