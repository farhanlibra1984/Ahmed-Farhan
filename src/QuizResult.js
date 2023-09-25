import React from "react";

export default function QuizResult(props){

    return(
        <div>
            <h1>Result</h1>
            your score : {props.score}<br/>
            totalScore : {props.totalScore}
            
        </div>
    )
}