import RadarChart from '../../charts/RadarChart'
import Title from '../../charts/addons/Title'

const getClassKinedyAplegateData = (data, addonLabel) => {
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

export default function ClassKinedyAplegate({ classificationKinedyAplegate }) {
    const { mandibule, maxillaire } = classificationKinedyAplegate
    const mandibuleData = getClassKinedyAplegateData(mandibule, 'mand')
    const maxillaireData = getClassKinedyAplegateData(maxillaire, 'maxi')

    const colors = [...mandibuleData.colors, ...maxillaireData.colors]
    const lables = [...mandibuleData.labels, ...maxillaireData.labels]
    const Filler = [0, 0, 0, 0, 0, 0]

    const classKinedyAplegateData = {
        labels: lables,
        datasets: [
            {
                label: 'mandibule',
                backgroundColor: colors,
                data: [...mandibuleData.chartData, ...Filler]
            },
            {
                label: 'maxillaire',
                backgroundColor: colors,
                data: [...Filler, ...maxillaireData.chartData]
            }
        ]
    }
    return (
        <div>
            <Title
                label="class kinedy aplegate"
                total={mandibuleData.total + maxillaireData.total}
            />
            <RadarChart chartData={classKinedyAplegateData} />
        </div>
    )
}
