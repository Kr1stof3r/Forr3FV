import React from 'react';
import Topbar from './topbar';
import MyResponsiveChoropleth from './worldmap';


fetch('/data.json')
.then(response => response.json()).then(data2 => {
    console.log(data2);
})




function App() {
  return (
    <div className="App">
      <Topbar />
      <MyResponsiveChoropleth/>
      
      
      {/* Your other components/content goes here */}
    </div>
  );
}


export default App;
