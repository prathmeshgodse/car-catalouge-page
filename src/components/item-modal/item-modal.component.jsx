import React from "react";
import "./item-modal.styles.scss";

function ItemModal(props) {
  if (!props.showModal) return false;

  const { make, model, price, image, power, speedUp, fuelEconomy, details } =
    props.car;

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="btn-close-container">
          <button className="close-modal" onClick={props.closeModal}>
            &#5741;
          </button>
        </div>
        <img src={image} alt="" className="car-image" />
        <div className="details-container">
          <div className="car-name">{make + " " + model}</div>
          <div className="car-specs-container">
            <p className="power">Power: {power} bph</p>
            <p className="speedup-time">0-60mph: {speedUp} secs</p>
            <p className="fuel-economy">Fuel Economy: {fuelEconomy} km/l</p>
          </div>
          <div className="car-deatils">
            <p className="details">{details}</p>
          </div>
          <div className="car-price-container">
            Price: {formatter.format(price)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

// Power	187 - 502 bhp
// 0 - 60 mph	3.7 - 7.7 secs
// Fuel Economy	24.6 - 49.6 mpg
