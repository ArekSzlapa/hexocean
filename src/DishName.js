const DishName = ({ dishName, setDishName }) => {
  return (
    <>
      <label htmlFor="dishName">
        <p className="type-title">Dish name:</p>
      </label>
      <input
        required
        id="dishName"
        name="name"
        value={dishName}
        placeholder="Dish name"
        onChange={(e) => setDishName(e.target.value)}
      />
    </>
  );
};
export default DishName;
