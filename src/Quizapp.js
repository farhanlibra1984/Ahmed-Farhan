import React, { useState } from "react";
import question from './data/question.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import QuizResult from './QuizResult'





export default function Quizapp(){
    const [currentQuestion, setCurrentQuestion]= useState(0);
    const [score, setScore]= useState(0);
    const [clicked, setClicked]=useState(0);
    const [showResult, setShowResult]= useState(false);

    const changeQuestion =()=>{
            updateScore();
        if(currentQuestion<question.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClicked(0);
        }
        else{
                setShowResult(true);
        }
        
    }
    const updateScore =()=>{
        if (clicked === question[currentQuestion].answer){
            setScore(score+1);
            console.log(score);
        }
    }
 

    return(
        <div>
        <div className="container">
            {showResult ? (
                <QuizResult score= {score} totalScore={question.length}></QuizResult>
            ):(<>
                        <h1>QUIZ APP</h1>
            
            <div className="question">
                <span>{question[currentQuestion].statement}</span>
            </div>
            <div className="option-container">
                {
               question[currentQuestion].option.map((op, i)=>{
                return(
                    <button classNameName = {`option-btn ${clicked=== i+1? "checked":null}`}
                    key={i} onClick={()=>setClicked(i+1)}>{op}</button>
                )


                
               })
            }
            </div>
            <div className="option-btn">
                
                <button onClick={changeQuestion}>NEXT</button>



            </div>

            </>
            )}
        </div>
        </div>
    )
    



        
        
    

    
}
