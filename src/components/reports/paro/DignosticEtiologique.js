import BarChart from '../../charts/BarChart'
import Title from '../../charts/addons/Title'
// import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function DignosticEtiologique({ dignosticEtiologique }) {
    const { labels, chartData, colors, total } = simpleHandler(dignosticEtiologique)

    let altLabels = labels.map((label) => label.replace(/_/g, ' '))

    const dignosticEtioData = {
        labels: [...altLabels],
        datasets: [
            {
                label: 'dignosticEtiologique',
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div style={{ width: '60vw' }}>
            <Title label="dignostic etiologique" total={total} />
            {/* <Percentage labels={labels} data={chartData} colors={colors} /> */}
            <BarChart chartData={dignosticEtioData} />
        </div>
    )
}
