import '../styles/patients.scss'

import Specialties from '../components/patients/common/Specialty'
import Sex from '../components/patients/common/Sex'
import Age from '../components/patients/common/Age'
import HygieneBuccal from '../components/patients/common/HygieneBuccal'
import MotifDeConsultation from '../components/patients/common/MotifDeConsultation'
import { common } from '../data/dummyData'
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
