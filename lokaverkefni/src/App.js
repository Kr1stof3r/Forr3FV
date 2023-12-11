import React from 'react';
import Topbar from './topbar';
import MyResponsiveChoropleth from './worldmap';
import MyResponsiveChoroplethInter from './worldmapInter';
import FlexTile from './Tile';
import "./style/app.css";



fetch('/data.json')
.then(response => response.json()).then(data2 => {
    console.log(data2);
})




function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="tileContainer">
      <FlexTile title="Tile 1" children={<MyResponsiveChoropleth/>} children2={<MyResponsiveChoroplethInter/>}></FlexTile>
      </div>
      {/* <MyResponsiveChoropleth/> */}
      
      
      {/* Your other components/content goes here */}
    </div>
  );
}


export default App;
