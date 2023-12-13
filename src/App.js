import React, { useState, useEffect } from "react";
import Topbar from './topbar';
import MyResponsiveChoropleth from './worldmap';
import MyResponsiveChoroplethInter from './worldmapInter';
import FlexTile from './Tile';
import ReactMarkdown from 'react-markdown';
import "./style/app.css";



function App() {
  const [showReadme, setShowReadme] = useState(false);
  const [readmeContent, setReadmeContent] = useState('');


  useEffect(() => {
    if (showReadme) {
      fetch('/README.md')
        .then(response => response.text())
        .then(text => setReadmeContent(text));
    }
  }, [showReadme]);

  const handleSkýrslaClick = () => {
    setShowReadme(prev => !prev);
  };

  return (
    <div className="App">
      <Topbar onSkýrslaClick={handleSkýrslaClick} />
      {!showReadme ? (
        <div className="tileContainer">
          <FlexTile title="Population" children={<MyResponsiveChoropleth />} children2={<MyResponsiveChoroplethInter />} />
        </div>
      ) : (
        <div className="markdown">
          <ReactMarkdown>{readmeContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}



export default App;
