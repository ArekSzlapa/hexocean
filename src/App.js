import "./App.css";
import { useState } from "react";
import DishType from "./DishType";
import DishName from "./DishName";

const App = () => {
  const [value, setValue] = useState("01:00:00");
  const [dishName, setDishName] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(1);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const dataObj = {};
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries(e)) {
      dataObj[key] = value;
      formData.entries(e).value = "";
    }
    dataObj.id = id;
    setId((id) => id + 1);
    console.log(JSON.stringify(dataObj));
    let data = JSON.stringify(dataObj);
    try {
      let res = await fetch("https://reqbin.com/echo/post/json", {
        method: "POST",
        body: data,
      });
      if (res.status === 200) {
        setDishName("");
        setType("");
        setValue("01:00:00");
        alert("The order was sumbited!");
      } else alert("Ooops, something went wrong!");
    } catch (err) {
      console.error(err);
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
