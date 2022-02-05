import React from "react";
import "./catalouge-item.styles.scss";

function CatalougeItem(props) {
  const { Make, Model, Category, Image, Price } = props.car;

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="item-container">
      <img src={Image} alt="" className="car-image" />
      <div className="item-details">
        <div className="details-section-one">
          <p className="car-name">{`${Make} ${Model}`}</p>
          <p className="car-model">{Category}</p>
        </div>
        <div className="details-section-two">
          <p className="car-price">{formatter.format(Price)}</p>
        </div>
      </div>
      <div className="btn-details-container">
        <button className="btn-details">Check Details</button>
      </div>
    </div>
  );
}

export default CatalougeItem;
