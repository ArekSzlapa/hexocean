import PizzaSpecifics from "./PizzaSpecifics";
import SoupSpecifics from "./SoupSpecifics";
import SandwichSpecifics from "./SandwichSpecifics";
import PreperationTime from "./PreperationTime";

const DISHES = ["pizza", "sandwich", "soup"];

const DishType = ({ type, setType, value, setValue, errors }) => {
  return (
    <label htmlFor="type">
      <p className="type-title">Dish type:</p>
      <select
        id="type"
        name="type"
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
      <p className="errorMsg">{errors.type}</p>
      <PreperationTime value={value} setValue={setValue} />
      {type === "pizza" && <PizzaSpecifics errors={errors} />}
      {type === "soup" && <SoupSpecifics errors={errors} />}
      {type === "sandwich" && <SandwichSpecifics errors={errors} />}
    </label>
  );
};

export default DishType;
