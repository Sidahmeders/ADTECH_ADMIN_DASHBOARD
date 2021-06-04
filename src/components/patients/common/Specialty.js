import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getSpecialtyData = (data) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(entry)
        chartData.push(data[entry].total)
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        total += data[entry].total
    }
    return {
        labels,
        chartData,
        colors,
        total
    }
}

export default function Specialties({ specialties }) {
    const { labels, chartData, colors, total } = getSpecialtyData(specialties)

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
            <Title label="total records" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <PieChart chartData={specialtyData} />
        </div>
    )
}
