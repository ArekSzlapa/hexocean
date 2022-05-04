import { useState } from "react";

const PizzaSpecifics = () => {
  const [slices, setSlices] = useState("");
  const [diameter, setDiameter] = useState("");

  const checkValue = (el) => {
    setSlices(parseInt(el));
    if (el > 16 || el < 0) {
      alert("The number of pizza slices should be between 1 and 16!");
      setSlices("");
    }
  };

  const checkDiameter = (el) => {
    setDiameter(el.replace(",", "."));
    if (el > 50 || (el.length > 1 && el < 32)) {
      alert("The diameter should be between 32cm and 50cm!");
      setDiameter("");
    }
  };

  return (
    <>
      <label className="type-title" htmlFor="no_of_slices">
        Number of slices:
      </label>
      <input
        required
        value={slices}
        onChange={(e) => checkValue(e.target.value)}
        type="number"
        name="no_of_slices"
        min="1"
        max="8"
        placeholder="8"
      />

      <label className="type-title" htmlFor="diameter">
        Diameter:
      </label>
      <input
        required
        type="number"
        onChange={(e) => checkDiameter(e.target.value)}
        step="0.1"
        min="32"
        value={diameter}
        max="50"
        name="diameter"
        placeholder="32"
      />
    </>
  );
};
export default PizzaSpecifics;
