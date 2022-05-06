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
        key === "spiciness_scale" ||
        key === "slices_of_bread"
      ) {
        dataObj[key] = parseInt(value);
      } else if (key === "diameter") {
        dataObj[key] = parseFloat(value);
      } else dataObj[key] = value;
    }
    dataObj.id = id;
    setId((id) => id + 1);
    try {
      let res = await fetch(
        "https://frosty-wood-6558.getsandbox.com:443/dishes",
        {
          method: "POST",
          body: JSON.stringify(dataObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const error = await res.json();
        setErrors(error);
        console.log(errors);
      }
      if (res.status === 200) {
        setDishName("");
        setType("");
        setValue("01:00:00");
        alert("Form submited successfuly!");
      }
    } catch (error) {
      return;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSumbit}>
        <h1>HexOcean FoodForm</h1>
        <DishName
          errors={errors}
          dishName={dishName}
          setDishName={setDishName}
        />
        <DishType
          errors={errors}
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
