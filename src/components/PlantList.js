import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchPlant}) {
  const filteredPlants = plants.filter((eachPlant) =>
    eachPlant.name.toLowerCase().includes(searchPlant.toLowerCase())
);
  return (
    <ul className="cards">
       {filteredPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
