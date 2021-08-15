import './style.scss'
import { useContext } from 'react'
import { ContextConsumer } from '../../../../context'

export default function ResultTab() {
    const { cephaloResult } = useContext(ContextConsumer)
    const { angles, distances } = cephaloResult

    console.log(angles, 'ANG')
    console.log(distances, 'DIS')

    const renderResult = (object) => {
        const arr = []
        for (let entry in object) {
            arr.push(`${entry}-${object[entry]}`)
        }
        return arr.map((item) => {
            const res = item.split('-')
            return (
                <>
                    <p>
                        {res[0]}: <span>{res[1]}</span>
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
