import React from 'react'
import ExamResult from './ExamResult'
const ExamQuestion = (props) => {
    var uuid = require('uuid');
    let examResultData= []
    let randomIndex = Math.floor(Math.random() * 4)
    let RclImage = ""
    if(props.weight){
        let holder = []
        switch (props.weight.answerKey) {
            case "KG":
                if(props.weight.key === "LBS"){
                    holder[0] = {value: Math.ceil(props.weight.number / 2) , unit: props.weight.answerKey} 
                    holder[1] = {value: Math.ceil(props.weight.number / 2.4) , unit: props.weight.answerKey} 
                    holder[2] = {value: Math.ceil(props.weight.number / 2.1) , unit: props.weight.answerKey} 

                }else { // KEY = TON
                    holder[0] = {value: (props.weight.number * 100) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number * 10000) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number * 2200) , unit: props.weight.answerKey} 
                }
                break;
            case "LBS":
                if(props.weight.key === "KG"){
                    holder[0] = {value: Math.ceil(props.weight.number * 2), unit: props.weight.answerKey} 
                    holder[1] = {value: Math.ceil(props.weight.number * 2.4) , unit: props.weight.answerKey} 
                    holder[2] = {value: Math.ceil(props.weight.number * 2.1) , unit: props.weight.answerKey} 

                }else { // KEY = TON
                    holder[0] = {value: (props.weight.number * 2000).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number * 2400).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number * 2100).toFixed(0) , unit: props.weight.answerKey} 
                }
                break;
            case "TON":
                if(props.weight.key === "LBS"){
                    holder[0] = {value: (props.weight.number / 2000).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number / 2400).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number / 2100).toFixed(0) , unit: props.weight.answerKey} 

                }else { // KEY = KG
                    holder[0] = {value: (props.weight.number / 100 ).toFixed(0) , unit: props.weight.answerKey} 
                    holder[1] = {value: (props.weight.number / 1000 ).toFixed(0) , unit: props.weight.answerKey} 
                    holder[2] = {value: (props.weight.number / 2200 ).toFixed(0) , unit: props.weight.answerKey} 
                }
                break;
        
            default:
                break;
        }
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.weight.answer, unit: props.weight.answerKey }
            else {
                let popORshift = Math.floor(Math.random() * 2)
                if(popORshift) examResultData[i] = holder.pop()
                else examResultData[i] = holder.shift()
            }
        }
    }
    if(props.range){
        let unit = ""
        props.range.key === "angle" ? unit = "°" : unit = "M"
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.range.answer, unit: unit}
            else {
                let randomNbrs = [];
                while(randomNbrs.length < 4){
                    let r = Math.floor(Math.random() * 5) + 1;
                    if(randomNbrs.indexOf(r) === -1) randomNbrs.push(r);
                }
                let plusORminus = Math.floor(Math.random() * 2)
                if(plusORminus) {
                    let val = props.range.answer + randomNbrs[i]
                    examResultData[i] = {value: val, unit: unit}
                }
                else {
                    let val = props.range.answer - randomNbrs[i]
                    val > 0 ? val = val : val = props.range.answer + randomNbrs[i]
                    examResultData[i] = {value: val, unit: unit}
                }
            }
        }
    }
    if(props.POL){
        var rngFrom = [...props.POL.fakeAnswers]
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.POL.answer, unit: "line"}
            else {
                let popORshift = Math.floor(Math.random() * 2)
                if(popORshift) examResultData[i] = {value: rngFrom.pop(), unit: "line"}
                else examResultData[i] = {value: rngFrom.shift(), unit: "line"}
            }
        }
    }
    if(props.handSignal){
        var rngFrom = [...props.handSignal.fakeAnswers]
        for(let i=0; i<4; i++){
            if(i === randomIndex) examResultData[i]={value: props.handSignal.answer, unit: ""}
            else {
                let popORshift = Math.floor(Math.random() * 2)
                if(popORshift) examResultData[i] = {value: rngFrom.pop(), unit: ""}
                else examResultData[i] = {value: rngFrom.shift(), unit: ""}
            }
        }
    }
    if(props.RCL){
        switch (props.RCL.grove) {
            case "AT 750B":
                RclImage = <div className='exam-question-rcl-img-container' style={{backgroundImage: `url(${props.RCL.img})`}} >
                                <div className='exam-question-rcl-img-angle'  style={{top:"65%",right:"20%"}}>{props.RCL.angle}°</div>
                                <div className='exam-question-rcl-img-length' style={{top:"74%",right:"70%"}}>{props.RCL.length}m</div>
                                {/* <div className='exam-question-rcl-img-height' style={{top:"",right:""}}>{props.RCL.height}m</div> */}
                                <div className='exam-question-rcl-img-radius' style={{top:"24%",right:"86%"}}>{props.RCL.radius}m</div>
                            </div>
                break;
            case "RT 755":
                RclImage = <div className='exam-question-rcl-img-container' style={{backgroundImage: `url(${props.RCL.img})`}} > 
                                <div className='exam-question-rcl-img-angle'  style={{top:"73%",right:"82%"}}>{props.RCL.angle}°</div>
                                <div className='exam-question-rcl-img-length' style={{top:"55%",right:"26%"}}>{props.RCL.length}m</div>
                                <div className='exam-question-rcl-img-height' style={{top:"41%",right:"55%"}}>{props.RCL.height}m</div>
                                <div className='exam-question-rcl-img-radius' style={{top:"26%",right:"37%"}}>{props.RCL.radius}m</div>
                            </div>
                break;
            case "TM 1150":
                RclImage = <div className='exam-question-rcl-img-container' style={{backgroundImage: `url(${props.RCL.img})`}} > 
                            <div className='exam-question-rcl-img-angle'  style={{top:"76%",right:"77%"}}>{props.RCL.angle}°</div>
                            <div className='exam-question-rcl-img-length' style={{top:"59%",right:"25%"}}>{props.RCL.length}m</div>
                            <div className='exam-question-rcl-img-height' style={{top:"58%",right:"59%"}}>{props.RCL.height}m</div>
                            <div className='exam-question-rcl-img-radius' style={{top:"32%",right:"36%"}}>{props.RCL.radius}m</div>
                        </div>
                break;
            default:
                break;
        }
    }
    return (
        <div className='exam-question'>
            <div className='exam-question-line'>
                {   props.weight &&
                    <div><span>{props.order}.</span> How many {props.weight.answerKey} is <span >({props.weight.number}) {props.weight.key} </span> . Do any calculations in this space.</div>
                }
                {
                    props.range &&
                    <div>
                        <div><span>{props.order}.</span> Using the grove <span >({props.range.grove})</span> Range Diagram.</div>
                        <div className='exam-question-data'>
                            <div>{props.range.data1} = {props.range.dataNum1} {props.range.data1 === "Angle" ? "°" : "M"} </div>
                            <div>{props.range.data2} = {props.range.dataNum2} {props.range.data2 === "angle" ? "°" : "M"}</div>
                        </div>
                        
                        <div className='exam-question-mainQst'><span>What is the {props.range.key}?</span></div>
                    </div>
                }
                {   props.POL &&
                    <div><span>{props.order}.</span> Using the grove <span >({props.POL.grove})</span>load chart . how many parts of line are needed to lift <span >({`${props.POL.weight} ${props.POL.unit}`})</span> .</div>
                }
                {   props.handSignal &&
                    <div>
                        <div><span>{props.order}.</span> What does this sign mean?.</div>
                        <div>
                            <img src={props.handSignal.img} className="exam-question-handSignal-img" />
                        </div>
                    </div>
                }
                {   props.RCL &&
                    <div>
                        <div style={{textAlign: "center"}} >Refer to drawing and the Grove <span >({props.RCL.grove})</span> load chart and range diagram.</div>
                        <h5 style={{textAlign: "center"}}>{props.RCL.qst}</h5>
                        {RclImage}
                    </div>
                }
            </div>
            <div >
                {
                    (props.weight || props.range || props.POL|| props.handSignal ) && 
                    <div className='exam-question-results'>
                        <ExamResult data={examResultData[0]} order="A"  name={props.inputName} id={uuid.v1()} checked={props.checked} />
                        <ExamResult data={examResultData[1]} order="B"  name={props.inputName} id={uuid.v1()} checked={props.checked}  />
                        <ExamResult data={examResultData[2]} order="C"  name={props.inputName} id={uuid.v1()} checked={props.checked}  />
                        <ExamResult data={examResultData[3]} order="D"  name={props.inputName} id={uuid.v1()} checked={props.checked}  />
                    </div>
                }
                {
                    props.RCL && 
                    <ExamResult data={props.RCL.weights}  />
                }
                {
                    props.RCL && 
                    <hr/>
                }
                {
                    props.RCL && 
                    <div className='exam-question-rcl-img-container' style={{backgroundImage: `url(${props.RCL.img})`}} ></div>
                }
                {
                    props.RCL && 
                    <ExamResult data={props.RCL.weights} empty={true} />
                }
                
                

            </div>

    </div>
      
    )
  }
  export default ExamQuestion;