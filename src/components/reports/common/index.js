import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import Specialties from './Specialty'
import Sex from './Sex'
import Age from './Age'
import HygieneBuccal from './HygieneBuccaul'
import MotifDeConsultation from './MotifConsultation'

export default function CommonStat() {
    const _isMounted = useRef(true)
    const [patientsStat, setPatientStat] = useState(false)

    async function getPatientsStat(setPatientStat) {
        let response = await Fetch.GET('admin/patients/statistics/common')
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    setPatientStat(() => data.commonStat)
                }
            }
        }
    }

    useEffect(() => {
        getPatientsStat(setPatientStat)
        return () => {
            _isMounted.current = false
        }
    }, [])

    const { motifConsultation, hygienBuccaul, specialty, sex, age } = patientsStat

    return (
        <>
            {patientsStat ? (
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
