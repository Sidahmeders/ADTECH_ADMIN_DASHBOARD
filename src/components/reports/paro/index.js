import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import DignosticEtiologique from '../OCE/DignosticEtiologique'

export default function ParoStat() {
    const _isMounted = useRef(true)
    const [paroState, setParoState] = useState(false)

    async function getParoStat(setParoState) {
        let response = await Fetch.GET('admin/patients/statistics/paro')
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    setParoState(() => data.paroStat)
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

    const { dignosticEtiologique } = paroState

    return (
        <>
            {paroState ? (
                <>
                    <DignosticEtiologique dignosticEtiologique={dignosticEtiologique} />
                </>
            ) : (
                ''
            )}
        </>
    )
}
