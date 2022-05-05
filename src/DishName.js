const DishName = ({ dishName, setDishName }) => {
  return (
    <>
      <label htmlFor="dishName">
        <p className="type-title">Dish name:</p>
      </label>
      <input
        id="dishName"
        name="name"
        required
        value={dishName}
        placeholder="Dish name"
        onChange={(e) => setDishName(e.target.value)}
      />
    </>
  );
};
export default DishName;
