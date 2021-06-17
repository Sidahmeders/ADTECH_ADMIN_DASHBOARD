import ClassBlack from './ClassBlack'
import SitSta from './SitSta'
import DentCousale from './DentCousale'
import DignosticEtiologique from './DignosticEtiologique'
import Treatment from './Treatment'

//FIXME: this is a fake data that shoud be removed
import { OCE } from '../../../data/oceData'
const { calssification_de_black, sit_sta, dent_cousale, dignostic_etiologique, treatment } = OCE

export default function OCEStat() {
    return (
        <>
            <ClassBlack calssification_de_black={calssification_de_black} />
            <SitSta sit_sta={sit_sta} />
            <DentCousale dent_cousale={dent_cousale} />
            <DignosticEtiologique dignostic_etiologique={dignostic_etiologique} />
            <Treatment treatment={treatment} />
        </>
    )
}
