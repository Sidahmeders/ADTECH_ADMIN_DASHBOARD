import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getDirectionCraoiData = (data, addonLabel) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(`${addonLabel}_${entry}`)
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

export default function DirectionCraoissance({ directionCraoissance }) {
    const { facial, mandibulaire } = directionCraoissance
    const facialData = getDirectionCraoiData(facial, 'faci')
    const mandibulaireData = getDirectionCraoiData(mandibulaire, 'mand')

    const labels = [...facialData.labels, ...mandibulaireData.labels]
    const colors = [...facialData.colors, ...mandibulaireData.colors]
    const filler = [0, 0, 0]

    const directionCraoiData = {
        labels: labels,
        datasets: [
            {
                label: 'facial',
                backgroundColor: colors,
                data: [...facialData.chartData, ...filler]
            },
            {
                label: 'mandibulaire',
                backgroundColor: colors,
                data: [...filler, ...mandibulaireData.chartData]
            }
        ]
    }

    return (
        <div>
            <Title
                label="direction craoissance"
                total={facialData.total + mandibulaireData.total}
            />
            <Percentage
                labels={labels}
                data={[...facialData.chartData, ...mandibulaireData.chartData]}
                colors={colors}
            />
            <PieChart chartData={directionCraoiData} />
        </div>
    )
}
