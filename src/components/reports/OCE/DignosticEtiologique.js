import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function DignosticEtiologique({ dignosticEtiologique }) {
    dignosticEtiologique = {
        carie: 10,
        traumtisme: 14,
        autre: 6
    }

    const { labels, chartData, colors, total } = simpleHandler(dignosticEtiologique)

    const dignosticEtioData = {
        labels: [...labels],
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
            <Percentage labels={labels} data={chartData} colors={colors} />
            <DoughChart chartData={dignosticEtioData} />
        </div>
    )
}
