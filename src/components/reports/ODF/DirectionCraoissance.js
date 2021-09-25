import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'
import simpleHandler from '../_handlers/simple_handler'

export default function DirectionCraoissance({ directionCraoissance }) {
    // const { facial, mandibulaire } = directionCraoissance

    let facial = {
        ant: 19,
        post: 14,
        moyen: 12
    }
    let mandibulaire = {
        ant: 6,
        post: 8,
        moyen: 15
    }

    const facialData = simpleHandler(facial, 'facial')
    const mandibulaireData = simpleHandler(mandibulaire, 'mand')

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
