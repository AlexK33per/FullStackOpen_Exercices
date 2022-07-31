import { useState } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const addNewContact = (event) => {
    event.preventDefault();
    persons.some(person => person.name === newName)
    ? window.alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNumber("");
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <Filter value={filter} handler={handleFilter} />
        <PersonForm values={[newName, newNumber]} handlers={[handleNewName, handleNewNumber]} />
        <Button handler={addNewContact} />
      </form>
      <ContactList contacts={persons} filter={filter} />
    </div>
  );
};

export default App;
