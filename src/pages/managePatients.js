import { Switch, Route } from 'react-router-dom'
import '../styles/patients.scss'

import TextHeader from '../components/common/TextHeader'
import NavBar from '../components/common/navbar/index'

import CommonStat from '../components/patients/common/index'
import OCEStat from '../components/patients/OCE/index'

export default function PatientsList() {
    return (
        <div className="patients">
            <TextHeader text="patients statistics" />
            <div className="charts-container">
                <NavBar
                    navLinks={[
                        {
                            text: 'common',
                            href: 'manage-patients/common'
                        },
                        {
                            text: 'odf',
                            href: 'manage-patients/odf'
                        },
                        {
                            text: 'oce',
                            href: 'manage-patients/oce'
                        },
                        {
                            text: 'paro',
                            href: 'manage-patients/paro'
                        },
                        {
                            text: 'proth',
                            href: 'manage-patients/proth'
                        },
                        {
                            text: 'pcb',
                            href: 'manage-patients/pcb'
                        }
                    ]}
                />
                <Switch>
                    <Route path="/home/manage-patients/common" component={CommonStat} />
                    <Route path="/home/manage-patients/odf" component={OCEStat} />
                </Switch>
            </div>
        </div>
    )
}
