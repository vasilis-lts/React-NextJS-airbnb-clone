import useMapState from '../hooks/useMapState';
import MapMarker from './Mapmarker';

export default function Markers() {
  const { propertiesAvailable } = useMapState();

  if (!propertiesAvailable) return null;

  return (
    propertiesAvailable.map((entry, index) => {
      return (
        <MapMarker key={index} entry={entry} />
      )
    })
  )
} 