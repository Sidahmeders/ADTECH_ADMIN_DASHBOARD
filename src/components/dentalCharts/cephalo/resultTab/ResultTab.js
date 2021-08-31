import './style.scss'
import { useContext } from 'react'
import { ContextConsumer } from '../../../../context'
import interpertations from './interpertations.js'
import getInterpertations from '../functions/getInterpertations.js'

export default function ResultTab() {
    const { cephaloResult } = useContext(ContextConsumer)
    const { angles, distances } = cephaloResult

    const renderResult = (object, isAngle) => {
        const arr = []
        for (let entry in object) {
            arr.push({ pointName: entry, pointValue: object[entry] })
        }
        return arr.map((item) => {
            const { pointName, pointValue } = item

            const targetAngle = interpertations[pointName]
            const angleInterpertation = getInterpertations(pointValue, targetAngle)

            return (
                <div key={pointName}>
                    <span className="name">{pointName}:</span>
                    <span className="value">
                        {pointValue}
                        {isAngle ? '°' : ''}
                    </span>
                    <span className="interpretation">{angleInterpertation}</span>
                </div>
            )
        })
    }

    return (
        <div className="result-tab">
            <h3>angels</h3>
            {renderResult(angles, true)}
            <h3>distances</h3>
            {renderResult(distances)}
        </div>
    )
}
