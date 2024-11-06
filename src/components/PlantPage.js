import { useState } from "react";
import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {

  const [searchPlant, setSearchPlant] = useState("")

  function handleSearchChange(event){
    setSearchPlant(event.target.value)


  }
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search onSearchChange={handleSearchChange} setSearchPlant={setSearchPlant}/>
      <PlantList key={plants.id} plants={plants} setPlants={setPlants} searchPlant={searchPlant} onSearchChange={handleSearchChange}/>
    </main>
  );
}

export default PlantPage;
