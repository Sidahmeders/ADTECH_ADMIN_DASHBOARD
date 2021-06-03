import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getSpecialtyData = (data) => {
    const labels = []
    const chartData = []
    for (let entry in data) {
        labels.push(entry)
        chartData.push(data[entry].total)
    }
    return {
        labels,
        chartData
    }
}

export default function Specialties({ patients }) {
    const total = patients.total
    const specialties = patients.specialty

    const { labels, chartData } = getSpecialtyData(specialties)
    const colors = ['skyblue', 'blue', 'red', 'green', 'orange']

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
