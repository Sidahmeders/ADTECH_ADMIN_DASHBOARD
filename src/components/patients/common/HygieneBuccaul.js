import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getHygineBuccaulData = (data) => {
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

export default function HygieneBuccaul({ hygienBuccaul }) {
    const { labels, chartData, colors, total } = getHygineBuccaulData(hygienBuccaul)

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
