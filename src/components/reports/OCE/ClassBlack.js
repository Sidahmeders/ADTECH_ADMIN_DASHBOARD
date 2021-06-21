import PolarAreaChart from '../../charts/PolarAreaChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getClassBlackData = (data) => {
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

export default function ClassBlack({ calssification_de_black }) {
    const { labels, chartData, colors, total } = getClassBlackData(calssification_de_black)

    const classBlackData = {
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
            <Title label="class black" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <PolarAreaChart chartData={classBlackData} />
        </div>
    )
}
