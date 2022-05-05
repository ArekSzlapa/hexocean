import { useState } from "react";

const PizzaSpecifics = () => {
  const [slices, setSlices] = useState("");
  const [diameter, setDiameter] = useState("");
  const [diameterMsg, setDiameterMsg] = useState("");
  const [pizzaSlices, setPizzaSlices] = useState("");

  const checkValue = (el) => {
    setSlices(parseInt(el));
    if (el > 16 || el < 0) {
      setPizzaSlices("The number of pizza slices should be between 1 and 16!");
    } else setPizzaSlices("");
  };

  const checkDiameter = (el) => {
    parseFloat(setDiameter(el.replace(",", ".")));
    if (el > 50 || el < 32) {
      setDiameterMsg("The diameter should be between 32cm and 50cm!");
    } else setDiameterMsg("");
  };

  return (
    <div>
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
        max="16"
        placeholder="Number of slices"
      />
      <p className="errorMsg">{pizzaSlices}</p>

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
        placeholder="Diameter"
      />
      <p className="errorMsg">{diameterMsg}</p>
    </div>
  );
};
export default PizzaSpecifics;
