import React from "react";
import Location from "../../../assets/location.svg";
import Write from "../../../assets/write.svg";
import "./index.css";


export default function InfoWindow({ selectedMarker }) {
  return (
    <div className="container">
      <div className="title-container">
        <b class="adress-header">{selectedMarker.title}</b>
        <img id="write" alt="write" src={Write} />
      </div>

      <div className="adress">
        <img className="location" alt="" src={Location} />
        <p class="adress-text">{selectedMarker.address}</p>
      </div>
    </div>
  );
}
