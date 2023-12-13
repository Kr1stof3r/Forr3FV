import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ResponsiveChoropleth} from "@nivo/geo";
import getPop from "./getPop";
import "./style/FlexTile.css"



const MyResponsiveChoropleth = () => {
  const [features, setFeatures] = useState(null);
  const [projectionScale, setProjectionScale] = useState(100);
  const [real, setReal] = useState(null);
  const ids = "4,24,8,784,32,51,40,31,108,56,204,854,50,100,44,70,112,84,68,96,64,72,140,124,756,152,156,384,120,178,170,188,192,196,203,276,262,208,214,12,218,818,232,724,233,231,246,242,238,250,266,826,268,288,324,270,624,226,300,320,328,340,191,332,348,360,356,372,364,368,352,376,380,388,400,392,398,404,417,116,414,418,422,430,434,144,426,440,442,428,504,498,450,484,807,466,104,499,496,508,478,454,458,516,540,562,566,558,528,578,524,554,512,586,591,604,608,598,616,630,620,600,634,642,643,646,732,682,729,686,90,694,222,706,688,740,703,705,748,760,148,768,764,762,795,626,780,788,792,158,834,800,804,858,840,860,862,704,548,275,887,710,894,716,410";
  const geo = useRef(null);
  const [popupContent, setPopupContent] = useState(null);


  useEffect(() => {
    const getFeatures = async () => {

      const ChoroplethgognResponse = await axios.get(
          "https://raw.githubusercontent.com/plouc/nivo/master/website/src/data/components/geo/world_countries.json"
        );
        const Choroplethgogn = ChoroplethgognResponse.data;
        setFeatures(Choroplethgogn);
  
    }
  
    getFeatures();
    getPop(ids).then((popData) => {
        setReal(popData);})
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    if (geo.current) {
      setProjectionScale(geo.current.clientWidth*geo.current.clientHeight / 5000); 
      console.log("proj", geo.current.clientWidth / 7)
      
    }
  }, [geo.current]);


  if (features && features.features) {
    console.log("features", features.features);
  }


 if (real) {
    console.log("real", real);
 }


  return (
    features && real ? (
        <div style={{ height: '100%', width: '100%'}} ref={geo}>
        <ResponsiveChoropleth
          data={real.skil} //pop is test real is correct
          features={features.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[0, 100000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={projectionScale}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          isInteractive={false}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
        />
        {popupContent &&
         <div className="popup">
            <button className="close-btn" onClick={() => {setPopupContent(null)}}>Close</button>
            {popupContent}</div>}
        </div>
      ) : (
        <p>Loading data...</p>
      )
      
  );
};

export default MyResponsiveChoropleth;
