import { Switch, Route } from 'react-router-dom'
import '../styles/reports.scss'

import TextHeader from '../components/common/TextHeader'
import TopNavbar from '../components/common/topNavbar/index'
import CommonStat from '../components/reports/common/index'
import ODFStat from '../components/reports/ODF/index'
import OCEStat from '../components/reports/OCE/index'
import ProtheseStat from '../components/reports/PROTH/index'

export default function PatientsList() {
    return (
        <>
            <TextHeader text="patients statistics" />
            <div className="reports">
                <TopNavbar
                    navLinks={[
                        {
                            text: 'common',
                            href: 'reports/common'
                        },
                        {
                            text: 'odf',
                            href: 'reports/odf'
                        },
                        {
                            text: 'oce',
                            href: 'reports/oce'
                        },
                        {
                            text: 'paro',
                            href: 'reports/paro'
                        },
                        {
                            text: 'proth',
                            href: 'reports/proth'
                        },
                        {
                            text: 'pcb',
                            href: 'reports/pcb'
                        }
                    ]}
                />
                <Switch>
                    <Route path="/home/reports/common" component={CommonStat} />
                    <Route path="/home/reports/odf" component={ODFStat} />
                    <Route path="/home/reports/oce" component={OCEStat} />
                    <Route path="/home/reports/proth" component={ProtheseStat} />
                </Switch>
            </div>
        </>
    )
}
