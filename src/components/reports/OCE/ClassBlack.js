import PolarAreaChart from '../../charts/PolarAreaChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function ClassBlack({ classBlack }) {
    classBlack = {
        class1: 8,
        class2: 8,
        class3: 14,
        class4: 11,
        class5: 12
    }

    const { labels, chartData, colors, total } = simpleHandler(classBlack)

    const classBlackData = {
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
            <Title label="class black" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <PolarAreaChart chartData={classBlackData} />
        </div>
    )
}
