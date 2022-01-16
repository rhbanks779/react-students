import React from "react";

export default function Scores(props){
    return(
        <div>
            <h1 className="top2">Student Scores: </h1>
            <div className="score">{props.scoreInfoName} {props.scoreInfo}</div>
        </div>
    )
}