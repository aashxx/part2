import React from 'react'

function Part({ part }) {
    return (
        <div key={part.id}>
            {part.name} : {part.exercises}
        </div>
    )
}

export default Part;