import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <div className="map-wrapper" style={{height: '110%', width: '110%'}}>
      <MapContainer
        center={position}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Madras Institute of Technology, Anna University
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// import React, { useEffect } from "react";
// import L from "leaflet";

// function Map() {
//   useEffect(() => {
//     // var map = L.map("map").setView([51.505, -0.09], 13);
//     L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//       attribution: "© OpenStreetMap",
//     }).addTo(map);
//   }, []);

//   return (
//     <div id="leaflet">
//       <div id="map">
//         {/* <MapContainer
//           center={[12.948048, 80.139742]}
//           zoom={25}
//           scrollWheelZoom={false}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={[12.948048, 80.139742]}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </MapContainer> */}
//       </div>
//     </div>
//   );
// }

// export default Map;
