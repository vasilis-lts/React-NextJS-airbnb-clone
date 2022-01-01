import { createContext, useState } from 'react';

interface MapState {
  selectedHoverMarkerId: number
}

const defaultMapState: MapState = {
  selectedHoverMarkerId: 0,
};

const MapContext = createContext<any | undefined>(
  undefined
);

const MapProvider = (props) => {
  const [state, setState] = useState(defaultMapState);

  return (
    <MapContext.Provider value={[state, setState]}>
      {props.children}
    </MapContext.Provider>
  );
}


export { MapContext, MapProvider }