import { useEffect, useState } from "react";
import Button from "./components/Button";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import ContactList from "./components/ContactList";
import axios from "axios";
import OkAlert from "./components/OkAlert";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState({ name: "", number: "" });
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        setPersons(response.data);
      })
  })

  const handleNewName = (event) => {
    setNewName(event.target.value);
    setPerson({name: '', number: ''})
  };

  const handleNewNumber = (event) => {
    setNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  const addNewContact = (event) => {
    event.preventDefault();
    if(persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = { name: newName, number: newNumber }
      setPerson(newPerson)
      setPersons(persons.concat(newPerson));
    }
    setNewName("");
    setNumber("");
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <OkAlert person={person} />
        <Filter value={filter} handler={handleFilter} />
        <PersonForm values={[newName, newNumber]} handlers={[handleNewName, handleNewNumber]} />
        <Button handler={addNewContact} />
      </form>
      <ContactList contacts={persons} filter={filter} />
    </div>
  );
};

export default App;
