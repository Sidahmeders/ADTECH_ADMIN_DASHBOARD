import ClassLimda from './ClassLimda'
import ClassKinedyAplegate from './ClassKinedyAplegate'

//FIXME: this is a fake data that shoud be removed
import { prothese } from '../../../data/protheseData'
const { calssification_de_limda, classification_de_kinedy_aplegate } = prothese

export default function ProtheseStat() {
    return (
        <>
            <ClassLimda classLimda={calssification_de_limda} />
            <ClassKinedyAplegate classKinedyAplegate={classification_de_kinedy_aplegate} />
        </>
    )
}
