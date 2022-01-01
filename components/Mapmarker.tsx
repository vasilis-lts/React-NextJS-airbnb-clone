import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import useMapState from '../hooks/useMapState';

export default function MapMarker({ entry }) {

  const { selectedHoverMarkerId } = useMapState();

  return (
    <Marker
      key={entry.id}
      icon={new L.Icon({
        iconUrl: '/icon.png',
        // iconSize: [48, 48],
        iconSize: selectedHoverMarkerId === entry.id ? [64, 64] : [48, 48],
      })}
      eventHandlers={{
        click: () => {
          // setSelectedMarkerIndex(index);
        },
      }}
      position={[
        entry.coordinates.longitude,
        entry.coordinates.latitude
      ]}>
      <Popup>
        <div style={{ fontSize: 14 }}>
          {entry.name}<br /><b>€{entry.pricePerNight}</b> / night
        </div>
      </Popup>
    </Marker>
  )
}