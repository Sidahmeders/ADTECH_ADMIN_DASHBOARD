import RadarChart from '../../charts/RadarChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getDignosticPostiveData = (data) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(entry)
        chartData.push(data[entry])
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}66`)
        total += data[entry]
    }

    return {
        labels,
        chartData,
        colors,
        total
    }
}

export default function DignosticPostive({ dignosticPostive }) {
    const { class_squelitique, typologie_facial } = dignosticPostive
    const classSquelitiqueData = getDignosticPostiveData(class_squelitique)
    const typologieFacialData = getDignosticPostiveData(typologie_facial)

    const labels = [...classSquelitiqueData.labels, ...typologieFacialData.labels]
    const filler = [0, 0, 0]

    const dignosticPostiveData = {
        labels: labels,
        datasets: [
            {
                label: 'class squelitique',
                backgroundColor: classSquelitiqueData.colors,
                data: [...classSquelitiqueData.chartData, ...filler]
            },
            {
                label: 'typologie facial',
                backgroundColor: typologieFacialData.colors,
                data: [...filler, ...typologieFacialData.chartData]
            }
        ]
    }

    return (
        <div>
            <Title
                label="dignostic postive"
                total={classSquelitiqueData.total + typologieFacialData.total}
            />
            <Percentage
                labels={labels}
                data={[...classSquelitiqueData.chartData, ...typologieFacialData.chartData]}
                colors={[...classSquelitiqueData.colors, ...typologieFacialData.colors]}
            />
            <RadarChart chartData={dignosticPostiveData} />
        </div>
    )
}
