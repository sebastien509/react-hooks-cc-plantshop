import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect} from "react";

function App() {
    const [plants, setPlants] = useState([])
    const [isLoading, setIsLoading] = useState(true)


async function getPlants() {  
  try {
    const response = await fetch('http://localhost:3000/plants')
    if(!response.ok) throw new Error("Network response was not ok")
       const plantData = await response.json()
      setPlants(plantData)
      setIsLoading(false)

    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  }

  useEffect(() => {
    getPlants();
  }, []);

   if (isLoading){
    return (<h1>Pokemons Loading...</h1>)
   }


  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}  setPlants={setPlants}/>
    </div>
  );
}

export default App;
