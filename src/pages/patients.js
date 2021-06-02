import '../styles/patients.scss'

import Specialties from '../components/patients/Specialty'
import Sex from '../components/patients/Sex'
import Age from '../components/patients/Age'
import HygieneBuccal from '../components/patients/HygieneBuccal'

import { common } from '../data/dummyData'
import MotifDeConsultation from '../components/patients/MotifDeConsultation'

const { patients, sex, ages, hygiene_buccaux_dentaires, motif_de_consultation } = common

export default function PatientsList() {
    return (
        <div className="patients">
            <Specialties patients={patients} />
            <Sex sex={sex} />
            <Age ages={ages} />
            <HygieneBuccal hygieneBuccal={hygiene_buccaux_dentaires} />
            <MotifDeConsultation motifDeConsultation={motif_de_consultation} />
        </div>
    )
}
