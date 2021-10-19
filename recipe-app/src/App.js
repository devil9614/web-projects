import {useEffect,useState} from "react";
import './App.css';
import Recipe from "./recipes";

function App() {
  const Api_ID = "6be5d1e3";
  const Api_Key = "e6461abf56e49f9e02977a90dc0add0a";
  // const request `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const [recipes,SetRecipies] = useState([]);
  const [search,SetSearch] = useState("");
  const [query,SetQuery] = useState("");

  useEffect(() => {
    Recipes()
  },[query]);

  const Recipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${Api_ID}&app_key=${Api_Key}`);
    const data = await response.json();
    SetRecipies(data.hits);
    // console.log(data.hits);
  }

  const updateChange = e => {
    SetSearch(e.target.value);
    // console.log("its updating")
  }

  const getSearch = e =>{
    e.preventDefault();
    SetQuery(search);
    SetSearch("");
  }
  return (
    <div className="App">
      <form className = "search" onSubmit = {getSearch}>
        <input type = "text" className = "search-bar" value = {search} onChange = {updateChange}></input>
        <button className = "search-button" type = "submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title = {recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
