import PizzaSpecifics from "./PizzaSpecifics";
import SoupSpecifics from "./SoupSpecifics";
import SandwichSpecifics from "./SandwichSpecifics";
import PreperationTime from "./PreperationTime";

const DISHES = ["Pizza", "Sandwich", "Soup"];

const DishType = ({ type, setType, value, setValue }) => {
  return (
    <label htmlFor="type">
      <p className="type-title">Dish type:</p>
      <select
        id="type"
        name="type"
        required
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
        onBlur={(e) => {
          setType(e.target.value);
        }}
      >
        <option disabled value="">
          Select an option
        </option>
        {DISHES.map((dish) => (
          <option key={dish} value={dish}>
            {dish}
          </option>
        ))}
      </select>
      <PreperationTime value={value} setValue={setValue} />
      {type === "Pizza" && <PizzaSpecifics />}
      {type === "Soup" && <SoupSpecifics />}
      {type === "Sandwich" && <SandwichSpecifics />}
    </label>
  );
};

export default DishType;
