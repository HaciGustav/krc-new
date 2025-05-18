import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const MapComponent = () => {
  const position = [48.14413254104794, 16.365309324616145];

  useEffect(() => {
    // Fix for default marker icons in Leaflet with Next.js
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    });
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>KRC Buchhaltungskanzlei</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
