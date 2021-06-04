import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getMotifDeConsultaionData = (data) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(entry)
        chartData.push(data[entry])
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        total += data[entry]
    }

    return {
        labels,
        chartData,
        colors,
        total
    }
}

export default function MotifDeConsultation({ motifDeConsultation }) {
    const { labels, chartData, colors, total } = getMotifDeConsultaionData(motifDeConsultation)

    const motifDeConsultationData = {
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
            <DoughChart chartData={motifDeConsultationData} />
        </div>
    )
}
