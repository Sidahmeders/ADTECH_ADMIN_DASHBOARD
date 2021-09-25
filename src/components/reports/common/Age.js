import PolarAreaChart from '../../charts/PolarAreaChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function Age({ age }) {
    const { labels, chartData, colors, total } = simpleHandler(age)
    const percentAgeLabels = labels.map((item) => item.split(' ')[0])

    const ageData = {
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
            <Title label="age records" total={total} />
            <Percentage labels={percentAgeLabels} data={chartData} colors={colors} />
            <PolarAreaChart chartData={ageData} />
        </div>
    )
}
