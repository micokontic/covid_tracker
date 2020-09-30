import React, { useState, useEffect } from "react";
// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import ContryPicker from "./components/ContryPicker/CountryPicker";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";

import coronaImage from "./image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("World");
  const handleCountryChange = async (countryInput) => {
    const dataFetched = await fetchData(countryInput);
    await setData(dataFetched);
    await setCountry(countryInput);
  };
  useEffect(async () => {
    const dataFetched = await fetchData();
    setData(dataFetched);
    console.log(data);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <img src={coronaImage} alt="COVID-19" />
        <Cards prop={{ data, country }} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    </>
  );
}

export default App;
