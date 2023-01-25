import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function AboutMars(props) {
  const [hoursData, setSol_Hours] = useState([]);
  const [solRequired, setSol_Required] = useState([]);
  const [solChecked, setSol_Checked] = useState([]);

  useEffect(
    // side effect function
    () => {
      fetch(
        "https://api.nasa.gov/insight_weather/?api_key=fzSdG2XbOJj2lUZxdX3IBaW0nzQGpjVRId40l7C1&feedtype=json&ver=1.0"
      )
        .then((r) => r.json())
        .then((data) => {
          const customData = data.validity_checks["1219"];
          const hoursData = data.validity_checks;

          setSol_Hours(customData.AT.sol_hours_with_data);
          setSol_Hours(customData.HWS.sol_hours_with_data);
          setSol_Hours(customData.PRE.sol_hours_with_data);
          setSol_Hours(customData.WD.sol_hours_with_data);

          const requiredData = data.validity_checks;

          setSol_Required(hoursData.sol_hours_required);

          const checkedData = data.validity_checks;
          setSol_Checked(hoursData.sols_checked);
        });
    },
    []
  );

  return (
    <>
      <Navbar />
      about
      <Footer />
    </>
  );
}

export default AboutMars;
