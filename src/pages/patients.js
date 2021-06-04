import { useEffect, useState } from 'react'
import '../styles/patients.scss'

import Specialties from '../components/patients/common/Specialty'
import Sex from '../components/patients/common/Sex'
import Age from '../components/patients/common/Age'
import HygieneBuccal from '../components/patients/common/HygieneBuccal'
import MotifDeConsultation from '../components/patients/common/MotifDeConsultation'
import { common, getAllPatients } from '../data/commonData'
const { hygiene_buccaux_dentaires, motif_de_consultation } = common

export default function PatientsList() {
    const [state, setState] = useState(false)

    useEffect(() => {
        getAllPatients(setState)
    }, [])

    const { specialty, sex, ages } = state

    console.log(state)

    return (
        <div className="patients">
            {state ? (
                <>
                    <Specialties specialties={specialty} />
                    <Sex sex={sex} />
                    <Age ages={ages} />
                </>
            ) : (
                ''
            )}
            <HygieneBuccal hygieneBuccal={hygiene_buccaux_dentaires} />
            <MotifDeConsultation motifDeConsultation={motif_de_consultation} />
        </div>
    )
}
