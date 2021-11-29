import RadarChart from '../../charts/RadarChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function DignosticPostive({ dignosticPostive }) {
    // const { class_squelitique, typologie_facial } = dignosticPostive

    let class_squelitique = { class1: 9, class2: 14, class3: 12 }
    let typologie_facial = {
        open_bite: 7,
        normo_bite: 15,
        deep_bite: 9
    }

    const classSquelitiqueData = simpleHandler(class_squelitique)
    const typologieFacialData = simpleHandler(typologie_facial)

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
