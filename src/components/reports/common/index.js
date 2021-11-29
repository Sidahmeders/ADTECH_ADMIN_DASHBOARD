import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import Specialties from './Specialty'
import Sex from './Sex'
import Age from './Age'
import HygieneBuccal from './HygieneBuccaul'
import MotifDeConsultation from './MotifConsultation'

export default function CommonStat() {
    const _isMounted = useRef(true)
    const [commonState, setCommonState] = useState(false)

    async function getCommonStat(setCommonState) {
        let response = await Fetch.GET('admin/statistics/patients/common', localStorage.Token)
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    const { commonStat } = data
                    setCommonState(() => (commonStat ? commonStat : false))
                }
            }
        }
    }

    useEffect(() => {
        getCommonStat(setCommonState)
        return () => {
            _isMounted.current = false
        }
    }, [])

    const { motifConsultation, hygienBuccaul, specialty, sex, age } = commonState

    return (
        <>
            {commonState ? (
                <>
                    <MotifDeConsultation motifConsultation={motifConsultation} />
                    <HygieneBuccal hygienBuccaul={hygienBuccaul} />
                    <Specialties specialties={specialty} />
                    <Sex sex={sex} />
                    <Age age={age} />
                </>
            ) : (
                ''
            )}
        </>
    )
}
