import "./App.css";
import { useState } from "react";
import DishType from "./DishType";
import DishName from "./DishName";

const App = () => {
  const [value, setValue] = useState("01:00:00");
  const [dishName, setDishName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(1);
  const [errors, setErrors] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();
    const dataObj = {};
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries(e)) {
      if (
        key === "no_of_slices" ||
        key === "SpicinessLevel" ||
        key === "noOfBreadSlices"
      ) {
        dataObj[key] = parseInt(value);
      } else if (key === "diameter") {
        dataObj[key] = parseFloat(value);
      } else dataObj[key] = value;
    }
    dataObj.id = id;
    setId((id) => id + 1);
    let data = JSON.stringify(dataObj);
    try {
      let res = await fetch(
        "https://frosty-wood-6558.getsandbox.com:443/dishes",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        const error = await res.json();
        setErrors(error);
        console.error("There was an error!", errors);
      }
      if (res.status === 200) {
        setDishName("");
        setType("");
        setValue("01:00:00");
        alert("Form submited successfuly!");
      } else alert("Ooops, something went wrong!");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSumbit}>
        <h1>HexOcean FoodForm</h1>
        <DishName dishName={dishName} setDishName={setDishName} />
        <DishType
          type={type}
          setType={setType}
          value={value}
          setValue={setValue}
        />
        <button className="Submit-button" type="submit">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default App;
