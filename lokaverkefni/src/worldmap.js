import React, { useEffect, useState } from "react";
import axios from "axios";
import { Choropleth, ResponsiveChoropleth } from "@nivo/geo";
import getPop from "./getPop";

const MyResponsiveChoropleth = () => {
  const [pop, setPop] = useState(null);
  //const [lond, setLond] = useState(""); //location listi 3,7,12,32
  const [features, setFeatures] = useState(null);
  const [projectionScale, setProjectionScale] = useState(100);
  const [real, setReal] = useState(null);
  const [locations, setLocations] = useState({});
  
  
  const fetchDataAndChoroplethData = async () => {
    try {
      const initialResponse = await axios.get(
        "https://population.un.org/dataportalapi/api/v1/locations?pagingInHeader=false&sort=id&format=json"
      );
      const listi = [...initialResponse.data.data];
      const pages = initialResponse.data.pages;

      const promises = [];

      for (let i = 2; i <= pages; i++) {
        const url =
          "https://population.un.org/dataportalapi/api/v1/locations?pageNumber=" +
          i +
          "&pagingInHeader=false&sort=id&format=json";
        promises.push(axios.get(url));
      }

      const results = await Promise.all(promises);
      console.log(results);
      for (const response of results) {
        listi.push(...response.data.data);
      }
      const temp = {}
      for (const item of listi) {
        temp[item.iso3] = item.id;
      }
      console.log(temp);
      setLocations(temp);


    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
        const testData = await axios.get("/data.json");
        const testGogn = testData.data;
        console.log("data.json", testData.data);
        setPop(testGogn);
    } catch (error) {
        console.error("Error fetching data", error);
    }



  };
  const getFeatures = async () => {

    const ChoroplethgognResponse = await axios.get(
        "https://raw.githubusercontent.com/plouc/nivo/master/website/src/data/components/geo/world_countries.json"
      );
      const Choroplethgogn = ChoroplethgognResponse.data;
      setFeatures(Choroplethgogn);

  }

  useEffect(() => {
    fetchDataAndChoroplethData();
    getFeatures();

  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    const updateScale = () => {
      const windowWidth = window.innerWidth;
      const newScale = windowWidth / 20;
      setProjectionScale(newScale);
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  useEffect(() => {
    if (pop) {
        console.log("pop effect", pop)

      let ids = ""; 
      for (const land of pop) {
        if (locations[land.id]) {
          if (ids !== "") {
            ids += ",";
          }
          ids += locations[land.id];
        }
      }
      console.log(ids);
      const populat = getPop(ids);
      console.log("populat", populat);
      setReal(populat);
    }
  }, [pop]);




  if (features && features.features) {
    console.log("features", features.features);
  }

if (locations.lenght > 0) {
    console.log("locations", locations);
}

 if (real) {
    console.log("real", real);
 }
 if (pop) {
    console.log("pop", pop);
 }


  return (
    features && pop ? (
        
        <ResponsiveChoropleth
          data={pop} //pop is test real is correct
          features={features.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={projectionScale}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
        />
      ) : (
        <p>Loading data...</p>
      )
  );
};

export default MyResponsiveChoropleth;
