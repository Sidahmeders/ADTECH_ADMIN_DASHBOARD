import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import DignosticEtiologique from './DignosticEtiologique'

export default function ParoStat() {
    const _isMounted = useRef(true)
    const [paroState, setParoState] = useState(false)

    async function getParoStat(setParoState) {
        let response = await Fetch.GET('admin/statistics/patients/paro', localStorage.Token)
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    const { paroStat } = data
                    setParoState(() => (paroStat ? paroStat : false))
                }
            }
        }
    }

    useEffect(() => {
        getParoStat(setParoState)
        return () => {
            _isMounted.current = false
        }
    }, [])

    const {
        decisionTherapeutique,
        diagnosticPositive,
        diagnosticEtiologiqueDirecteDeclenchant,
        diagnosticEtiologiqueDirecteFavorisant,
        diagnosticEtiologiqueIndirecte
    } = paroState

    return (
        <>
            {paroState ? (
                <>
                    <DignosticEtiologique
                        dignosticEtiologique={diagnosticEtiologiqueDirecteDeclenchant}
                    />
                    <DignosticEtiologique
                        dignosticEtiologique={diagnosticEtiologiqueDirecteFavorisant}
                    />
                    <DignosticEtiologique dignosticEtiologique={diagnosticEtiologiqueIndirecte} />
                </>
            ) : (
                ''
            )}
        </>
    )
}
