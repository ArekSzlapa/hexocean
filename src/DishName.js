import { useState } from "react";

const DishName = () => {
  const [dishName, setDishName] = useState("");
  return (
    <label htmlFor="dishName">
      <p className="type-title">Dish name:</p>
      <input
        id="dishName"
        name="dishName"
        required
        value={dishName}
        placeholder="Dish name"
        onChange={(e) => setDishName(e.target.value)}
      />
    </label>
  );
};
export default DishName;
