import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { useState, useRef } from "react";
import addresses from "../addresses";
import dark from "../mapStyles";
import styles from "./styles.module.css";

const GoogleMapsReact = ({ ...props }) => {
  const mapStyles = {};
  const [selectedAdress, setSelectedAdress] = useState({});
  const markerRef = useRef([]);
  markerRef.current = new Array(addresses.length);
  const markerHander = (index) =>
    setSelectedAdress({ selectedMarker: markerRef.current[index].marker });
  const { selectedMarker } = selectedAdress;
  return (
    <div className={styles.root} style={{ height: 500 }}>
      {/* <ul className={`${styles.locations} ${selectedMarker ? styles.hide : ''}`}>
                {addresses.map((mark, index) => (
                    <li key={index} onClick={() => markerHander(index)}  >
                        <span className={styles.index}>{index + 1}</span>
                        <b>{mark.title}</b>
                        <address>{mark.address}</address>
                    </li>
                ))}
            </ul> */}
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={addresses[0]}
        onReady={(mapProps, map) => map.setOptions({ styles: dark })}
      >
        {addresses.map((mark, index) => (
          <Marker
            key={index}
            ref={(re) => (markerRef.current[index] = re)}
            title={mark.title}
            address={mark.address}
            position={mark}
            animation={props.google.maps.Animation.BOUNCE}
            // icon={{ url: markerIcon }}
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
            <div className={styles.InfoWindow}>
              <b className="font-weight-bold d-block mt-3 mb-2">
                {selectedMarker.title}
              </b>
              <address className="my-2">{selectedMarker.address}</address>
            </div>
          )}
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6iKLVzr34W23jAZDT3HlrElOHfK6IH_w",
})(GoogleMapsReact);
