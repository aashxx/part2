import React from 'react';

const PersonForm = ({onSubmit, newName, newNumber, handleName, handleNumber}) => {
    return (
        <div>
        <form onSubmit={onSubmit}>
            <div>
            Name: <input type='text' value={newName} onChange={handleName}/>
            </div>
            <div>
            Number: <input type='text' value={newNumber} onChange={handleNumber}/>
            </div>
            <div>
            <button type="submit">Add</button>
            </div>
        </form>
        </div>
    )
}

export default PersonForm;
