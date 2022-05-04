import "./App.css";
import DishType from "./DishType";
import DishName from "./DishName";

//PRZERZUCIĆ DISHES I DISHES TYPE DO OSOBNYCH KOMPONENTÓW

const App = () => {
  const handleSumbit = async (e) => {
    e.preventDefault();
    const dataObj = {};
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries(e)) {
      dataObj[key] = value;
    }
    console.log(JSON.stringify(dataObj));
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(dataObj),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson);
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
        <DishName />
        <DishType />
        <button className="Submit-button" type="submit">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default App;
