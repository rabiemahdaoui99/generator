import Image0 from '../images/handSignals/0.png'
import Image1 from '../images/handSignals/1.png'
import Image2 from '../images/handSignals/2.png'
import Image3 from '../images/handSignals/3.png'
import Image4 from '../images/handSignals/4.png'
import Image5 from '../images/handSignals/5.png'
import Image6 from '../images/handSignals/6.png'
import Image7 from '../images/handSignals/7.png'
import Image8 from '../images/handSignals/8.png'
import Image9 from '../images/handSignals/9.png'
import Image10 from '../images/handSignals/10.png'
import Image11 from '../images/handSignals/11.png'
import Image12 from '../images/handSignals/12.png'
import Image13 from '../images/handSignals/13.png'
import Image14 from '../images/handSignals/14.png'
import Image15 from '../images/handSignals/15.png'
import Image16 from '../images/handSignals/16.png'

import ATimage from '../images/rcl/at.png'
import RTimage from '../images/rcl/rt.png'
import TMimage from '../images/rcl/tm.png'


export function importImages(exam) {
    if(exam === "hand signals"){
        let signalsImg = []
        signalsImg[0] = Image0
        signalsImg[1] = Image1
        signalsImg[2] = Image2
        signalsImg[3] = Image3
        signalsImg[4] = Image4
        signalsImg[5] = Image5
        signalsImg[6] = Image6
        signalsImg[7] = Image7
        signalsImg[8] = Image8
        signalsImg[9] = Image9
        signalsImg[10] = Image10
        signalsImg[11] = Image11
        signalsImg[12] = Image12
        signalsImg[13] = Image13
        signalsImg[14] = Image14
        signalsImg[15] = Image15
        signalsImg[16] = Image16
        return signalsImg
    }if (exam === "rcl") {
        let rclImgs = []
        rclImgs[0] = ATimage
        rclImgs[1] = RTimage
        rclImgs[2] = TMimage
        return rclImgs

    }
    
}

