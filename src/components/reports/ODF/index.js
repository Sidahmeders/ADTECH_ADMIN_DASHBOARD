import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import DignosticPostive from './DignosticPostive'
import DirectionCraoissance from './DirectionCraoissance'
import DignosticEtiologique from '../OCE/DignosticEtiologique'

export default function ODFStat() {
    const _isMounted = useRef(true)
    const [odfState, setOdfState] = useState(false)

    async function getODFStat(setOdfState) {
        let response = await Fetch.GET('admin/statistics/patients/odf', localStorage.Token)
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    const { odfStat } = data
                    setOdfState(() => (odfStat ? odfStat : false))
                }
            }
        }
    }

    useEffect(() => {
        getODFStat(setOdfState)
        return () => {
            _isMounted.current = false
        }
    }, [])

    const {
        motifConsultation,
        hygieneBuccaul,
        classSquelitique,
        typologieFacial,
        directionCraoissanceFacial,
        directionCraoissanceMandibulaire,
        decisionTherapeutique,
        formeClinique
    } = odfState

    return (
        <>
            {odfState ? (
                <>
                    {/* <DignosticPostive dignosticPostive={dignosticPostive} /> */}
                    {/* <DignosticEtiologique dignosticEtiologique={dignosticEtiologique} /> */}
                    {/* <DirectionCraoissance directionCraoissance={directionCraoissance} /> */}
                </>
            ) : (
                ''
            )}
        </>
    )
}
