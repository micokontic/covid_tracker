import React, { useEffect, useState } from "react";
import { countries } from "../../api/index";
import { fetchData } from "../../api/index";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(async () => {
    var data = await countries();
    console.log(data);
    setFetchedCountries(await data);
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="world">World</option>
        {fetchedCountries.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
