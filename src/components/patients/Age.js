import PolarAreaChart from '../charts/PolarAreaChart'
import Title from '../charts/addons/Title'
import Percentage from '../charts/addons/Percentage'

const getAgeData = (chartData) => {
    const labels = []
    const data = []
    let total = 0
    for (let entry in chartData) {
        labels.push(`${chartData[entry].range} ${entry}`)
        data.push(chartData[entry].total)
        total += chartData[entry].total
    }

    return {
        labels,
        data,
        total
    }
}

export default function Age({ ages }) {
    const { labels, data, total } = getAgeData(ages)
    const colors = ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4']
    const percentAgeLabels = labels.map((item) => item.split(' ')[0])

    const ageData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: colors,
                data: [...data]
            }
        ]
    }

    return (
        <div>
            <Title label="total records" total={total} />
            <Percentage labels={percentAgeLabels} data={data} colors={colors} />
            <PolarAreaChart chartData={ageData} />
        </div>
    )
}
