import { useState } from "react";

const SoupSpecifics = ({ errors }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <label className="type-title" htmlFor="SoupSpecifics">
        Spiciness level:
        <br />
        (1 is mild and 10 is spicy):
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="number"
        name="spiciness_scale"
        value={value}
        min="1"
        max="10"
        placeholder="Spiciness level"
      />
      <p className="errorMsg">{errors.spiciness_scale}</p>
    </>
  );
};
export default SoupSpecifics;
