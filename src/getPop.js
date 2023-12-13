import axios from "axios";

async function getPop(ids) {
    const currentYear = new Date().getFullYear();
    const initialResponse = await axios.get("https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/"+ids+"?startYear="+currentYear+"&endYear="+currentYear+"&variants=4&sexes=3&pagingInHeader=false&format=json");
    const listi = [...initialResponse.data.data];
      const pages = initialResponse.data.pages;

      const promises = [];

      for (let i = 2; i <= pages; i++) {
        const url = "https://population.un.org/dataportalapi/api/v1/data/indicators/49/locations/"+ids+"?startYear="+currentYear+"&endYear="+currentYear+"&variants=4&pageNumber="+i+"&sexes=3&pagingInHeader=false&format=json";
        promises.push(axios.get(url));
      }

      const results = await Promise.all(promises);

      for (const response of results) {
        listi.push(...response.data.data);
      }

    // console.log("listi", listi);

    let skil = [];
    let keypar = {}
    for (let item of listi) {
        let obje = {};
        obje.id = item.iso3;
        obje.value = item.value;
        keypar[item.iso3] = item.locationId;
        skil.push(obje);
    }


    return {skil: skil, keypar: keypar};
}

export default getPop;