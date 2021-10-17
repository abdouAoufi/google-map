import React, { useRef, useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import dark from "../mapStyles";
import { addresses, subAdresses } from "../addresses";
import CostumeInfoWindow from "./InfoWindow";
import "./index.css";
import indicator from "../../assets/indicator.png";
import subIndicator from "../../assets/subindicator.png";
import Button from "../Button/Button";

function CostumeMap(props) {
  const markerRef = useRef([]);
  const [selectedAdress, setSelectedAdress] = useState({});
  const { selectedMarker } = selectedAdress;
  const mapOptions = {
    fullscreenControl: false,
  };

  const containerStyle = {
    position: "relative",
    width: "90%",
    height: "400px",
    borderRadius: "12px",
    overFlow: "hidden",
    padding: "8px",
    border: "3px solid #c4c4c4",
  };

  return (
    <div className="big-container">
      <Map
        options={mapOptions}
        containerStyle={containerStyle}
        google={props.google}
        zoom={10}
        initialCenter={addresses[2]}
        onReady={(mapProps, map) => map.setOptions({ styles: dark })}
      >
        <Button text="Add lighting" />
        {addresses.map((mark, index) => (
          <Marker
            key={index}
            ref={(re) => (markerRef.current[index] = re)}
            title={mark.title}
            address={mark.address}
            position={mark}
            //   animation={props.google.maps.Animation.BOUNCE}
            icon={{
              url: indicator,
            }}
            onClick={(_, selectedMarker) =>
              setSelectedAdress({ selectedMarker })
            }
          />
        ))}
        {subAdresses.map((mark, index) => (
          <Marker
            key={index}
            ref={(re) => (markerRef.current[index] = re)}
            title={mark.title}
            address={mark.address}
            position={mark}
            //   animation={props.google.maps.Animation.BOUNCE}
            icon={{
              url: subIndicator,
            }}
            onClick={(_, selectedMarker) =>
              setSelectedAdress({ selectedMarker })
            }
          />
        ))}
        <InfoWindow
          visible={selectedMarker ? true : false}
          marker={selectedMarker}
          onClose={() => setSelectedAdress({})}
        >
          {selectedMarker && (
            <CostumeInfoWindow selectedMarker={selectedMarker} />
          )}
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6iKLVzr34W23jAZDT3HlrElOHfK6IH_w",
})(CostumeMap);
