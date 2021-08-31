import './style.scss'
import { useContext } from 'react'
import { ContextConsumer } from '../../../../context'
import interpertations from './interpertations.js'

function getInterpertations(angleValue, targetAngle) {
    angleValue = parseInt(angleValue)
    console.log(angleValue)
    if (!angleValue || !targetAngle) {
        return '<-------------------------->'
    } else if (angleValue >= targetAngle.min && angleValue <= targetAngle.max) {
        return targetAngle.average
    } else if (angleValue >= targetAngle.max) {
        return targetAngle.high
    } else if (angleValue <= targetAngle.min) {
        return targetAngle.low
    }
}

export default function ResultTab() {
    const { cephaloResult } = useContext(ContextConsumer)
    const { angles, distances } = cephaloResult

    const renderResult = (object) => {
        const arr = []
        for (let entry in object) {
            arr.push(`${entry}-${object[entry]}`)
        }
        return arr.map((item) => {
            const res = item.split('-')
            const angleName = res[0]
            const angleValue = res[1]

            const targetAngle = interpertations[angleName]
            const angleInterpertation = getInterpertations(angleValue, targetAngle)

            return (
                <>
                    <p>
                        <span className="name">{angleName}:</span>
                        <span className="value">{angleValue}°</span>
                        <span className="interpretation">{angleInterpertation}</span>
                    </p>
                </>
            )
        })
    }

    return (
        <div className="result-tab">
            <h3>angels</h3>
            {renderResult(angles)}
            <h3>distances</h3>
            {renderResult(distances)}
        </div>
    )
}
