import React, {useState, useEffect} from 'react'
import './style.css'; 
import {generateWeigthsEelements, 
    generateRanges, 
    generatePartOfLineElements, 
    generateHandSignalsElements,
    generateRclElements
} from '../generate_Exam/examGenerator'
const ExamPage = (props) => {
    const [examQuestions, setExamQuestions] = useState([])
    function generate(){
        if(props.name === "Convert Weights"){
            setExamQuestions( generateWeigthsEelements(props.name))
        
        }if(props.name === "Range"){
            console.log("in page exam if")
            setExamQuestions( generateRanges(props.name))

        }if(props.name === "Part of line"){
            setExamQuestions( generatePartOfLineElements(props.name))
        }
        if(props.name === "Hand Signals"){
            setExamQuestions( generateHandSignalsElements(props.name))
        }
        if(props.name === "Total weight" 
        || props.name === "Maximum radius" 
        || props.name === "Gross capacity" 
        || props.name === "Boom angle high and low" 
        || props.name === "Loaded boom angle" 
        || props.name === "Maximum Boom Length"){
            setExamQuestions( generateRclElements(props.name))
        }
        
    }
    useEffect(()=>{
        if(props.name=== "Convert Weights"){
            setExamQuestions( generateWeigthsEelements(props.name))
        
        }
        if(props.name=== "Range"){
            setExamQuestions( generateRanges(props.name))
        
        }if(props.name=== "Part of line"){
            setExamQuestions( generatePartOfLineElements(props.name))
        }
        if(props.name=== "Hand Signals"){
            setExamQuestions( generateHandSignalsElements(props.name))
        }if(props.name=== "Total weight" 
        || props.name=== "Maximum radius" 
        || props.name=== "Gross capacity" 
        || props.name=== "Boom angle high and low" 
        || props.name=== "Loaded boom angle" 
        || props.name=== "Maximum Boom Length"){
            setExamQuestions( generateRclElements(props.name))
        }
        
    },[])   
    return (
        <section className='exam-page container' >
            <h2>
                {props.name}
            </h2>

            <div>
                <div className="exam-question-container">
                    
                   {examQuestions}
                    
                </div>
            </div>

            <div className="button-wrap-2 button" onClick={generate}>
                <a className="circle">Generate</a>
                <div className="outer-circle"></div>
            </div>
        </section>
      
    )
  }
  export default ExamPage;