import { useState } from "react";

const SandwichSpecifics = ({ errors }) => {
  const [slices, setSlices] = useState("");

  return (
    <>
      <label className="type-title" htmlFor="noOfBreadSlices">
        Number of bread slices:
      </label>
      <input
        onChange={(e) => setSlices(e.target.value)}
        type="number"
        name="slices_of_bread"
        min="1"
        step="1"
        max="4"
        value={slices}
        placeholder="Number of bread slices"
      />
      <p className="errorMsg">{errors.slices_of_bread}</p>
    </>
  );
};
export default SandwichSpecifics;
