import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function Specialties({ specialties }) {
    const { labels, chartData, colors, total } = simpleHandler(specialties)

    const specialtyData = {
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
            <Title label="specialty records" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <PieChart chartData={specialtyData} />
        </div>
    )
}
