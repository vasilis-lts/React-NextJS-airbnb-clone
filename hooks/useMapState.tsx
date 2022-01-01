import { useContext } from "react";
import { MapContext } from "../context/mapContext";

const useMapState = () => {
  const [state, setState] = useContext(MapContext);

  function setSelectedHoverMarkerId(selectedHoverMarkerId: number) {
    setState(state => ({ ...state, selectedHoverMarkerId }));
  }

  return {
    selectedHoverMarkerId: state.selectedHoverMarkerId,
    setSelectedHoverMarkerId
  }

}

export default useMapState;