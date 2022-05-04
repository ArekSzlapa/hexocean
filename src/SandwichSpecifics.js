import { useState } from "react";

const SandwichSpecifics = () => {
  const [slices, setSlices] = useState("");

  const checkValue = (el) => {
    setSlices(parseInt(el));
    if (el > 4 || el < 0) {
      alert("The number of bread slices should be between 1 and 4!");
      setSlices("");
    }
  };

  return (
    <>
      <label className="type-title" htmlFor="noOfBreadSlices">
        Number of bread slices:
      </label>
      <input
        required
        onChange={(e) => checkValue(e.target.value)}
        type="number"
        name="noOfBreadSlices"
        min="1"
        step="1"
        max="4"
        value={slices}
        placeholder="1"
      />
    </>
  );
};
export default SandwichSpecifics;
