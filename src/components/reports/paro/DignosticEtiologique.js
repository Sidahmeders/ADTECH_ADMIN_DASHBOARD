import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
// import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function DignosticEtiologique({ dignosticEtiologique }) {
    const { labels, chartData, colors, total } = simpleHandler(dignosticEtiologique)

    let labelsShort = labels.map((label) => label.slice(0, 8))

    const dignosticEtioData = {
        labels: [...labelsShort],
        datasets: [
            {
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="dignostic etiologique" total={total} />
            {/* <Percentage labels={labels} data={chartData} colors={colors} /> */}
            <DoughChart chartData={dignosticEtioData} />
        </div>
    )
}
