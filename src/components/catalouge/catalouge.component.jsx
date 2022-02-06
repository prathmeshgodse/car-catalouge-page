import React, { useState } from "react";
import CatalougeItem from "../catalouge-item/catalouge-item.component";
import cars from "./catalouge.data.js";
import ItemModal from "../item-modal/item-modal.component";
import "./catalogue.styles.scss";

function Catalouge() {
  const [hideCatalouge, setHideCatalouge] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [car, setCar] = useState({});

  const openDetails = (car) => {
    setCar(car);
    setShowModal(true);
    setHideCatalouge(true);
  };

  const closeDetails = () => {
    setShowModal(false);
    setHideCatalouge(false);
  };

  return (
    <>
      <ItemModal showModal={showModal} car={car} closeModal={closeDetails} />

      <div className={"catalouge-container" + (hideCatalouge ? " hidden" : "")}>
        <div className="section-header">CATALOUGE</div>
        <div className="catalouge">
          {cars.map((car) => (
            <CatalougeItem
              key={car.objectId}
              car={car}
              hideCatalouge={setHideCatalouge}
              openDetails={openDetails}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Catalouge;
