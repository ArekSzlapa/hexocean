import { useState } from "react";

const PizzaSpecifics = ({ errors }) => {
  const [slices, setSlices] = useState("");
  const [diameter, setDiameter] = useState("");

  return (
    <div>
      <label className="type-title" htmlFor="no_of_slices">
        Number of slices:
      </label>
      <input
        value={slices}
        onChange={(e) => setSlices(e.target.value)}
        type="number"
        name="no_of_slices"
        min="1"
        max="16"
        placeholder="Number of slices"
      />
      <p className="errorMsg">{errors.no_of_slices}</p>

      <label className="type-title" htmlFor="diameter">
        Diameter:
      </label>
      <input
        type="number"
        onChange={(e) => setDiameter(e.target.value)}
        step="0.1"
        min="32"
        value={diameter}
        max="50"
        name="diameter"
        placeholder="Diameter"
      />
      <p className="errorMsg">{errors.diameter}</p>
    </div>
  );
};
export default PizzaSpecifics;
