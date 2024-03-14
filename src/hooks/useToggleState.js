import { useState } from "react";

/**
 * Custom hook that will manage a boolean value in state
 * @param {boolean} initialVal (optional) An initial value. default: `false`
 * @returns {Array} (Object, function) An array of the state value and its toggle function, in the format of `useState()` return.
 */
function useToggle(initialVal = false) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // return piece of state AND a function to toggle it
  return [state, toggle];
}
export default useToggle;