import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import ClassLimda from './ClassLimda'
import ClassKinedyAplegate from './ClassKinedyAplegate'

export default function ProtheseStat() {
    const _isMounted = useRef(true)
    const [protheseState, setProtheseState] = useState(false)

    async function getODFStat(setProtheseState) {
        let response = await Fetch.GET('admin/statistics/patients/prothese', undefined, localStorage.Token)
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    const { protheseStat } = data
                    setProtheseState(() => (protheseStat ? protheseStat : false))
                }
            }
        }
    }

    useEffect(() => {
        getODFStat(setProtheseState)
        return () => {
            _isMounted.current = false
        }
    }, [])

    // const {
    //     motifConsultation,
    //     decisionTherapeutiquePartielle,
    //     decisionTherapeutiqueTotal,
    //     classificationKinedyAplegateMandibule,
    //     classificationKinedyAplegateMaxillaire,
    //     calssificationLimdaMandibule,
    //     calssificationLimdaMaxillaire
    // } = protheseState

    return (
        <>
            {protheseState ? (
                <>
                    <ClassLimda calssificationLimda={undefined} />
                    <ClassKinedyAplegate classificationKinedyAplegate={undefined} />
                </>
            ) : (
                ''
            )}
        </>
    )
}
