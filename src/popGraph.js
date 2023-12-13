import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";

const PoplineGraph = (locadionId) => {
  const [data, setData] = useState(null);
    console.log("locid", locadionId);
  useEffect(() => {
    const fetchdata = async () => {



      const url = "https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/"+locadionId.locadionId.locId+"?endYear=2023&variants=4&sexes=3&pagingInHeader=false&format=json&pageSize=100"
      const initialResponse = await axios.get(url);
      console.log(initialResponse);
      const listi = [...initialResponse.data.data];
      const pages = initialResponse.data.pages;

      const promises = [];

      for (let i = 2; i <= pages; i++) {
        const url ="https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/"+locadionId.locadionId.locId+"?endYear=2023&variants=4&sexes=3&pageNumber="+i+"&pagingInHeader=false&format=json&pageNumber=2&pageSize=100"
        console.log("url", url);
        promises.push(axios.get(url));
      }

      const results = await Promise.all(promises);
      console.log(results);
      for (const response of results) {
        listi.push(...response.data.data);
      }

      console.log(listi);
      let objec = {}
      objec.id = locadionId.locadionId.title;
      objec.color = locadionId.locadionId.color;
      objec.data = [];
      for (const item of listi) {
        const subobj = {}
        subobj.x = item.timeLabel;
        subobj.y = item.value
        objec.data.push(subobj);
      }
      console.log(objec);
      setData([objec]);
    };

    fetchdata();
  }, [locadionId.locadionId.title, locadionId.locadionId.color, locadionId.locadionId.locId]);

  console.log("id", locadionId);
  return data ? (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 110, bottom: 50, left: 60 }}
      xScale={{ 
        type: "linear", 
        min: "auto",
        max: "auto"
    
      }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.4s"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Years',
        legendOffset: 36,
        legendPosition: 'middle'
        

      }}
      axisLeft={{
        tickSize: 5,
        format:".4s",
        tickPadding: 5,
        tickRotation: 0,
        legend: "Population",
        legendOffset: -55,
        legendPosition: 'middle'

      }}
      pointSize={5}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  ) : (
    <p>loading...</p>
  );
};

export default PoplineGraph;
