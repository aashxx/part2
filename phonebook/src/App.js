import { React, useState, useEffect } from 'react';
import contacts from './services/contacts';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Alerts from './components/Alerts';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [alert, setAlert] = useState(null);

  useEffect(()=>{
      contacts.getAll().then(contacts => {setPersons(contacts)}).catch(e => console.log(e));
  }, [])

  const handleName = (event) => {
    setNewName(event.target.value);
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value);
    const regex = new RegExp(newFilter, 'i');
    const search = () => persons.filter((person) => person.name.match(regex));
    setPersons(search);
  }

  const addContact = (event) => {
    event.preventDefault();
    const personObj = {
      'name': newName, 
      'number': newNumber
    }
    const contact = persons.find(person => person.name === newName);
    if (contact) {
      const personId = contact.id;
      const confirm = window.confirm(`${newName} already exists, Replace old number with new number?`);
      const changedObj = {...contact, number: newNumber}
      if(confirm) {
        contacts.update(personId, changedObj).then(newPersons => {
          setPersons(persons.map(person => person.id !== personId ? person : newPersons));
          setNewName('');
          setNewNumber('');
        })
        .catch(() => {
          setPersons(persons.filter((person) => person.id !== personId));
          setNewName('');
          setNewNumber('');
          setAlert(`Information of ${contact.name} has already been deleted`);
          setTimeout(() => {
            setAlert(null)
          }, 5000);
        });
        setAlert(`${contact.name}'s number is changed succesfully`);
        setTimeout(() => {
          setAlert(null)
        }, 5000);
      }
    } else {
      contacts.create(personObj).then(newContact => {
        setPersons(persons.concat(newContact));
        setAlert(`${newName} added successfully`);
        setNewName('');
        setNewNumber('');
        setTimeout(() => {
          setAlert(null);
        }, 5000);
      });
    }
  }

  const deleteContact = (id) => {
    const contact = persons.find(person => person.id === id);
    const confirm = window.confirm(`Delete ${contact.name} ?`);
    if(confirm) {
      contacts.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
        setAlert(`${contact.name} is deleted successfully`);
        setTimeout(() => {
          setAlert(null)
        }, 5000);
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Alerts message={alert} />
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>
      <h3>Add a new contact</h3>
      <PersonForm onSubmit={addContact} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber}/>
      <h2>Phone Numbers</h2>
      <Persons persons={persons} onClick={deleteContact}/>
    </div>
  )
}

export default App;