import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from './_handlers/simple_handler'

export default function Sex({ sex }) {
    const { labels, chartData, colors, total } = simpleHandler(sex)

    const sexData = {
        labels: labels,
        datasets: [
            {
                backgroundColor: colors,
                data: chartData
            }
        ]
    }

    return (
        <div>
            <Title label="sex records" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <DoughChart chartData={sexData} />
        </div>
    )
}
