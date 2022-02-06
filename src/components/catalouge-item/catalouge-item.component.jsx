import React from "react";
import "./catalouge-item.styles.scss";

function CatalougeItem(props) {
  const { make, model, category, image, price } = props.car;

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const handleOpenDetails = () => {
    props.openDetails(props.car);
  };

  return (
    <>
      <div className={"item-container"}>
        <img src={image} alt="" className="car-image" />
        <div className="item-details">
          <div className="details-section-one">
            <p className="car-name">{`${make} ${model}`}</p>
            <p className="car-model">{category}</p>
          </div>
          <div className="details-section-two">
            <p className="car-price">{formatter.format(price)}</p>
          </div>
        </div>
        <div className="btn-details-container">
          <button className="btn-details" onClick={handleOpenDetails}>
            Check Details
          </button>
        </div>
      </div>
    </>
  );
}

export default CatalougeItem;
