import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// fix icon bug
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const position: [number, number] = [-6.280294175523231, 106.87840944232882];

export default function MapView() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      style={
             {
               height: "100%",
               width: "100%",
               zIndex:0
             }
            }

    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={position}>
        <Popup>Lokasi Sekolah 📍</Popup>
      </Marker>
    </MapContainer>
  );
}