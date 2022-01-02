import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import useMapState from '../hooks/useMapState';

export default function MapMarker({ entry }) {

  const { selectedHoverMarkerId } = useMapState();

  return (
    <Marker
      key={entry.id}
      // icon={new L.Icon({
      //   iconUrl: '/icon.png',
      //   // iconSize: [48, 48],
      //   iconSize: selectedHoverMarkerId === entry.id ? [64, 64] : [48, 48],
      // })}
      icon={new L.DivIcon({
        className: `div-icon ${selectedHoverMarkerId === entry.id ? 'div-icon-selected' : ''}`,
        html: `€${entry.pricePerNight}`
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
      <style jsx>{`
      .div-icon{
          margin-left: -25px;
          margin-top: -6px;
          text-align: center;
          border-radius: 12px;
          width: auto;
          min-width: 50px;
          height: auto;
          background: #fff;
          font-size: 14px;
          font-weight: 700;
          border: 2px solid #222;
          padding: 4px 6px;
          transform: translate3d(441px, 425px, 0px);
          z-index: 425;
          outline: none;
        }`}
      </style>
    </Marker>
  )
}
