import DignosticPostive from './DignosticPostive'
import DirectionCraoissance from './DirectionCraoissance'

//FIXME: this is a fake data that shoud be removed
import { ODF } from '../../../data/odfData'
const { dignostic_postive, direction_de_craoissance } = ODF

export default function ODFStat() {
    return (
        <>
            <DignosticPostive dignostic_postive={dignostic_postive} />
            <DirectionCraoissance directionCraoissance={direction_de_craoissance} />
        </>
    )
}
