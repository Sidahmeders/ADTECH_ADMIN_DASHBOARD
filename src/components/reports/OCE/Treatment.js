import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function Treatment({ treatment }) {
    treatment = {
        fonctionnele: 9,
        esthetique: 16,
        douleure: 14,
        autre: 11
    }

    const { labels, chartData, colors, total } = simpleHandler(treatment)

    const treatmentData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    const perecentLabels = labels.map((label) => (label = label.substr(0, 7)))

    return (
        <div>
            <Title label="treatment" total={total} />
            <Percentage labels={perecentLabels} data={chartData} colors={colors} />
            <PieChart chartData={treatmentData} />
        </div>
    )
}
