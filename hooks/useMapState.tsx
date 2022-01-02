import { useContext } from "react";
import { MapContext } from "../context/mapContext";

const useMapState = () => {
  const [state, setState] = useContext(MapContext);

  function setSelectedHoverMarkerId(selectedHoverMarkerId: number) {
    setState(state => ({ ...state, selectedHoverMarkerId }));
  }

  function setPropertiesAvailable(propertiesAvailable: Record<string, any>[]) {
    setState(state => ({ ...state, propertiesAvailable }));
  }

  return {
    selectedHoverMarkerId: state.selectedHoverMarkerId,
    setSelectedHoverMarkerId,
    propertiesAvailable: state.propertiesAvailable,
    setPropertiesAvailable
  }

}

export default useMapState;