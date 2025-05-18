const Person = require("../models/person");

// Create and Save a New Person
const createPerson = async () => {
  try {
    const person = new Person({
      name: "John Doe",
      age: 30,
      favoriteFoods: ["Pizza", "Burger"],
    });

    const savedPerson = await person.save();
    console.log("Person saved:", savedPerson);
  } catch (error) {
    console.error("Error saving person:", error);
  }
};

module.exports = { createPerson };

const createManyPeople = async () => {
  try {
    const arrayOfPeople = [
      { name: "Alice", age: 25, favoriteFoods: ["Pasta", "Ice Cream"] },
      { name: "Bob", age: 32, favoriteFoods: ["Steak", "Fries"] },
      { name: "Charlie", age: 28, favoriteFoods: ["Sushi", "Ramen"] },
    ];

    const savedPeople = await Person.create(arrayOfPeople);
    console.log("People saved:", savedPeople);
  } catch (error) {
    console.error("Error saving multiple people:", error);
  }
};

module.exports = { createManyPeople };

const findPeopleByName = async (personName) => {
  try {
    const people = await Person.find({ name: personName });
    console.log(`People with the name ${personName}:`, people);
  } catch (error) {
    console.error("Error finding people by name:", error);
  }
};

module.exports = { findPeopleByName };
