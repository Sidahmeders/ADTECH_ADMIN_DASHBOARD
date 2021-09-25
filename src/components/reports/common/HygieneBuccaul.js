import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function HygieneBuccaul({ hygienBuccaul }) {
    hygienBuccaul = {
        bon: 24,
        moyenne: 12,
        mauvais: 17
    }

    const { labels, chartData, colors, total } = simpleHandler(hygienBuccaul)

    const hygieneBuccalData = {
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
            <Title label="hygiene buccual" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <PieChart chartData={hygieneBuccalData} />
        </div>
    )
}
