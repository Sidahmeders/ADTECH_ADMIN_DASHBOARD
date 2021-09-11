import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import ClassLimda from './ClassLimda'
import ClassKinedyAplegate from './ClassKinedyAplegate'

export default function ProtheseStat() {
    const _isMounted = useRef(true)
    const [protheseState, setProtheseState] = useState(false)

    async function getODFStat(setProtheseState) {
        let response = await Fetch.GET('admin/statistics/patients/prothese')
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    setProtheseState(() => data.prothStat)
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

    const { calssificationLimda, classificationKinedyAplegate } = protheseState

    return (
        <>
            {protheseState ? (
                <>
                    <ClassLimda calssificationLimda={calssificationLimda} />
                    <ClassKinedyAplegate
                        classificationKinedyAplegate={classificationKinedyAplegate}
                    />
                </>
            ) : (
                ''
            )}
        </>
    )
}
