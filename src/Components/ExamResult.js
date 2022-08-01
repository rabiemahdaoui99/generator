import React from 'react'
const ExamResult = (props) => {
    let result = ""
    if (props.name) {
        result = <div className='exam-question-result'>
                    <input type="radio" id={props.id} name={props.name}  />
                    <label htmlFor={props.id} ><span>{props.order}.</span> {props.data.value} {props.data.unit}</label>
                </div>
    } else {
        const rows = props.data.map((weight,i) => 
            {
                let val = ""
                if(i === 0) val = `${Math.floor(Math.random() * (700 - 200 + 1) +  200)} KG`
                if(i === 1) val = `${Math.floor(Math.random() * (200 - 59 + 1) +  59)} KG`
                if(i > 1) Math.floor(Math.random() * 3) == 0 ? val = "⩗" : val = ""
                return (<tr key={i}>
                        <td className="tg-0lax tg-left" colSpan="2">{weight}</td>
                        <td className="tg-0lax tg-right">{props.empty ? "" : val}</td>
                    </tr>)
            }
        
        )
        result = <table className="tg">
                    <thead>
                        {rows}
                    </thead>
                </table>
    }
    return (
            
       <div>
        {
            result
        }
       </div>
      
    )
  }
  export default ExamResult;