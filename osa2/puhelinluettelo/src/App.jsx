import { useState, useEffect } from 'react'
import personService from './services/persons'

const Filter = (props) => <>filter <input value={props.filter} onChange={props.onChange}/> </>

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input
                  value={props.nameValue}
                  onChange={props.handleNameChange}/>
        </div>
        <div>
          number: <input
                    value={props.numberValue}
                    onChange={props.handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({personsToShow, clickDelete}) => personsToShow.map(person => {
  return (
    <p key={person.id}>{person.name} {person.number} 
    <button onClick={() => clickDelete(person.id)}> delete </button>
    </p>)
    }
  )

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(data => setPersons(data))
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const clickDelete = (id) => {
    const name = persons.find(person => person.id === id).name
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      personService.remove(id)
        .then(res => setPersons(persons.filter(person => person.id !== id)))
      }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`)) {
        const id = persons.find(person => person.name === newName).id
        personService.update(id, newPerson)
          .then(res => {
            setPersons(persons.map(person => person.id !== id ? person : res))
          })
        setNewName('')
        setNewNumber('')
        return
      }
    return
    }
    personService.create(newPerson)
      .then(res => setPersons(persons.concat(res)))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange}/>
      <h3>Add new number</h3>
      <PersonForm onSubmit={addPerson} nameValue={newName} handleNameChange={handleNameChange} numberValue={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} clickDelete={clickDelete}/>
    </div>
  )

}

export default App