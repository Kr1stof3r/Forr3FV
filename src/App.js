import React from 'react';
import Topbar from './topbar';
import MyResponsiveChoropleth from './worldmap';
import MyResponsiveChoroplethInter from './worldmapInter';
import FlexTile from './Tile';
import ReactMarkdown from 'react-markdown';
import readmeContent from './README.md';
import "./style/app.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="tileContainer">
      <FlexTile title="Population" children={<MyResponsiveChoropleth/>} children2={<MyResponsiveChoroplethInter/>}></FlexTile>
      </div>
      {showReadme && <ReactMarkdown>{readmeContent}</ReactMarkdown>}
    </div>
  );
}


export default App;
