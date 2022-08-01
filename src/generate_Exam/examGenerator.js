import ExamQuestion from '../Components/ExamQuestion' 
const {importImages} = require('./imagesImport')

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function generateWeigth(){
  const keys = ["KG", "LBS", "TON"]
  let minWeight = 2500
  let maxWeight = 37500
  const key = keys[Math.floor(Math.random() * 3)]
  let weight = {
    number: 0,
    answer: 0,
    key: "",
    answerKey: ""
  }
  switch (key) {
    case "KG":
      weight.answerKey = "KG"
      if(Math.floor(Math.random() * 2)){
        minWeight = minWeight * 2.2
        maxWeight = maxWeight * 2.2
        do {
          weight.number = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight
        } while ((((weight.number*10) % 22)/10) != 0);
        weight.answer = Math.ceil(weight.number / 2.2)
        weight.key = "LBS"
      }else{
        minWeight = minWeight / 1000
        maxWeight = maxWeight / 1000
        weight.number = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight
        weight.answer = weight.number * 1000 //kg
        weight.key = "TON"
      }
      
      break;
    case "LBS":
      weight.answerKey = "LBS"
      if(Math.floor(Math.random() * 2)){
        minWeight = minWeight * 2.2
        maxWeight = maxWeight * 2.2
        do {
          weight.answer = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight
        } while ((((weight.answer*10) % 22)/10) != 0);
        weight.number = Math.ceil(weight.answer / 2.2) // kg
        weight.key = "KG"
      }else{
        minWeight = minWeight * 2.2
        maxWeight = maxWeight * 2.2
        do {
          weight.answer = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight
        } while ((((weight.answer*10) % 22)/10) != 0);
        weight.number = weight.answer / 2200 //ton
        weight.key = "TON"
      }
    
      break;
    case "TON":
      weight.answerKey = "TON"
      if(Math.floor(Math.random() * 2)){
        minWeight = minWeight * 2.2
        maxWeight = maxWeight * 2.2
        do {
          weight.number = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight
        } while ((((weight.number*10) % 22)/10) != 0);
        weight.answer = weight.number / 2200 // ton
        weight.key = "LBS"
      }else{
        weight.number = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight
        weight.answer = weight.number / 1000
        weight.key = "KG"
      }
    
      break;
  
    default:
      break;
  }
  return weight
}
function randomBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export function generateWeigthsEelements(name){
    let weights=[]
    for(let i=0; i<20; i++){
        let weight = generateWeigth()
        weights.push(<ExamQuestion key={i} weight={weight} order={i+1} inputName={"inputsNumber"+i} qstType={name} />)
    }
    return weights
}
export function generateRanges(name){
  console.log("in range  function 1")
    let Ranges=[]
    let groves = ["AT 750B","RT 755","TM 1150"]
    let qstKeys = ["length","top height","angle","radius","hook elevation"]
    for(let i=0; i<20; i++){
        let Range = {
            data1 : "",
            data2 : "",
            grove : "",
            key : "",
            dataNum1 :0,
            dataNum2 : 0,
            answer: 0
        }
        let data = {
          data2: "",
          dataNum2: 0
        }
        const rgrove = groves[ Math.floor(Math.random() * groves.length) ]
        const rkey = qstKeys[Math.floor(Math.random() * qstKeys.length)]
        console.log("in range  function 2")
        switch(rkey) {
            case "length":
                Range.dataNum1 = randomBetween(8,44)
                Range.data1 = "Radius"
                if(Math.floor(Math.random() * 2)){
                  data={data2:"top height",dataNum2: randomBetween(10,50)} 
                  Range.answer = calcRangeLength(Range.dataNum1,data.dataNum2,0)
                }else{
                  data={data2:"angle",dataNum2: randomBetween(10,71)}
                  Range.answer = calcRangeLength(Range.dataNum1,0,data.dataNum2)
                }
              break;
            case "top height":
                Range.dataNum1 = randomBetween(8,20)
                Range.data1 = "Radius"
                if(Math.floor(Math.random() * 2)){
                  data={data2:"length",dataNum2: randomBetween(21,44)} 
                  Range.answer = calcRangeHeight(Range.dataNum1,0,data.dataNum2)
                }else{
                  data={data2:"angle",dataNum2: randomBetween(10,71)}
                  Range.answer = calcRangeHeight(Range.dataNum1,data.dataNum2,0)
                }
            break;
            case "angle":
                Range.dataNum1 = randomBetween(8,20)
                Range.data1 = "Radius"
                if(Math.floor(Math.random() * 2)){
                  data={data2:"top height",dataNum2: randomBetween(21,50)} 
                  Range.answer = calcRangeAngle(Range.dataNum1,data.dataNum2,0)
                }else{
                  data={data2:"length",dataNum2: randomBetween(11,40)}
                  Range.answer = calcRangeAngle(Range.dataNum1,0,data.dataNum2)
                }
            break;
            case "radius":
                Range.dataNum1 = randomBetween(10,71)
                Range.data1 = "Angle"
                if(Math.floor(Math.random() * 2)){
                  data={data2:"top height",dataNum2: randomBetween(10,50)} 
                  Range.answer = calcRangeRadius(Range.dataNum1,data.dataNum2,0)
                }else{
                  data={data2:"length",dataNum2: randomBetween(11,40)}
                  Range.answer = calcRangeRadius(Range.dataNum1,0,data.dataNum2)
                }
            break;
            case "hook elevation":
                Range.dataNum1 = randomBetween(8,44)
                Range.data1 = "Radius"
                if(Math.floor(Math.random() * 2)){
                  data={data2:"length",dataNum2: randomBetween(11,40)}
                  Range.answer = randomBetween(10,40)
                }else{
                  data={data2:"angle",dataNum2: randomBetween(10,71)}
                  Range.answer = randomBetween(10,40)
                }
              break;
            default:
              break;
              
          }
          console.log("in range  function 3")
        Range={...Range, grove: rgrove, key: rkey, data2: data.data2, dataNum2: data.dataNum2}
        Ranges.push(<ExamQuestion key={i} range={Range} order={i+1} inputName={"inputsNumber"+i} qstType={name}/>)
    }
    console.log("in range  function 4")
    return Ranges
}

export function generatePartOfLineElements(name){
  let POLs = []
  let groves = ["AT 750B","RT 755","TM 1150"]
  let fakeAnswer1 = 0
  let fakeAnswer2 = 0
  let fakeAnswer3 = 0
  for(let i=0; i<20; i++){
    let POL = {
        grove : "",
        weight: 0,
        unit : "",
        answer: 0,
        fakeAnswers: []
    }
    const rgrove = groves[ Math.floor(Math.random() * groves.length) ]
    const rweight = Math.floor(Math.random() * (100 - 10 + 1)) + 10 // in TON
    switch(rgrove) {
        case "AT 750B":
            let rng = Math.floor(Math.random() * 3) 
            if(rng === 0){
              POL.unit = "TON"
              POL.grove = rgrove
              POL.weight = rweight
              POL.answer = Math.ceil((rweight * 1000) / 5860)
              fakeAnswer1 = Math.ceil((rweight * 1000) / 6850)
              fakeAnswer2 = Math.ceil((rweight * 1000) / 9166)
              fakeAnswer3 = Math.ceil((rweight * 1000) / 6250)
              POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
            }else if (rng === 1) {
              POL.unit = "KG"
              POL.grove = rgrove
              POL.weight = rweight * 1000
              POL.answer = Math.ceil((rweight * 1000) / 5860)
              fakeAnswer1 = Math.ceil((rweight * 1000) / 6850)
              fakeAnswer2 = Math.ceil((rweight * 1000) / 9166)
              fakeAnswer3 = Math.ceil((rweight * 1000) / 6250)
              POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
            } else {
              POL.unit = "LBS"
              POL.grove = rgrove
              POL.weight = rweight * 2200
              POL.answer = Math.ceil((rweight * 1000) / 5860)
              fakeAnswer1 = Math.ceil((rweight * 1000) / 6850)
              fakeAnswer2 = Math.ceil((rweight * 1000) / 9166)
              fakeAnswer3 = Math.ceil((rweight * 1000) / 6250)
              POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
            }
          break;
        case "RT 755":
          let rng2 = Math.floor(Math.random() * 3) 
          if(rng2 === 0){
            POL.unit = "TON"
            POL.grove = rgrove
            POL.weight = rweight
            POL.answer = Math.ceil((rweight * 1000) / 6250)
            fakeAnswer1 = Math.ceil((rweight * 1000) / 5860)
            fakeAnswer2 = Math.ceil((rweight * 1000) / 9166)
            fakeAnswer3 = Math.ceil((rweight * 1000) / 5260)
            POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
          }else if (rng2 === 1) {
            POL.unit = "KG"
            POL.grove = rgrove
            POL.weight = rweight * 1000
            POL.answer = Math.ceil((rweight * 1000) / 6250)
            fakeAnswer1 = Math.ceil((rweight * 1000) / 5860)
            fakeAnswer2 = Math.ceil((rweight * 1000) / 9166)
            fakeAnswer3 = Math.ceil((rweight * 1000) / 5260)
            POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
          } else {
            POL.unit = "LBS"
            POL.grove = rgrove
            POL.weight = rweight * 2200
            POL.answer = Math.ceil((rweight * 1000) / 6250)
            fakeAnswer1 = Math.ceil((rweight * 1000) / 5860)
            fakeAnswer2 = Math.ceil((rweight * 1000) / 9166)
            fakeAnswer3 = Math.ceil((rweight * 1000) / 5260)
            POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
          }
        break;
        case "TM 1150":
          let rng3 = Math.floor(Math.random() * 3) 
          if(rng3 === 0){
            POL.unit = "TON"
            POL.grove = rgrove
            POL.weight = rweight
            POL.answer = Math.ceil((rweight * 1000) / 9166)
            fakeAnswer1 = Math.ceil((rweight * 1000) / 5860)
            fakeAnswer2 = Math.ceil((rweight * 1000) / 6199)
            fakeAnswer3 = Math.ceil((rweight * 1000) / 6250)
            POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
          }else if (rng3 === 1) {
            POL.unit = "KG"
            POL.grove = rgrove
            POL.weight = rweight * 1000
            POL.answer = Math.ceil((rweight * 1000) / 9166)
            fakeAnswer1 = Math.ceil((rweight * 1000) / 5860)
            fakeAnswer2 = Math.ceil((rweight * 1000) / 6199)
            fakeAnswer3 = Math.ceil((rweight * 1000) / 6250)
            POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
          } else {
            POL.unit = "LBS"
            POL.grove = rgrove
            POL.weight = rweight * 2200
            POL.answer = Math.ceil((rweight * 1000) / 9166)
            fakeAnswer1 = Math.ceil((rweight * 1000) / 5860)
            fakeAnswer2 = Math.ceil((rweight * 1000) / 6199)
            fakeAnswer3 = Math.ceil((rweight * 1000) / 6250)
            POL.fakeAnswers = fixDuplicatedValues(POL.answer, fakeAnswer1, fakeAnswer2, fakeAnswer3)
          }
        break;
        default:
          break;
      }

    POLs.push(<ExamQuestion key={i} POL={POL} order={i+1} inputName={"inputsNumber"+i} qstType={name}/>)
  }
  return POLs
} 
export function generateHandSignalsElements(name) {
  let signals=[]
  let signalsImg = importImages("hand signals")
  let handSignalsText =[
    "Use main hoist",
    "Use auxiliary hoist",
    "Raise boom",
    "Lower boom",
    "Raise hoist",
    "Raise hoist slowly",
    "Lower hoist",
    "Lower hoist slowly",
    "Extend boom",
    "Retract boom",
    "Extend boom one hand",
    "Retract boom one hand",
    "Lower boom & raise hoist",
    "Raise boom & lower hoist",
    "Stop",
    "Swing",
    "Dog everything"
  ]
  for (let index = 0; index < signalsImg.length; index++) {
    let signal ={
      img: signalsImg[index],
      answer: handSignalsText[index],
      fakeAnswers: ["","",""]
    }
    while ( signal.answer === signal.fakeAnswers[0] || signal.answer === signal.fakeAnswers[1] || signal.answer === signal.fakeAnswers[2] || 
      signal.fakeAnswers[0] === signal.fakeAnswers[1] || signal.fakeAnswers[0] === signal.fakeAnswers[2] ||
      signal.fakeAnswers[1] === signal.fakeAnswers[2] ) {
      
        signal.fakeAnswers[0] = handSignalsText[Math.floor(Math.random() * 17)]
        signal.fakeAnswers[1] = handSignalsText[Math.floor(Math.random() * 17)]
        signal.fakeAnswers[2] = handSignalsText[Math.floor(Math.random() * 17)]
    }
    signals[index] = <ExamQuestion key={index} handSignal={signal} order={index+1} inputName={"inputsNumber"+index} qstType={name} /> ;
    
  }
  signals = shuffle(signals)
  return signals
}
function generateRclLoadweights(grove) {
  let Loadweights = []
  switch (grove) {
    case "AT 750B":
      Loadweights[0] = "LOAD WEIGHT"
      Loadweights[1] = "RIGGING EQUIPMENT WEIGHT"
      Loadweights[2] = "STOWED SWINGAWY"
      Loadweights[3] = "EXTENDED SWINGAWY"
      Loadweights[4] = "POWER PIN FLY EXTENDED"
      Loadweights[5] = "POWER PIN FLY STOWED"
      Loadweights[6] = "13.6 MT 1 – SHEAVE"
      Loadweights[7] = "27.2 MT 2 - SHEAVE"
      Loadweights[8] = "36.3 MT 4 - SHEAVE"
      Loadweights[9] = "36.3 MT 4 – SHEAVE (W/CHEEK PLATES)"
      Loadweights[10] = "40.8 MT 3 – SHEAVE"
      Loadweights[11] = "40.8 MT 3- SHEAVE (W/CHEEK PLATES)"
      Loadweights[12] = "AUXILIARY BOOM NOSE"
      Loadweights[13] = "9.1 MT. HEADACHE BALL"
      Loadweights[14] = "6.8 MT. HEADACHE BALL"
      
      break;
    case "RT 755":
      Loadweights[0] = "LOAD WEIGHT"
      Loadweights[1] = "RIGGING EQUIPMENT WEIGHT"
      Loadweights[2] = "STOWED SWINGAWY"
      Loadweights[3] = "EXTENDED SWINGAWY"
      Loadweights[4] = "POWER PIN FLY EXTENDED"
      Loadweights[5] = "POWER PIN FLY STOWED"
      Loadweights[6] = "55 Ton (50 MT) 4 Sheave"
      Loadweights[7] = "15 Ton (13.6 MT) 1 Sheave"
      Loadweights[8] = "Auxiliary Boom Head"
      Loadweights[9] = "5 Ton (4.5 MT) Headache Ball"
      Loadweights[10] = "7-1/2 Ton (6.8 MT) Headache Ball"
      Loadweights[11] = "10 Ton (9.1 MT) Headache Ball"
    
      break;
    case "TM 1150":
      Loadweights[0] = "LOAD WEIGHT"
      Loadweights[1] = "RIGGING EQUIPMENT WEIGHT"
      Loadweights[2] = "STOWED SWINGAWY"
      Loadweights[3] = "EXTENDED SWINGAWY"
      Loadweights[4] = "POWER PIN FLY EXTENDED"
      Loadweights[5] = "POWER PIN FLY STOWED"
      Loadweights[6] = "125Ton6 – SHEAVE"
      Loadweights[7] = "30 Ton1 - SHEAVE"
      Loadweights[8] = "AUXILIARY BOOM BALL"
      Loadweights[9] = "10Ton HEADACHE BALL"
      Loadweights[10] = "15Ton HEADACHE BALL"
    
      break;
  
    default:
      break;
  }
  return Loadweights
}
export function generateRclElements(name){
  let Rcl= {
    grove: "",
    img   : "",
    height: "",
    length: "",
    angle : "",
    radius: "",
    weights: [],
    qst: ""
  }
  let rclImgs = importImages("rcl")
  let groves = ["AT 750B","RT 755","TM 1150"]
  let min = {
    height: 10,
    length: 10,
    angle : 10,
    radius: 4,
  }
  let max = {
    height: 54,
    length: 60,
    angle : 71,
    radius: 44,
  } 
  const randomGroveNumber = Math.floor(Math.random() * groves.length)
  Rcl.grove = groves[ randomGroveNumber ]
  Rcl.img = rclImgs[randomGroveNumber]
  Rcl.height = Math.floor(Math.random() * (max.height - min.height + 1)) + min.height
  Rcl.length = Math.floor(Math.random() * (max.length - min.length + 1)) + min.length
  Rcl.angle = Math.floor(Math.random() * (max.angle - min.angle + 1)) + min.angle
  Rcl.radius = Math.floor(Math.random() * (max.radius - min.radius + 1)) + min.radius
  Rcl.weights = generateRclLoadweights(Rcl.grove)

  switch (name) {
    case "Total weight":
      Rcl.qst = "What is the total weight of the load?"
      break;
    case "Maximum radius":
      Rcl.qst = "What is the Maximum Radius can be lifted?"
      break;
    case "Gross capacity":
      Rcl.qst = "What is the Gross Capacity at Minimum Radius?"
      break;
    case "Boom angle high and low":
      Rcl.qst = "What is the High Boom Angle at Minimum Radius?"
      break;
    case "Loaded boom angle":
      Rcl.qst = "What is the Loaded Boom Angle at Minimum Radius?"
      break;
    case "Maximum Boom Length":
      Rcl.qst = "What is the Maximum Boom Length of the lift shown?"
      break;
  
    default:
      break;
  }

  return <ExamQuestion RCL={Rcl} inputName={"inputsNumber"+1} qstType={name} />
}

function fixDuplicatedValues(mainValue, value1, value2, value3) {
  let values = []
  let plusORminus = 0
  while ( mainValue === value1 || mainValue === value2 || mainValue === value3 || value1 === value2 || value1 === value3 || value2 === value3  ) {
    plusORminus = Math.floor(Math.random() * 2)
    if(plusORminus) {
      value1++
      value2--
      value3 = value3 + Math.floor(Math.random() * 4)
    }
    else{
      value1--
      value2++
      value3 = value3 + Math.floor(Math.random() * 4)
    }
  }
  values[0] = value1
  values[1] = value2
  values[2] = value3
  return values
}
export function radiansToDegrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
function degreesToRadians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}
function calcRangeAngle(radius, height = 0, length = 0) {
  if ( height ) {
    return Math.floor(radiansToDegrees(Math.atan(height / radius)) )
  }
  if (length) {
    return Math.floor(radiansToDegrees(Math.acos(radius / length))) // R/L >= -1 && <= 1 
  }
}
function calcRangeHeight(radius, angle = 0, length = 0) {
  if ( angle ) {
    return Math.floor(radius * Math.tan(angle)) // need fix
  }
  if (length) {
    return Math.floor(Math.sqrt(( length * length) - (radius * radius))) // need adjustment
  }
}
function calcRangeLength(radius, height = 0, angle = 0) {
  if ( height ) {
    return Math.floor(Math.sqrt(( radius * radius) + (height * height)))
  }
  if (angle) {
    return Math.floor( radius / Math.cos(degreesToRadians(angle))) // angle !== 90 // need fix
  }
}
function calcRangeRadius(angle, height = 0, length = 0) {
  if ( height ) {
    return Math.floor( height / Math.tan(degreesToRadians(angle))) // angle !== 90
  }
  if (length) {
    // return  Math.sqrt(( length * length) - (height * height))
    return Math.floor( Math.cos(degreesToRadians(angle)) * length)
  }
}

