import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

export default function Sex({ sex }) {
    const labels = ['male', 'female']
    const chartData = [sex.male, sex.female]
    const colors = ['blue', 'pink']

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
            <Title label="total patients" total={sex.female + sex.male} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <DoughChart chartData={sexData} />
        </div>
    )
}
