import { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L, { latLngBounds, LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// let DefaultIcon = L.icon({
//   iconUrl: '/icon.png',
//   iconSize: [48, 48],
//   shadowUrl: '/icon-shadow.png'
// });

// L.Marker.prototype.options.icon = DefaultIcon;

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

function SetBounds(props) {
  const map = useMap();
  useEffect(() => {
    const markerBounds: LatLngBoundsExpression = [];
    props.markers.forEach(marker => {
      markerBounds.push([marker.coordinates.longitude, marker.coordinates.latitude])
    });
    map.fitBounds(markerBounds)
  }, [props.data]);

  return null
}

const Map = (props) => {
  const [SelectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(null);

  return (
    <MapContainer
      center={[40.730610, -73.935242]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: "55%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.data.map((entry, index) => {
        return (
          <Marker
            icon={new L.Icon({
              iconUrl: '/icon.png',
              iconSize: SelectedMarkerIndex === index ? [64, 64] : [48, 48],
            })}
            key={entry.name}
            eventHandlers={{
              click: () => {
                setSelectedMarkerIndex(index);
              },
            }}
            position={[
              entry.coordinates.longitude,
              entry.coordinates.latitude
            ]}>
            {/* <Popup>{entry.name}'s<br />Home</Popup> */}
          </Marker>
        )
      })}

      {/* <SetViewOnClick
        coords={[
          props.data[props.index].coordinates.langitude,
          props.data[props.index].coordinates.latitude
        ]}
      /> */}
      <SetBounds markers={props.data} />
    </MapContainer>
  )
}

export default Map