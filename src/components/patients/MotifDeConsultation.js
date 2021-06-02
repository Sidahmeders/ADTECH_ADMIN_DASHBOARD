import DoughChart from '../charts/DoughChart'
import Title from './Title'

const getMotifDeConsultaionData = (data) => {
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

export default function MotifDeConsultation({ motifDeConsultation }) {
    const { labels, chartData, total } = getMotifDeConsultaionData(motifDeConsultation)

    const motifDeConsultationData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: ['blue', 'orange', 'green', 'gray'],
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="total records" total={total} />
            <DoughChart chartData={motifDeConsultationData} />
        </div>
    )
}
