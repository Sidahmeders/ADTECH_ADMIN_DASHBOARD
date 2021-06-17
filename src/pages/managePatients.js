import { useEffect, useState, useRef } from 'react'
import Fetch from '../utils/fetchData'
import '../styles/patients.scss'

import TextHeader from '../components/common/TextHeader'
import NavBar from '../components/common/navbar/index'
import Specialties from '../components/patients/common/Specialty'
import Sex from '../components/patients/common/Sex'
import Age from '../components/patients/common/Age'
import HygieneBuccal from '../components/patients/common/HygieneBuccaul'
import MotifDeConsultation from '../components/patients/common/MotifConsultation'
import { common } from '../data/commonData'

const { hygienBuccaul, motifConsultation } = common

export default function PatientsList() {
    const _isMounted = useRef(true)
    const [patientsStat, setPatientStat] = useState(false)

    async function getPatientsStat(setPatientStat) {
        let response = await Fetch.GET('admin/patients/common-stat')
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

    console.log(patientsStat)

    return (
        <div className="patients">
            <TextHeader text="patients statistics" />
            <div className="charts-container">
                <NavBar
                    navLinks={[
                        {
                            text: 'common',
                            href: 'patients/common'
                        },
                        {
                            text: 'odf',
                            href: 'patients/odf'
                        },
                        {
                            text: 'oce',
                            href: 'patients/oce'
                        },
                        {
                            text: 'paro',
                            href: 'patients/paro'
                        },
                        {
                            text: 'proth',
                            href: 'patients/proth'
                        },
                        {
                            text: 'pcb',
                            href: 'patients/pcb'
                        }
                    ]}
                />
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
            </div>
        </div>
    )
}
