import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changableUrl = url;

  if (country == "world") {
    changableUrl = url;
  } else if (country) {
    changableUrl = `${url}/countries/${country}`;
  }
  try {
    const response = await axios.get(changableUrl);

    const modifiedData = {
      confirmed: response.data.confirmed.value,
      deaths: response.data.deaths.value,
      recovered: response.data.recovered.value,
      lastUpdate: response.data.lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const countries = async () => {
  try {
    const response = await axios.get(
      "https://covid19.mathdro.id/api/countries"
    );
    const countriesArray = response.data.countries.map((item) => {
      return item.name;
    });
    return countriesArray;
  } catch (error) {
    console.log(error);
  }
};
