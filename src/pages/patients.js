import { useEffect, useState } from 'react'
import '../styles/patients.scss'

import TextHeader from '../components/common/TextHeader'
import NavBar from '../components/common/navbar/index'
import Specialties from '../components/patients/common/Specialty'
import Sex from '../components/patients/common/Sex'
import Age from '../components/patients/common/Age'
import HygieneBuccal from '../components/patients/common/HygieneBuccaul'
import MotifDeConsultation from '../components/patients/common/MotifConsultation'
import { common, getAllPatients } from '../data/commonData'
const { hygienBuccaul, motifConsultation } = common

export default function PatientsList() {
    const [state, setState] = useState(false)

    useEffect(() => {
        getAllPatients(setState)
    }, [])

    const { specialty, sex, ages } = state

    console.log(state)

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
                {state ? (
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
