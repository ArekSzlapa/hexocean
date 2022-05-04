import { useState } from "react";

const SoupSpecifics = () => {
  const [value, setValue] = useState("");
  const checkValue = (el) => {
    setValue(parseInt(el));
    if (el > 10 || el < 0) {
      alert("The Spicy scale should be between 1 and 10!");
      setValue("");
    }
  };
  return (
    <>
      <label className="type-title" htmlFor="SoupSpecifics">
        Spiciness level:
        <br />
        (1 is mild and 10 is spicy):
      </label>
      <input
        required
        onChange={(e) => checkValue(e.target.value)}
        type="number"
        name="SpicinessLevel"
        value={value}
        min="1"
        max="10"
        placeholder="Spiciness level"
      />
    </>
  );
};
export default SoupSpecifics;
