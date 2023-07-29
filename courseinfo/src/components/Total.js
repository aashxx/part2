import React from 'react'

const Total = (props) => {
    const parts = props.course.parts;
    return (
        <div>
            <strong>Total of&nbsp; 
            {parts.reduce((sum, x) => {
                return sum + x['exercises'];
            }, 0)}&nbsp;exercises
            </strong>
        </div>
    )
}

export default Total;