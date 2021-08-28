import './style.scss'
import { useRef, useEffect } from 'react'
import { cephaloPoints, chartState } from '../_state'
import calculateTheDistanceAndAngle from '../_calculateTheDistanceAndAngle'

export default function CalcHead() {
    const getThePointLandMark = (e) => {
        // set the isPointSelected to true if it's unSelected
        chartState.isPointSelected = e.target.classList.contains('unSelected')
        // check if there is a valid-point update the entry
        if (chartState.isPointSelected) chartState.entryPoint = e.target.innerText
        // replace the class-name to disable the button
        e.target.classList.remove('unSelected')
        e.target.classList.add('selected')
        calculateTheDistanceAndAngle()
    }

    const calcHead = useRef(null)

    // render the cephalo-metric-calculator
    const renderClacHead = () => {
        // create a new div element to replace it with the Refrence
        const calculator = document.createElement('div')
        // add class attribute for styling the css
        calculator.setAttribute('class', 'buttons')

        for (let key in cephaloPoints) {
            //create a new span to be the button element
            let span = document.createElement('span')
            // set the text to be the key-entry
            span.innerText = key
            // add on-click handler
            span.onclick = getThePointLandMark
            // set the class attribute for our button element
            span.setAttribute('class', 'unSelected')
            // append the button to the div element
            calculator.appendChild(span)
        }
        // finally replace the refrence div with our new created-div calculator
        calcHead.current.replaceWith(calculator)
    }

    useEffect(() => renderClacHead())

    return (
        <div className="calc-head">
            <div ref={calcHead}></div>
        </div>
    )
}
