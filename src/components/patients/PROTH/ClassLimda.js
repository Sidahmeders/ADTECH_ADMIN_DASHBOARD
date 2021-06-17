import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getClassLimdaData = (data, addonLabel) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(`${addonLabel} cl${entry.substr(5, 5)}`)
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

export default function ClassLimda({ classLimda }) {
    const { mandibule, maxillaire } = classLimda
    const mandibuleData = getClassLimdaData(mandibule, 'mandi')
    const maxillaireData = getClassLimdaData(maxillaire, 'maxil')

    const classLimdaData = {
        labels: [...mandibuleData.labels, ...maxillaireData.labels],
        datasets: [
            {
                label: 'mandibule',
                backgroundColor: [...mandibuleData.colors],
                data: [...mandibuleData.chartData]
            },
            {
                label: 'maxillaire',
                backgroundColor: [...maxillaireData.colors],
                data: [...maxillaireData.chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="class limda" total={mandibuleData.total + maxillaireData.total} />
            <Percentage
                labels={[...mandibuleData.labels, ...maxillaireData.labels]}
                data={[...mandibuleData.chartData, ...maxillaireData.chartData]}
                colors={[...mandibuleData.colors, ...maxillaireData.colors]}
            />
            <DoughChart chartData={classLimdaData} />
        </div>
    )
}
