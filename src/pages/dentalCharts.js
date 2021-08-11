import { Switch, Route } from 'react-router-dom'
import '../styles/dentalCharts.scss'
import Cephalo from '../components/dentalCharts/cephalo/Cephalo'
import ODFChart from '../components/dentalCharts/odfChart/ODFChart'
import TextHeader from '../components/common/TextHeader'
import TopNavbar from '../components/common/topNavbar/index'

const DentalCharts = () => {
    return (
        <>
            <TextHeader text="dental charts" />
            <div className="dental-charts">
                <TopNavbar
                    navLinks={[
                        {
                            text: 'cephalo metric',
                            href: 'dental-charts/cephalo-metric'
                        },
                        {
                            text: 'odf chart',
                            href: 'dental-charts/odf-chart'
                        }
                    ]}
                />
                <Switch>
                    <Route path="/home/dental-charts/cephalo-metric" component={Cephalo} />
                    <Route path="/home/dental-charts/odf-chart" component={ODFChart} />
                </Switch>
            </div>
        </>
    )
}

export default DentalCharts
