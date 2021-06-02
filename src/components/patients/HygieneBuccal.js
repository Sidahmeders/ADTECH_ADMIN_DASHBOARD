import PieChart from '../charts/PieChart'
import Title from './Title'

const getHygineBuccalData = (data) => {
    const labels = []
    const chartData = []
    let total = 0
    for (let entry in data) {
        labels.push(entry)
        chartData.push(data[entry])
        total += data[entry]
    }

    return {
        labels,
        chartData,
        total
    }
}

export default function HygieneBuccal({ hygieneBuccal }) {
    const { labels, chartData, total } = getHygineBuccalData(hygieneBuccal)

    const hygieneBuccalData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: ['blue', 'orange', 'green'],
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="total records" total={total} />
            <PieChart chartData={hygieneBuccalData} />
        </div>
    )
}
