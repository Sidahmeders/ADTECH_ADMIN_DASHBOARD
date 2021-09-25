import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import ClassBlack from './ClassBlack'
import SitSta from './SitSta'
import DentCousale from './DentCousale'
import DignosticEtiologique from './DignosticEtiologique'
import Treatment from './Treatment'

export default function OCEStat() {
    const _isMounted = useRef(true)
    const [oceState, setOceState] = useState(false)

    async function getOCEStat(setOceState) {
        let response = await Fetch.GET('admin/statistics/patients/oce')
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    const { oceStat } = data
                    setOceState(() => (oceStat ? oceStat : false))
                }
            }
        }
    }

    useEffect(() => {
        getOCEStat(setOceState)
        return () => {
            _isMounted.current = false
        }
    }, [])

    const {
        // motifConsultation,
        // decisionTherapeutique,
        // diagnosticPositive,
        // diagnosticEtiologique,
        classSitSta,
        classBlack,
        dentCousale
    } = oceState

    return (
        <>
            {oceState ? (
                <>
                    <ClassBlack classBlack={classBlack} />
                    <DignosticEtiologique dignosticEtiologique={undefined} />
                    <DentCousale dentCousale={dentCousale} />
                    <SitSta classSitSta={classSitSta} />
                    <Treatment treatment={undefined} />
                </>
            ) : (
                ''
            )}
        </>
    )
}
