import { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L, { latLngBounds, LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './markers';

// function SetViewOnClick({ coords }) {
//   const map = useMap();
//   map.setView(coords, map.getZoom());

//   return null;
// }

// function SetBounds(props) {
//   const map = useMap();
//   useEffect(() => {
//     const markerBounds: LatLngBoundsExpression = [];
//     props.markers.forEach(marker => {
//       markerBounds.push([marker.coordinates.longitude, marker.coordinates.latitude])
//     });
//     map.fitBounds(markerBounds)
//   }, [props.data]);

//   return null
// }

function GetBounds() {
  const map = useMap();
  useEffect(() => {
    console.log(map.getBounds())
  }, [map]);

  // useEffect(() => {
  //   map.on('move', onMove)
  //   return () => {
  //     map.off('move', onMove)
  //   }
  // }, [map, onMove])

  return null
}


const Map = (props) => {
  return (
    <MapContainer
      center={[48.210033, 16.363449]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: "55%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers data={props.data} />


      {/* <SetViewOnClick
        coords={[
          props.data[props.index].coordinates.langitude,
          props.data[props.index].coordinates.latitude
        ]}
      /> */}
      {/* <SetBounds markers={props.data} /> */}
      <GetBounds />
    </MapContainer>
  )
}

export default Map