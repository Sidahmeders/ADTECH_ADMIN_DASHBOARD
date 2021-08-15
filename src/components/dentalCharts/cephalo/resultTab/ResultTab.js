import './style.scss'
import { useContext } from 'react'
import { ContextConsumer } from '../../../../context'

export default function ResultTab() {
    const { cephaloResult } = useContext(ContextConsumer)
    console.info(cephaloResult, 'CEPHALO RESULT')

    return (
        <div className="result-tab">
            <h1>HELLO CEPHALO RESULT</h1>
        </div>
    )
}
