import { useEffect, useState, useRef } from 'react'
import Fetch from '../../../utils/fetchData'

import Specialties from './Specialty'
import Sex from './Sex'
import Age from './Age'
import HygieneBuccal from './HygieneBuccaul'
import MotifDeConsultation from './MotifConsultation'

//FIXME: this is a fake data that shoud be removed
import { common } from '../../../data/commonData'
const { hygienBuccaul, motifConsultation } = common

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

    const { specialty, sex, ages } = patientsStat

    return (
        <>
            {patientsStat ? (
                <>
                    <Specialties specialties={specialty} />
                    <Sex sex={sex} />
                    <Age ages={ages} />
                </>
            ) : (
                ''
            )}
            <HygieneBuccal hygienBuccaul={hygienBuccaul} />
            <MotifDeConsultation motifConsultation={motifConsultation} />
        </>
    )
}
