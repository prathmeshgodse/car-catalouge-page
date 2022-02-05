import React from "react";
import CatalougeItem from "../catalouge-item/catalouge-item.component";
import cars from "./catalouge.data.js";

import "./catalogue.styles.scss";
function Catalouge() {
  return (
    <div className="catalouge-container">
      <div className="section-header">CATALOUGE</div>
      <div className="catalouge">
        {cars.map((car) => (
          <CatalougeItem key={car.objectId} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Catalouge;
