import PolarAreaChart from '../../charts/PolarAreaChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function SitSta({ classSitSta }) {
    classSitSta = {
        class1: 16,
        class2: 9,
        class3: 11
    }

    const { labels, chartData, colors, total } = simpleHandler(classSitSta)

    const sitStaData = {
        labels: [...labels],
        datasets: [
            {
                label: 'sit sta',
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="sit-sta" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <PolarAreaChart chartData={sitStaData} />
        </div>
    )
}
