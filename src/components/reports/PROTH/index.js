import ClassLimda from './ClassLimda'
import ClassKinedyAplegate from './ClassKinedyAplegate'

//FIXME: this is a fake data that shoud be removed
import { prothese } from '../../../data/protheseData'
const { calssificationLimda, classificationKinedyAplegate } = prothese

export default function ProtheseStat() {
    return (
        <>
            <ClassLimda calssificationLimda={calssificationLimda} />
            <ClassKinedyAplegate classificationKinedyAplegate={classificationKinedyAplegate} />
        </>
    )
}
