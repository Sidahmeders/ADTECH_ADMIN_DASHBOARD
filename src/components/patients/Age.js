import PolarAreaChart from '../charts/PolarAreaChart'
import Title from './Title'

const getAgeData = (data) => {
    const labels = []
    const total = []
    for (let entry in data) {
        labels.push(`${data[entry].range} ${entry}`)
        total.push(data[entry].total)
    }

    return {
        labels,
        total
    }
}

export default function Age({ ages }) {
    const { labels, total } = getAgeData(ages)
    const ageData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
                data: [...total]
            }
        ]
    }

    return (
        <div>
            <Title label="total records" total={total.reduce((a, b) => a + b)} />
            <PolarAreaChart chartData={ageData} />
        </div>
    )
}
