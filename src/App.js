import React, { useState } from "react";
import Topbar from './topbar';
import MyResponsiveChoropleth from './worldmap';
import MyResponsiveChoroplethInter from './worldmapInter';
import FlexTile from './Tile';
import ReactMarkdown from 'react-markdown';
import readmeContent from './static/README.md';
import "./style/app.css";



function App() {
  const [showReadme, setShowReadme] = useState(false);

  const handleSkýrslaClick = () => {
    setShowReadme(true);
  };
  
  return (
    <div className="App">
      <Topbar onSkýrslaClick={handleSkýrslaClick}/>
      <div className="tileContainer">
      <FlexTile title="Population" children={<MyResponsiveChoropleth/>} children2={<MyResponsiveChoroplethInter/>}></FlexTile>
      </div>
      {showReadme && <ReactMarkdown>{readmeContent}</ReactMarkdown>}
    </div>
  );
}


export default App;
