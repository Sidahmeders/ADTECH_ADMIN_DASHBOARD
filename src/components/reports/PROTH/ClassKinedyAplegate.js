import RadarChart from '../../charts/RadarChart'
import Title from '../../charts/addons/Title'
import simpleHandler from '../_handlers/simple_handler'

export default function ClassKinedyAplegate({ classificationKinedyAplegate }) {
    // const { mandibule, maxillaire } = classificationKinedyAplegate
    let mandibule = { class1: 6, class2: 13, class3: 4, class4: 7, class5: 8, class6: 11 }
    let maxillaire = { class1: 16, class2: 11, class3: 2, class4: 9, class5: 8, class6: 11 }

    const mandibuleData = simpleHandler(mandibule, 'mand')
    const maxillaireData = simpleHandler(maxillaire, 'maxi')

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
