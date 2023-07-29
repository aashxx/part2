import React from 'react';

const Persons = ({persons, onClick}) => {
    return (
        <div>
            {persons.map((person) => <p key={person.id}>{person.name}: {person.number} <span><button onClick={() => onClick(person.id)}>Delete</button></span></p>)}
        </div>
    )
}

export default Persons;
