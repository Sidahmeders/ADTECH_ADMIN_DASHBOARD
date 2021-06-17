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

export default function DignosticPostive({ dignostic_postive }) {
    const { class_squelitique, typologie_facial } = dignostic_postive
    const classSquelitique = getDignosticPostiveData(class_squelitique)
    const typologieFacial = getDignosticPostiveData(typologie_facial)
    const fillData = [0, 0, 0]

    const dignosticPostiveData = {
        labels: [...classSquelitique.labels, ...typologieFacial.labels],
        datasets: [
            {
                label: 'class squelitique',
                backgroundColor: classSquelitique.colors,
                data: [...classSquelitique.chartData, ...fillData]
            },
            {
                label: 'typologie facial',
                backgroundColor: typologieFacial.colors,
                data: [...fillData, ...typologieFacial.chartData]
            }
        ]
    }

    return (
        <div>
            <Title
                label="dignostic postive"
                total={classSquelitique.total + typologieFacial.total}
            />
            <Percentage
                labels={[...classSquelitique.labels, ...typologieFacial.labels]}
                data={[...classSquelitique.chartData, ...typologieFacial.chartData]}
                colors={[...classSquelitique.colors, ...typologieFacial.colors]}
            />
            <RadarChart chartData={dignosticPostiveData} />
        </div>
    )
}
