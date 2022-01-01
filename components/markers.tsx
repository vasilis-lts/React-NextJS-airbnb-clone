import MapMarker from './Mapmarker';

export default function Markers({ data }) {
  return (
    data.map((entry, index) => {
      return (
        <MapMarker entry={entry} />
      )
    })
  )
} 