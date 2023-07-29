import React from "react";
import Part from "./Part";

const Content = (props) => {
    return (
        <div>
          {
            props.course.parts.map((part, index)=>{
              return <Part part={part} key={index}/>
            })
          }
        </div>

    )
}

export default Content;
