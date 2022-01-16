import React from "react";


export default function Student(props) {
    return (
        <div>
            <h1 className="top1">Student Information: </h1>
            
            
            {props.nameBio}
            
        </div>
    )
}